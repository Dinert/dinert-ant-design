import React, { useState } from 'react'

import {DinertTable, RewriteTableProps} from '../../../../packages'
import { Button } from 'antd'

function App() {
    const [stateTable] = useState<RewriteTableProps>({
        tableLayout: 'fixed',
        rowKey: 'date',
        // title: () => {
        //     return <Button>哈哈哈</Button>
        // },
        title: {
            add: {
                onClick() {
                    console.log('新增')
                }
            },
            delete: {
                onClick() {
                    console.log('删除')
                }
            },
            upload: {},
            download: {},
            open: {},
            up: {},
            select: {},
            // close: {},
            custom: {
                message: '删除所有',
                slot: data => {
                    return '自定义的内容'
                }
            }
        },
        pagination: {
            hideOnSinglePage: true
        },
        dataSource: [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: '广州市区',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: '广州市区',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: '广州市区',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: '广州市区',
            },
        ],
        tableColumns: [
            {
                dataIndex: 'date',
                title: '时间',
            },
            {
                dataIndex: 'name',
                title: '名称',
            },
            {
                dataIndex: 'address',
                title: '地址'
            },
        ]
    })

    return (
        <DinertTable {...stateTable}>

        </DinertTable>
    )
}

export default App
