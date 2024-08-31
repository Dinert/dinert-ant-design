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
        name: 'slider',
        name2: 'slider',
        name3:'slider',
        name4:'slider',
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
                type: 'slider',
                label: '基础滑动',
                options: {

                }
            },
            name2: {
                type: 'slider',
                label: '默认值滑动',
                options: {
                    defaultValue: 30
                }
            },
            name3: {
                type: 'slider',
                label: '限定滑动',
                options: {
                    min: 0,
                    max: 20
                }
            },
            name4: {
                type: 'slider',
                label: '范围滑动',
                options: {
                    range: {
                        draggableTrack: true,
                    },
                    defaultValue: [2, 3] as any,
                    min: 0,
                    max: 20,
                    tooltip: {
                        open: true
                    }
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
