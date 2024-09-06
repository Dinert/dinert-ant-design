import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form, Cascader } from 'antd'

const { SHOW_CHILD } = Cascader

const App = () => {

    interface Model{
        name: string[]
        name2: string[]
        name3: string[]
    }

    interface FormItemProps{
        name: 'cascader'
        name2: 'cascader'
        name3: 'cascader-panel'
    }

    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ]

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {
        },
        labelCol: {
            span: 4,
        },
        formItem: {
            name: {
                type: 'cascader',
                label: '基础级联',
                options: {
                    options: options
                }
            },
            name2: {
                type: 'cascader',
                label: '自定义显示label',
                options: {
                    options: options,
                    displayRender(labels) {
                        return labels[labels.length - 1]
                    }
                }
            },
            name3: {
                type: 'cascader-panel',
                label: '自定义面板',
                options: {
                    options: options
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
