import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string;
        name2: string;
    }
    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model>>({
        form: Form.useForm()[0],
        layout: 'inline',
        name: 'search',
        scrollToFirstError: true,
        packUp: false,
        labelCol: {
        },
        initialValues: {name: '222'},
        formItem: {
            name: {
                type: 'input',
                label: '输入框',
                options: {

                },
                vif() {
                    return true
                }
            },
            name2: {
                type: 'select',
                label: '选择框',
                options: {

                    options: [
                        {value: 1, label: '222'},
                        {value: 2, label: '3333'},
                    ]
                }
            }
        },
        onSearch() {
            console.log('查询')
        },
        onReset() {
            console.log('重置')
        }
    })

    return (
        <DinertForm {...dinertForm}>
        </DinertForm>
    )
}

export default forwardRef<any, any>(App)
