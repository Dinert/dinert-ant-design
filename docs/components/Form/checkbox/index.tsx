import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string[];
        name2: string[];
    }

    interface FormItemProps{
        name: 'checkbox',
        name2: 'checkbox',
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {
            name: ['Apple'],
        },
        labelCol: {
            span: 4,
        },
        formItem: {
            name: {
                type: 'checkbox',
                label: '单选按钮',
                options: {
                    options: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' },
                    ]
                }
            },
            name2: {
                type: 'checkbox',
                label: '类型按钮',
                options: {
                    options: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange', disabled: true },
                    ]
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
