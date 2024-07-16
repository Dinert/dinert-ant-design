import React, { useState } from 'react'

import {DinertTable, RewriteTableProps} from '../../../../packages'

function App() {
    const [stateTable] = useState<RewriteTableProps>({
        rowSelection: {
        // hideSelectAll: true
        },
        tableLayout: 'fixed',

        // title: () => {
        //     return <Button type="primary" icon={<PlusOutlined />}>新增</Button>
        // },
        rowKey: 'age',
        dataSource: [
            {
                firstName: 'John',
                lastName: 'Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
        ],
        tableColumns: [
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
            },
            {
                title: 'Tags',
                dataIndex: 'tags',
            },
            {
                title: 'Action',
                dataIndex: 'action',
            }
        ]
    })

    return (
        <DinertTable {...stateTable}>

        </DinertTable>
    )
}

export default App
