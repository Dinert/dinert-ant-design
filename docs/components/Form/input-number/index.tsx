import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: number;
        name2: number;
        name3: number;
        name4: number;
        name5: number;
    }

    interface FormItemProps{
        name: 'input-number',
        name2: 'input-number',
        name3: 'input-number',
        name4: 'input-number',
        name5: 'input-number',
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {
            name5: 123.45
        },
        labelCol: {
            span: 3,
        },
        formItem: {
            name: {
                type: 'input-number',
                label: '数字输入框',
                options: {
                }
            },
            name2: {
                type: 'input-number',
                label: '前后图标',
                options: {
                    prefix: '￥',
                    suffix: 'RMB',
                }
            },
            name3: {
                type: 'input-number',
                label: '前后标签',
                options: {
                    addonBefore: 'http://',
                    addonAfter: '.com',
                }
            },
            name4: {
                type: 'input-number',
                label: '状态',
                options: {
                    status: 'error'
                }
            },
            name5: {
                type: 'input-number',
                label: '小数数字',
                options: {
                    precision: 2,
                    step: 0.02
                }
            }
        },
    })

    return (
        <>
            <DinertForm {...dinertForm}>
            </DinertForm>
        </>
    )
}

export default forwardRef<any, any>(App)
