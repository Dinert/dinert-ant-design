import React, { useState } from 'react'

import {DinertTable, RewriteTableProps} from '../../../../packages'

function App() {
    const [stateTable] = useState<RewriteTableProps>({
        rowSelection: {
        },
        tableLayout: 'fixed',
        rowKey: 'date',
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
                title: '时间'
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
