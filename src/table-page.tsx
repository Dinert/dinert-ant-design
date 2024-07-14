import React, { useEffect, useRef, useState } from 'react'

import {DinertForm, DinertTablePage} from '../packages/components/index'
import {RewriteFormProps} from '@packages/components/form/types/index'

import { Form, Button } from 'antd'
import TablePage from '@packages/hooks/TablePage'
import {useImmer} from 'use-immer'
import { myType } from '@packages/utils/tools'
import { table } from 'console'


interface Model{
    name: string;
    name2: string;
    name3: string;
    name4: string;
    name5: string;
    name6: string;
    name7: string;
}

function App() {


    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        // initialValues: {
        //     name7: 1
        // },
        packUp: true,
        layout: 'inline',
        name: 'search',
        labelCol: {
        // span: 8
        },
        formItem: {
            name: {
                type: 'input',
                label: '输入框',
                options: {

                },
                vif() {
                    return true
                },
            },
            name2: {
                type: 'input-search',
                label: '搜索框',
                options: {
                },
            },
            name3: {
                type: 'textarea',
                label: '文本域',
                options: {
                }
            },
            name4: {
                type: 'input-number',
                label: '数据输入框'
            },
            name5: {
                type: 'select',
                label: '选择框',
                options: {
                    options: [
                        {value: 1, label: '222'},
                        {value: 2, label: '3333'},
                    ]
                }
            },
            name6: {
                type: 'radio',
                label: '选择框',
                options: {
                    options: [
                        {value: 1, label: '222'},
                        {value: 2, label: '3333'},
                    ]
                }
            },
            name7: {
                type: 'radio-button',
                label: '选择框',
                options: {
                    options: [
                        {value: 1, label: '222'},
                        {value: 2, label: '3333'},
                    ]
                }
            }
        }
    })

    const tablePage = new TablePage<Model, Model, any>({
        form: {
            initialValues: {name: '1111'},
            scrollToFirstError: true,
            packUp: true,
            name: 'search',
            layout: 'inline',
            formItem: {
                name: {
                    type: 'input',
                    label: '输入框',
                    options: {

                    },
                    vif(model) {
                        console.log(model, 'modellllllllll')
                        return true
                    },
                },
                name2: {
                    type: 'input-search',
                    label: '搜索框',
                    options: {
                    },
                },
                name3: {
                    type: 'textarea',
                    label: '文本域',
                    options: {
                    }
                },
                name4: {
                    type: 'input-number',
                    label: '数据输入框'
                },
                name5: {
                    type: 'select',
                    label: '选择框',
                    options: {
                        options: [
                            {value: 1, label: '222'},
                            {value: 2, label: '3333'},
                        ]
                    }
                },
                name6: {
                    type: 'radio',
                    label: '选择框',
                    options: {
                        options: [
                            {value: 1, label: '222'},
                            {value: 2, label: '3333'},
                        ]
                    }
                },
                name7: {
                    type: 'radio-button',
                    label: '选择框',
                    options: {
                        options: [
                            {value: 1, label: '222'},
                            {value: 2, label: '3333'},
                        ]
                    }
                }
            }

        },
        table: {
            rowSelection: {
                selections: false,
                defaultSelectedRowKeys: [32]
            },
            scroll: {y: 'auto'},
            tableColumns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    children: [
                        {
                            title: () => {
                                return <div className="firstName">FirstName</div>
                            },
                            dataIndex: 'firstName',
                        },
                        {
                            title: 'lastName',
                            dataIndex: 'lastName',
                        }
                    ],
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
            ],
            dataSource: [],
            pagination: {
            },
            rowKey: 'age'
        }
    })

    tablePage.getTableParams = () => {
        const pagination = stateTableRef.current.pagination || {}
        return {
            params: {
                ...formInstance?.getFieldsValue()
            },
            condition: {
                current: pagination.current
            }
        }
    }

    const {
        stateTable, stateTableRef, updateTable,
        stateForm, formInstance, updateForm
    } = tablePage
    const handleClick = () => {

        console.log(stateTable, '132131')

        formInstance?.setFieldsValue({
            name: '1321'
        })
        const values = formInstance?.getFieldsValue()
        console.log(values, 'valuesvalues')


        updateTable(draft => {
            if (draft.dataSource?.length === 0) {
                draft.dataSource = [{
                    firstName: 'John',
                    lastName: 'Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    firstName: 'John',
                    lastName: 'Brown',
                    age: 33,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    firstName: 'John',
                    lastName: 'Brown',
                    age: 34,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                }]
            } else {
                draft.dataSource = []
            }

        })

    }


    return (
        <>
            <Button onClick={handleClick}>增加表格数据</Button>
            <DinertTablePage table={stateTable} form={{...stateForm, form: formInstance}}>

            </DinertTablePage>
        </>
    )
}

export default App
