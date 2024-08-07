import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

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
        disabled: true,
        formItem: {
            name: {
                type: 'input',
                label: '名称1',
                options: {
                    disabled: false
                },
            },
            name2: {
                type: 'input',
                label: '名称2',
                options: {
                },
                col: {
                }
            },
            name3: {
                type: 'input',
                label: '名称3',
                options: {
                },
                col: {
                    span: 12
                }
            },
            status: {
                type: 'select',
                label: '选择框哈',
                options: {
                    options: [
                        {value: 1, label: '222'},
                        {value: 2, label: '3333'},
                    ]
                },
                col: {
                    span: 12
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
