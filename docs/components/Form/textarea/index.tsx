import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string;
        name2: string;
    }

    interface FormItemProps{
        name: 'textarea',
        name2: 'textarea'
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
                type: 'textarea',
                label: '文本域',
                options: {
                }
            },
            name2: {
                type: 'textarea',
                label: '限制文本域',
                options: {
                    showCount: true,
                    maxLength: 200
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
