import React from 'react'

import {DinertTablePage, TablePage} from '../../../../packages'

function App() {
    console.log('aaaa')
    const tablePage = new TablePage({
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
            initialValues: {},
            onSearch: () => tablePage.search(),
            onReset: () => tablePage.resetSearch()
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

    const {stateTable, updateTable, stateForm, formInstance} = tablePage

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

    return (
        <DinertTablePage table={stateTable} form={{...stateForm, form: formInstance}}>

        </DinertTablePage>

    )
}

export default App
