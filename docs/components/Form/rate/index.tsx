import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons'

const App = () => {

    interface Model{
        name: number;
        name2: number;
        name3: number;
        name4: number;
        name5: number;
    }

    interface FormItemProps{
        name: 'rate',
        name2: 'rate',
        name3: 'rate',
        name4: 'rate',
        name5: 'rate',
    }

    const customIcons: Record<number, React.ReactNode> = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {
            name2: 1.5,
            name3: 4
        },
        labelCol: {
            span: 4,
        },
        formItem: {
            name: {
                type: 'rate',
                label: '基础评分',
                options: {

                }
            },
            name2: {
                type: 'rate',
                label: '半选评分',
                options: {

                }
            },
            name3: {
                type: 'rate',
                label: '只读评分',
                options: {
                    disabled: true
                }
            },
            name4: {
                type: 'rate',
                label: '文案展示',
                options: {
                    tooltips: ['非常差', '差', '一般', '好', '非常好']
                }
            },
            name5: {
                type: 'rate',
                label: '自定义图标',
                options: {
                    character: ({index = 0}) => customIcons[index + 1],
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
