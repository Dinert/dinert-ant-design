import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Button, Form } from 'antd'

const App = () => {

    interface Model{
        name: string;
        name2: string;
        name3: string;
        status: string;
    }

    interface FormItemProps{
        name: 'input';
        name2: 'input';
        name3: 'input';
        status: 'select'
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {},
        formItem: {
            name: {
                type: 'input',
                label: '名称',
                slot: <Button>按扭</Button>,
                options: {
                },
            },

            status: {
                type: 'select',
                label: '选择框哈',
                options: {
                    options: [
                        {value: 1, label: '222'},
                        {value: 2, label: '3333'},
                    ]
                }
            }
        }
    })

    return (
        <DinertForm {...dinertForm}>
        </DinertForm>
    )
}

export default forwardRef<any, any>(App)
