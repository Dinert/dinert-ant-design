
import type {DinertTablePageProps} from './types'
import { useState, Dispatch, MutableRefObject, useRef } from 'react'
import lodash from 'lodash'
import {TablePageResultProps} from '@packages/components/table-page/index'


class TablePage<T, D = any, FI = any, P = object, R = any> {
    table: [DinertTablePageProps<T, D, FI>['table'], Dispatch<DinertTablePageProps<T, D, FI>['table']>]
    form: [DinertTablePageProps<T, D, FI>['form'], Dispatch<DinertTablePageProps<T, D, FI>['form']>]


    options: DinertTablePageProps<T, D, FI>

    ids: [string[], Dispatch<string[]>] = useState<string[]>([])

    selecTableDatas: [T[], Dispatch<T[]>] = useState<T[]>([])
    lastSelectDatas: [T[], Dispatch<T[]>] = useState<T[]>([])

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

        this.table = useState<DinertTablePageProps<T, D, FI>['table']>(this.options.table)
        this.form = useState<DinertTablePageProps<T, D, FI>['form']>(this.options.form)

        this.params = {}
        this.oldParams = {}

    }

    // 获取请求参数
    getTableParams: (params: P) => (Partial<P>) = () => ({} as P)
    ajaxTableDataAfter: (res: R) => void = () => undefined
}


export default TablePage
