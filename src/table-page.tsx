import React, { useState } from 'react'

import {DinertForm, DinertTablePage} from '../packages/components/index'
import {RewriteFormProps} from '@packages/components/form/types/index'

import { Form, Button } from 'antd'
import TablePage from '@packages/hooks/TablePage'
import {useImmer} from 'use-immer'
import { myType } from '@packages/utils/tools'


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

    const tablePage = new TablePage<any, any, any>({
        form: {
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

        },
        table: {
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
    const {stateTable, updateTable, stateForm, formInstance, updateForm} = tablePage

    const name = Form.useWatch('name', formInstance)
    const handleClick = () => {
        console.log(dinertForm, stateForm, '132131')


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
                }]
            } else {
                draft.dataSource = []
            }

        })

    }


    return (
        <>
            <Button onClick={handleClick}>{name}</Button>
            <DinertTablePage table={stateTable} form={{...stateForm, form: formInstance}}>

            </DinertTablePage>
        </>
    )
}

export default App
