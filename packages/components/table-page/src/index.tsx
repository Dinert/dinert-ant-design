import React, { useRef, useImperativeHandle, forwardRef} from 'react'

import {RewriteFormProps} from '../../form/types'
import {RewriteTableProps} from '../../table/types'
import { DinertForm } from '@packages/components/form'
import { DinertTable, TableResultProps } from '@packages/components/table'

export interface TablePageProps<T = any, D = any, FI = any> {
    form: RewriteFormProps<D, FI>
    table: RewriteTableProps<T>
    search?: boolean
}


const TablePageC = forwardRef<TablePageProps, TablePageProps>((props, ref) => {
    const {form, table, search = true} = props
    const dinertTable = useRef<TableResultProps>(null)
    const onUnFold = () => {
        form.onUnFold && form.onUnFold()
        setTimeout(() => {
            dinertTable.current?.resizeTable()
        }, 300)
    }

    useImperativeHandle(ref, () => {
        // 在这里返回的内容，都可以被父组件的REF对象获取到
        return {
            ...dinertTable.current as any
        }
    })

    return (
        <div className="dinert-table-page">
            { search && <DinertForm {...{name: 'search', layout: 'inline', ...form}} onUnFold={onUnFold}></DinertForm>}
            <DinertTable {...table} ref={dinertTable}></DinertTable>
        </div>
    )
})
TablePageC.displayName = 'DinertTablePage'
export default TablePageC
