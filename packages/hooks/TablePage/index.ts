
import type {DinertTablePageProps, AjaxTableProps} from './types'
import { MutableRefObject, useRef } from 'react'
import lodash from 'lodash'
import {TablePageResultProps} from '@packages/components/table-page/index'
import {MergeProp} from '@packages/components/form/types/utils'
import { useImmer, Updater } from 'use-immer'
import {Form} from 'antd'
import { myType } from '@packages/utils/tools'

class TablePage<T, D = any, FI = any, P = object, R = any> {
    table: [DinertTablePageProps<T, D, FI>['table'], Updater<DinertTablePageProps<T, D, FI>['table']>]
    stateTable: DinertTablePageProps<T, D, FI>['table']
    updateTable: Updater<DinertTablePageProps<T, D, FI>['table']>

    form: [DinertTablePageProps<T, D, FI>['form'], Updater<DinertTablePageProps<T, D, FI>['form']>]
    formInstance: DinertTablePageProps<T, D, FI>['form']['form']
    stateForm: DinertTablePageProps<T, D, FI>['form']
    updateForm: Updater<DinertTablePageProps<T, D, FI>['form']>

    options: DinertTablePageProps<T, D, FI>

    ids: [string[], Updater<string[]>] = useImmer<string[]>([])

    selecTableDatas: [T[], Updater<T[]>] = useImmer<T[]>([])
    lastSelectDatas: [T[], Updater<T[]>] = useImmer<T[]>([])

    params: P | any
    oldParams: P | any

    tablePageRef: MutableRefObject<TablePageResultProps | null> = useRef(null)


    private readonly defaultOptions: DinertTablePageProps<T, D, FI> = {
        table: {
            tableColumns: [],
            dataSource: [],
            rowKey: 'id'
        },
        form: {
            // form: Form.useForm()[0],
            formItem: {}
        }
    }

    private readonly firstOptions: DinertTablePageProps<T, D, FI> = {
        table: {
            tableColumns: [],
            dataSource: [],
            rowKey: 'id'
        },
        form: {
            formItem: {}
        }
    }


    constructor(options: DinertTablePageProps<T, D, FI>) {
        this.options = lodash.defaultsDeep(lodash.cloneDeep(options), this.defaultOptions)

        this.firstOptions = lodash.cloneDeep(this.options)

        this.table = useImmer<DinertTablePageProps<T, D, FI>['table']>(this.options.table)
        this.stateTable = this.table[0]
        this.updateTable = this.table[1]

        this.form = useImmer<DinertTablePageProps<T, D, FI>['form']>(this.options.form)
        this.stateForm = this.form[0]
        this.updateForm = this.form[1]

        this.formInstance = Form.useForm()[0]


        this.params = {}
        this.oldParams = {}

    }

    // 获取请求参数
    getTableParams: (params: P) => (Partial<P>) = () => ({} as P)
    ajaxTableDataAfter: (res: R) => void = () => undefined

    sizeChange(size: number) {

        if (typeof this.stateTable.pagination !== 'boolean' && this.stateTable.pagination) {
            const pageSize = this.stateTable.pagination.pageSize
            this.updateTable(draft => {
                (draft.pagination as any).pageSize = size
            })
            const pagination = this.stateTable.pagination

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
                    if (typeof this.stateTable.pagination !== 'boolean' && this.stateTable.pagination) {
                        (draft.pagination as any).current = 1
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
                if (this.stateTable.dataSource.length === 1 && myType(this.stateTable.pagination) === 'object' && (this.stateTable as any).pagination.current > 1) {
                    (this.stateTable.pagination as any).current = 2
                }
                this.params = this.getTableParams(options)
            }
        } else if (options.name === 'current') {
            if (this.oldParams.data && this.oldParams.data.pageNum) {
                this.oldParams.data.pageNum = options.currentPage
            } else if (this.oldParams.data && this.oldParams.data.page) {
                this.oldParams.data.page = options.currentPage
            } else if (this.oldParams.params && this.oldParams.params.page) {
                this.oldParams.params.page = options.currentPage
            } else if (this.oldParams.params && this.oldParams.params.pageNum) {
                this.oldParams.params.pageNum = options.currentPage
            }

            if (this.oldParams.data && this.oldParams.data.pageSize) {
                this.oldParams.data.pageSize = this.table.value.pagination.pageSize
            } else if (this.oldParams.params && this.oldParams.params.pageSize) {
                this.oldParams.params.pageSize = this.table.value.pagination.pageSize
            }

            this.params = lodash.cloneDeep(this.oldParams)
        } else if (options.name === 'size') {
            if (this.oldParams.data && this.oldParams.data.pageSize) {
                this.oldParams.data.pageSize = options.pageSize
            } else if (this.oldParams.params && this.oldParams.params.pageSize) {
                this.oldParams.params.pageSize = options.pageSize
            }

            this.params = lodash.cloneDeep(this.oldParams)
        }
        if (!['size', 'current'].includes(options.name || '') || !this.table.value.rowKey) {
            this.selecTableDatas.value = []
        }

        return this.params
    }

    // 查询
    search(options: (P & AjaxTableProps) | any = {name: 'search'}) {

        for (const prop in this.stateForm?.form) {
            if ([null, undefined, ''].includes((this.stateForm?.form as any)[prop])) {
                this.updateForm(draft => {
                    delete (draft.form as any)[prop]
                })
            }
        }

        return this.getTableData(options)
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

    // 重置分页参数
    resetPagination() {
        this.updateTable(draft => {
            draft.pagination = this.defaultOptions.table.pagination
        })
    }
}


export default TablePage
