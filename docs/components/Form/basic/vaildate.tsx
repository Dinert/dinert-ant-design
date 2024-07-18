import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Button, Col, Form } from 'antd'

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
        required: true,
        formItem: {
            name: {
                type: 'input',
                label: '名称1',
                options: {
                },
                required: false
            },
            name2: {
                type: 'input',
                label: '名称2',
                options: {
                }
            },
            name3: {
                type: 'input',
                label: '名称3',
                options: {
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
                }
            }
        },
        onReset() {
            console.log('取消')
            dinertForm.form?.resetFields()
        },

        onSearch() {
            console.log('提交')

            dinertForm.form?.validateFields().then(() => {
                console.log('验证成功')
            }).catch(() => {
                console.log('验证失败')
            })
        },
    })

    return (
        <>
            <DinertForm {...dinertForm}>
            </DinertForm>
            <Col style={{textAlign: 'center', marginBottom: '24px'}}>
                <Button style={{marginRight: '20px'}} onClick={dinertForm.onReset}>取消</Button>
                <Button type="primary" onClick={dinertForm.onSearch}>提交</Button>
            </Col>
        </>
    )
}

export default forwardRef<any, any>(App)
