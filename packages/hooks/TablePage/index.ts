
import type {DinertTablePageProps, AjaxTableProps} from './types'
import { MutableRefObject, useRef } from 'react'
import lodash from 'lodash'
import {TablePageResultProps} from '@packages/components/table-page/index'
import { useImmer, Updater } from 'use-immer'
import {Form} from 'antd'

class TablePage<T, D = any, FI = any, P = object, R = any> {
    table: [DinertTablePageProps<T, D, FI>['table'], Updater<DinertTablePageProps<T, D, FI>['table']>]
    stateTable: DinertTablePageProps<T, D, FI>['table']
    updateTable: Updater<DinertTablePageProps<T, D, FI>['table']>

    form: [DinertTablePageProps<T, D, FI>['form'], Updater<DinertTablePageProps<T, D, FI>['form']>]
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

        this.params = {}
        this.oldParams = {}

    }

    // 获取请求参数
    stateTableParams: (params: P) => (Partial<P>) = () => ({} as P)
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
}


export default TablePage
