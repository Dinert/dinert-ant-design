import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: boolean;
        name2: boolean;
        name3: boolean;
    }

    interface FormItemProps{
        name: 'switch',
        name2: 'switch',
        name3:'switch',
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {
            name: true,
            name3: true
        },
        labelCol: {
            span: 3,
        },
        formItem: {
            name: {
                type: 'switch',
                label: '基础开关',
                options: {

                }
            },
            name2: {
                type: 'switch',
                label: '文字开关',
                options: {
                    checkedChildren: '开启',
                    unCheckedChildren: '关闭'
                }
            },
            name3: {
                type: 'switch',
                label: '加载开关',
                options: {
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
