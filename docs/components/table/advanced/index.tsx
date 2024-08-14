import React, { useEffect } from 'react'

import {DinertTable, TablePage} from '../../../../packages'

function App() {
    const tablePage = new TablePage({
        form: {
            formItem: {
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

    const {stateTable, updateTable} = tablePage

    tablePage.getTableParams = () => {

        return {
            url: '',
            method: 'post',
            data: {}
        }
    }
    tablePage.changeTableData = () => {
        updateTable(draft => {
            draft.dataSource = []
        })
    }

    useEffect(() => {
        setTimeout(() => {
            tablePage.search()
        }, 3000)
    }, [])

    return (
        <DinertTable {...stateTable}>

        </DinertTable>
    )
}

export default App
