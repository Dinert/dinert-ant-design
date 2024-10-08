
import type {DinertTablePageProps, AjaxTableProps} from './types'
import { MutableRefObject, useRef, useState, Dispatch, useEffect } from 'react'
import lodash from 'lodash'
import {MergeProp} from '@packages/components/form/types/utils'
import {DinertTablePage} from '@packages/components/table-page/index'

import { useImmer, Updater } from 'use-immer'
import {Form} from 'antd'

/**
 * T 表格data数据格式
 * D 表单model的数据格式
 * FI 表单formItem的数据格式
 * P 发起请求的数据格式
 * R 请求回来的数据格式
 */


class TablePage<T, D = any, FI = any, P = object, R = any> {
    table: [DinertTablePageProps<T, D, FI>['table'], Updater<DinertTablePageProps<T, D, FI>['table']>]
    stateTable: DinertTablePageProps<T, D, FI>['table']
    stateTableRef: MutableRefObject<DinertTablePageProps<T, D, FI>['table']>
    updateTable: Updater<DinertTablePageProps<T, D, FI>['table']>

    form: [DinertTablePageProps<T, D, FI>['form'], Updater<DinertTablePageProps<T, D, FI>['form']>]
    formInstance: DinertTablePageProps<T, D, FI>['form']['form']
    stateForm: DinertTablePageProps<T, D, FI>['form']
    stateFormRef: MutableRefObject<DinertTablePageProps<T, D, FI>['form']>
    updateForm: Updater<DinertTablePageProps<T, D, FI>['form']>

    options: DinertTablePageProps<T, D, FI>

    ids: [string[], Updater<string[]>]
    stateIds: string[]
    stateIdsRef: MutableRefObject<string[]>
    updateIds: Updater<string[]>

    selecTableDatas: [T[], Dispatch<T[]>]
    stateSelecTableDatas: T[]
    stateSelecTableDatasRef: MutableRefObject<T[]>
    updateSelecTableDatas: Dispatch<T[]>

    params: P | any
    oldParams: P | any

    tablePageRef: MutableRefObject<typeof DinertTablePage | null> = useRef(null)

    private readonly defaultOptions: DinertTablePageProps<T, D, FI> = {
        table: {
            rowSelection: {
                onChange: (selectedRowKeys, selectedRows) => {
                    this.updateIds(() => [...selectedRowKeys])
                    this.updateSelecTableDatas([...selectedRows])
                }
            },
            tableColumns: [],
            dataSource: [],
            rowKey: 'id',
            pagination: {
                current: 1,
                pageSize: 10,
                total: 0,
                pageSizeOptions: [10, 20, 30, 50, 100]
            }
        },
        form: {
            initialValues: {},
            formItem: {},
            onSearch: () => this.search(),
            onReset: () => this.resetSearch()
        }
    }

    // private readonly firstOptions: DinertTablePageProps<T, D, FI> = {
    //     table: {
    //         rowSelection: {},
    //         tableColumns: [],
    //         dataSource: [],
    //         rowKey: 'id'
    //     },
    //     form: {
    //         formItem: {}
    //     }
    // }


    constructor(options: DinertTablePageProps<T, D, FI>) {
        this.options = lodash.defaultsDeep(lodash.cloneDeep(options), this.defaultOptions)

        // this.firstOptions = lodash.cloneDeep(this.options)

        this.table = useImmer<DinertTablePageProps<T, D, FI>['table']>(this.options.table)
        this.stateTable = this.table[0]
        this.updateTable = this.table[1]
        this.stateTableRef = useRef({tableColumns: []})

        this.form = useImmer<DinertTablePageProps<T, D, FI>['form']>(this.options.form)
        this.stateForm = this.form[0]
        this.stateFormRef = useRef({formItem: {}, initialValues: {}})
        this.updateForm = this.form[1]

        this.formInstance = Form.useForm()[0]

        this.ids = useImmer<string[]>([])
        this.stateIds = this.ids[0]
        this.stateIdsRef = useRef([])
        this.updateIds = this.ids[1]

        this.selecTableDatas = useState<T[]>([])
        this.stateSelecTableDatas = this.selecTableDatas[0]
        this.stateSelecTableDatasRef = useRef([])
        this.updateSelecTableDatas = this.selecTableDatas[1]

        this.params = {}
        this.oldParams = {}

        useEffect(() => {
            this.stateTableRef.current = this.stateTable
        }, [this.stateTable])

        useEffect(() => {
            this.stateFormRef.current = this.stateForm
        }, [this.stateForm])

        useEffect(() => {
            this.stateIdsRef.current = this.stateIds
        }, [this.stateIds])

        useEffect(() => {
            this.stateSelecTableDatasRef.current = this.stateSelecTableDatas
        }, [this.stateSelecTableDatas])


    }

