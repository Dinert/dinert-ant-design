

import React, { forwardRef, useState, useImperativeHandle, useRef } from 'react'
import type {RewriteTableProps} from '@packages/components/table/types/index'
import {Button, Space, Table} from 'antd'

import RecuveTableColumn from '@packages/components/table/src/recuve-table-column'
import { getUuid } from '@packages/utils/tools'
import { resizeTaleHeight } from '../hooks'
import useWindowResize from '@packages/hooks/useWindowResize'
import { TableRef } from 'antd/es/table'
import './table.scss'
import { CheckOutlined, CloseOutlined, DeleteOutlined, DownloadOutlined, DownOutlined, PlusOutlined, UploadOutlined, UpOutlined } from '@ant-design/icons'

export interface TableResultProps {
    resizeTable:() => void,
    tableRef: TableRef
}

const mapIcon: Record<string, any> = {
    add: <PlusOutlined/>,
    delete: <DeleteOutlined/>,
    upload: <UploadOutlined />,
    download: <DownloadOutlined/>,
    open: <DownOutlined />,
    up: <UpOutlined />,
    select: <CheckOutlined />,
    close: <CloseOutlined />
}

const mapStatus: Record<string, any> = {
    add: 'primary',
}

const mapMessage: Record<string, any> = {
    add: '新增',
    delete: '删除',
    upload: '上传',
    download: '下载',
    open: '展开',
    up: '收起',
    select: '全选',
    close: '取消全选'
}


const DinertTable = forwardRef<TableResultProps, RewriteTableProps>((props: RewriteTableProps, ref) => {
    const {tableColumns, title, ...reset} = props
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

    const objectTitle = (data: any) => {
        const titleArr = []
        if (typeof title !== 'function') {
            for (const prop in title) {
                const {slot, ...itemReset} = title[prop]
                let buttonDom = (<Button icon={mapIcon[prop]}
                    key={prop}
                    type={mapStatus[prop]}
                    danger={['delete'].includes(prop)}
                    {...{...itemReset}}>
                    {itemReset.message || mapMessage[prop]}
                </Button>)
                buttonDom = slot ? slot(data) as any : buttonDom
                titleArr.push(buttonDom)
            }
        }
        return <Space>{titleArr}</Space>
    }

    return (
        <Table {...{
            ...reset,
            title: typeof title !== 'function' && title ? objectTitle : title,
            scroll: {...reset.scroll, y: scrollY || '100%' }
        }} className={[tableClass, 'dinert-table'].join(' ')} ref={tableRef}>
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
