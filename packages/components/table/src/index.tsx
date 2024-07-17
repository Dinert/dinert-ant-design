

import React, { forwardRef, useState, useImperativeHandle, useRef } from 'react'
import type {RewriteTableProps} from '@packages/components/table/types/index'
import {Table} from 'antd'

import RecuveTableColumn from '@packages/components/table/src/recuve-table-column'
import { getUuid } from '@packages/utils/tools'
import { resizeTaleHeight } from '../hooks'
import useWindowResize from '@packages/hooks/useWindowResize'
import { TableRef } from 'antd/es/table'

export interface TableResultProps {
    resizeTable:() => void,
    tableRef: TableRef
}

const DinertTable = forwardRef<TableResultProps, RewriteTableProps>((props: RewriteTableProps, ref) => {
    const {tableColumns, ...reset} = props
    const [tableClass] = useState('table_' + getUuid())
    const [scrollY, setScrollY] = useState(10)
    const tableRef = useRef<TableRef>(null)

    const resizeTable = () => {
        const y = resizeTaleHeight(reset.scroll, tableClass)
        setScrollY(y)
    }

    useWindowResize(() => {
        resizeTable()
    }, 100, true)

    useImperativeHandle(ref, () => {
        // 在这里返回的内容，都可以被父组件的REF对象获取到
        return {
            resizeTable,
            tableRef: tableRef.current as TableRef
        }
    })

    return (
        <Table {...{...reset, scroll: {...reset.scroll, y: scrollY || '100%' }}} className={tableClass} ref={tableRef}>
            {
                reset.rowIndex && <Table.Column {... {
                    dataIndex: 'index',
                    title: '序号',
                    width: 80,
                    align: 'center',
                    render: (text, record, index) => `${index + 1}`,
                    ...reset.rowIndex as any
                }}></Table.Column>
            }
            {RecuveTableColumn(props)}
        </Table>
    )
})

DinertTable.displayName = 'DinertTable'
export default DinertTable
