import React, { useState } from 'react'

import {DinertTable, RewriteTableProps} from '../../../../packages'

function App() {
    const [stateTable] = useState<RewriteTableProps>({
        rowSelection: {
        },
        tableLayout: 'fixed',
        rowKey: 'date',
        rowIndex: {},
        pagination: {
            hideOnSinglePage: true
        },
        dataSource: [
            {
                date: '2016-05-03',
                startTime: '2016-05-03',
                endTime: '2016-05-03',
                name: 'Tom',
                address: '广州市区',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                startTime: '2016-05-03',
                endTime: '2016-05-03',
                address: '广州市区',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                startTime: '2016-05-03',
                endTime: '2016-05-03',
                address: '广州市区',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                startTime: '2016-05-03',
                endTime: '2016-05-03',
                address: '广州市区',
            },
        ],
        tableColumns: [
            // {
            //     dataIndex: 'index',
            //     title: '序号',
            //     width: 80,
            //     align: 'center',
            //     render: (text, record, index) => `${index + 1}`
            // },
            {
                dataIndex: 'date',
                title: '时间',
                children: [
                    {
                        dataIndex: 'startTime',
                        title: '开始时间'
                    },
                    {
                        dataIndex: 'endTime',
                        title: '开始时间'
                    }
                ]
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
