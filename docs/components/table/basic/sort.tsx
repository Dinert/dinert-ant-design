import React, { useState } from 'react'

import {DinertTable, RewriteTableProps} from '../../../../packages'

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
                        second: true,
                        onClick(column) {
                            console.log(column, 'columnnnnnnn')
                        },

                    },
                    edit: {
                        second: 'messageBox',
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
                    },
                    below: {
                        message: '下发指令'
                    },
                    one: {
                        message: '排第一',
                        sort: 1,
                        onClick() {
                            console.log('排第一')
                        }
                    },
                    below2: {
                        message: '停止下发指令',
                        second: 'messageBox',
                        onClick() {

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
