import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string;

    }

    interface FormItemProps{
        name: 'autocomplete',
        name2: 'autocomplete'
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
                type: 'autocomplete',
                label: '基础补全',
                options: {
                    options: [
                        {value: '1111', label: '1111'},
                        {value: '2222', label: '2222'},
                        {value: '3333', label: '3333'},
                        {value: '4444', label: '4444'},
                        {value: '5555', label: '5555'},
                    ],

                }
            },
        },
    })

    return (
        <DinertForm {...dinertForm}>
        </DinertForm>
    )
}

export default forwardRef<any, any>(App)