    // 获取请求参数
    getTableParams: (params: P) => (Partial<P>) = () => ({} as P)
    ajaxTableDataAfter: (res: R) => void = () => undefined

    sizeChange(size: number) {

        if (typeof this.stateTableRef.current.pagination !== 'boolean' && this.stateTableRef.current.pagination) {
            const pageSize = (this.stateTableRef.current as any).pagination.pageSize
            this.updateTable(draft => {
                (draft.pagination as any).pageSize = size
            })
            const pagination = (this.stateTableRef.current as any).pagination

            if ((pageSize as any) > size || (pagination.current as any) <= Math.ceil((pagination.total as any) / (pagination.pageSize as any))) {
                this.search({name: 'size', pageSize: size})
            }
        }

    }

    // 获取请求的所有参数
    getAjaxTableDataParams(options: MergeProp<P, AjaxTableProps> | any): MergeProp<P, AjaxTableProps> {
        this.params = this.getTableParams(options)

        const isSame = lodash.isEqual(this.params, this.oldParams) // 判断当前提交的参数和上一次提交的参数是否相同
        if (options.name === 'search') {
            if (!isSame) {
                this.updateTable(draft => {
                    if (typeof draft.pagination !== 'boolean' && draft.pagination) {
                        draft.pagination.current = 1
                    }
                    this.params = this.getTableParams(options)
                })
            }

            this.oldParams = lodash.cloneDeep(this.params)
        } else if (options.name === 'reset') {
            this.resetPagination()
            this.params = this.getTableParams(options)
            this.oldParams = lodash.cloneDeep(this.params)

        } else if (options.name === 'delete') {
            if (this.stateTable.dataSource && this.stateTable.dataSource.length) {
                this.updateTable(draft => {
                    if (typeof draft.pagination !== 'boolean' && draft.pagination && (draft.pagination as any).current > 1) {
                        draft.pagination.current = (draft.pagination as any).current - 1
                    }
                    this.params = this.getTableParams(options)
                })
            }
        } else if (['current', 'size', 'reset'].includes(options.name)) {
            this.oldParams = lodash.cloneDeep(this.params)
        }

        if (!['size', 'current'].includes(options.name) || !this.stateTable.rowKey) {
            this.updateSelecTableDatas([])
        }

        return this.params
    }

    async getTableData(options: (MergeProp<P, AjaxTableProps>)) {
        const res = await this.ajaxTableData(options)
        this.changeTableData(res)

        typeof this.ajaxTableDataAfter === 'function' && this.ajaxTableDataAfter(res)

        return res
    }


    // 请求
    ajaxTableData(options: (MergeProp<P, AjaxTableProps>)): Promise<R> {
        return new Promise(resolve => {
            resolve(this.getAjaxTableDataParams(options) as any)
        })
    }

    // 改变表格的参数
    changeTableData(res: R | any) {
        if (res && res.data && res.data.length) {
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].index = i + 1 + (res.pageNum as number) * (res.pageSize as number)
            }
            this.updateTable(draft => {
                draft.dataSource = res.data
                if (draft.pagination && typeof draft.pagination !== 'boolean') {
                    draft.pagination!.total = res.total
                }
            })
        }
    }

    // 查询
    search(options: (P & AjaxTableProps) | any = {name: 'search'}) {
        return this.getTableData(options)
    }

    // 重置查询
    resetSearch(options: (P & AjaxTableProps) | any = {name: 'reset'}) {
        this.resetParams()
        this.search(options)
    }

    // 重置表格请求参数
    resetParams() {
        this.formInstance?.resetFields()
    }


    // 重置分页参数
    resetPagination() {
        this.updateTable(draft => {
            draft.pagination = {...this.defaultOptions.table.pagination}
        })
    }

    // 根据key获取表格中的数据
    getTableDataKeys(key: string) {
        const ids = this.stateTableRef.current.dataSource?.map(item => (item as any)[key || (this.stateTableRef.current.rowKey as any)])
        return ids
    }
}


export default TablePage
