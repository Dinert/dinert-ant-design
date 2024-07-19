import React, { useState } from 'react'

import {DinertTable, RewriteTableProps} from '../../../../packages'
import { Button } from 'antd'

interface Model {
    date: string;
    name: string;
    address: string;
  }

function App() {
    const [stateTable] = useState<RewriteTableProps<Model>>({
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
                render(value) {
                    return <Button type="primary">{value}</Button>
                },
            },
            {
                dataIndex: 'address',
                title: '地址'
            },
            {
                dataIndex: 'operations',
                title: '操作',
                width: 200,
                operations: {
                    view: {
                        message: '查看',
                        onClick(column) {
                            console.log(column, 'columnnnnnnn')
                        },

                    },
                    edit: {
                        onClick(column) {
                            console.log(column, 'columnnnnnn')
                        },
                    },
                    delete: {
                        onClick(column) {
                            console.log(column, '删除')
                        },
                        confirm: {
                            onCancel() {
                                console.log('取消')
                            },
                        }
                    }
                }
            }
        ]
    })

    return (
        <DinertTable {...stateTable}>

        </DinertTable>
    )
}

export default App
