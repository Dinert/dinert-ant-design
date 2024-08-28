import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string;

    }

    interface FormItemProps{
        name: 'input-search',
        name2: 'input-search'
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {
        },
        labelCol: {
            span: 3,
        },
        formItem: {
            name: {
                type: 'input-search',
                label: '查询输入框',
                options: {
                    enterButton: true
                }
            },
            name2: {
                type: 'input-search',
                label: '查询输入框',
                options: {
                    enterButton: '查询',
                    loading: true
                }
            }
        },
    })

    return (
        <DinertForm {...dinertForm}>
        </DinertForm>
    )
}

export default forwardRef<any, any>(App)
