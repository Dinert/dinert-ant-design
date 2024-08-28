import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string;
        name2: string;
        name3: string;
        name4: string;
    }

    interface FormItemProps{
        name: 'input-number',
        name2: 'input-number',
        name3: 'input-number',
        name4: 'input-number',
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
