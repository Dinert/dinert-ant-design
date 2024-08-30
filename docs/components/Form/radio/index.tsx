import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: number;
        name2: number;
        name3: number;
        name4: number;
    }

    interface FormItemProps{
        name: 'radio',
        name2: 'radio-button',
        name3: 'radio',
        name4: 'radio-button',
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {
            name2: 1,
        },
        labelCol: {
            span: 4,
        },
        formItem: {
            name: {
                type: 'radio',
                label: '单选按钮',
                options: {
                    options: [
                        {
                            label: '启用',
                            value: 1
                        },
                        {
                            label: '禁用',
                            value: 0
                        }
                    ]
                }
            },
            name2: {
                type: 'radio-button',
                label: '类型按钮',
                options: {
                    options: [
                        {
                            label: '启用',
                            value: 1
                        },
                        {
                            label: '禁用',
                            value: 0
                        }
                    ]
                }
            },
            // name3: {
            //     type: 'radio',
            //     label: '垂直按钮',
            //     options: {
            //         direction: 'vertical',
            //         options: [
            //             {
            //                 label: '启用',
            //                 value: 1
            //             },
            //             {
            //                 label: '禁用',
            //                 value: 0
            //             }
            //         ]
            //     }
            // },
            name4: {
                type: 'radio-button',
                label: '禁用',
                options: {
                    buttonStyle: 'solid',
                    options: [
                        {
                            label: 'Hangzhou',
                            value: 'a',
                            disabled: true
                        },
                        {
                            label: 'Shanghai',
                            value: 'b'
                        },
                        {
                            label: 'Beijing',
                            value: 'c'
                        },
                        {
                            label: 'Chengdu',
                            value: 'd'
                        }
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
