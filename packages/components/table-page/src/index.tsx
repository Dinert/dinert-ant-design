import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef} from 'react'

import {RewriteFormProps} from '@packages/components/form/types/index'
import {RewriteTableProps} from '@packages/components/table/types/index'
import { DinertForm } from '@packages/components/form'
import { DinertTable, TableResultProps } from '@packages/components/table'

export interface TablePageProps {
    form: RewriteFormProps
    table: RewriteTableProps
}

export interface IProps extends TableResultProps{

}

const TablePageC = forwardRef<IProps, TablePageProps>(function (props, ref) {
    const {form, table} = props
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
            <DinertForm {...form} onUnFold={onUnFold}></DinertForm>
            <DinertTable {...table} ref={dinertTable}></DinertTable>
        </div>
    )
})
TablePageC.displayName = 'DinertTablePage'
export default TablePageC