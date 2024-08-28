import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
        name6: string;
    }

    interface FormItemProps{
        name: 'input',
        name2: 'input',
        name3: 'input',
        name4: 'input',
        name5: 'input',
        name6: 'input',
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
                type: 'input',
                label: '输入框',
                options: {
                }
            },
            name2: {
                type: 'input',
                label: '限制字数',
                options: {
                    showCount: true,
                    maxLength: 10,
                }
            },
            name3: {
                type: 'input',
                label: '状态',
                options: {
                    status: 'error',
                }
            },
            name4: {
                type: 'input',
                label: '前后图标',
                options: {
                    prefix: '￥',
                    suffix: '元',
                }
            },
            name5: {
                type: 'input',
                label: '前后标签',
                options: {
                    addonBefore: 'http://',
                    addonAfter: '.com',
                }
            },
            name6: {
                type: 'input',
                label: '只读',
                options: {
                    disabled: true,
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
