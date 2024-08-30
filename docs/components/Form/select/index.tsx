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
    }

    interface FormItemProps{
        name: 'select',
        name2: 'select',
        name3:'select',
        name4:'select',
        name5:'select',
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
                type: 'select',
                label: '选择框',
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
                type: 'select',
                label: '多选框',
                options: {
                    mode: 'multiple',
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
            name3: {
                type: 'select',
                label: '禁用',
                options: {
                    disabled: true,

                }
            },
            name4: {
                type: 'select',
                label: '显示选择3个',
                options: {
                    maxTagCount: 3,
                    mode: 'multiple',
                    options: [{
                        label: '选项一',
                        value: '1'
                    },
                    {
                        label: '选项二',
                        value: '2'
                    },
                    {
                        label: '选项三',
                        value: '3'
                    },
                    {
                        label: '选项四',
                        value: '4'
                    },
                    {
                        label: '选项五',
                        value: '5'
                    }]
                }
            },
            name5: {
                type: 'select',
                label: '形态',
                options: {
                    variant: 'filled',
                    options: [{
                        label: '选项一',
                        value: '1'
                    },
                    {
                        label: '选项二',
                        value: '2'
                    }]
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
