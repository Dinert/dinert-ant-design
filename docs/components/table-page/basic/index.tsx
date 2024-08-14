import React, { useState } from 'react'

import {DinertTablePage, TablePageProps} from '../../../../packages'

function App() {
    const [stateTablePage] = useState<TablePageProps>({
        form: {
            formItem: {
                name: {
                    label: '名称',
                    type: 'input',
                    options: {}
                },
                status: {
                    label: '状态',
                    type: 'select',
                    options: {
                        options: [
                            {value: true, label: '启用'},
                            {value: false, label: '禁用'},
                        ]
                    }
                }
            },
            initialValues: {}
        },
        table: {
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
        }

    })

    return (
        <DinertTablePage {...stateTablePage}>

        </DinertTablePage>
    )
}

export default App
