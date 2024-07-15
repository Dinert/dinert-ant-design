import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string;
        name2: string;
        name3: string;
        status: number;
        name4: number;
        name5: string;
    }

    interface FormItemProps{
        name: 'input';
        name2: 'input';
        name3: 'input';
        name4: 'select';
        name5: 'input';
        status: 'select';
        status2: 'input';
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm<Model>()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {
            name: '123',
            name3: '哈哈',
            status: 1
        },
        formItem: {
            name: {
                type: 'input',
                label: '名称',
                options: {
                }
            },
            name2: {
                type: 'input',
                label: '无值',
                options: {
                },
                showLabel: true
            },
            name3: {
                type: 'input',
                label: '显示值',
                slot(formItem) {
                    return <div>{formItem.initialValues && formItem.initialValues[formItem.key]}</div>
                },
                options: {
                },
                showLabel: true
            },
            name4: {
                type: 'select',
                label: 'label联动',
                options: {
                    options: [
                        {value: 1, label: 'label1'},
                        {value: 2, label: 'label2'},
                    ]
                }
            },
            name5: {
                type: 'input',
                label: ({initialValues}) => {return initialValues?.name4 === 1 ? '动态切换' : '动态切换状态'},
            },
            status: {
                type: 'select',
                label: '组件联动',
                options: {
                    options: [
                        {value: 1, label: '显示'},
                        {value: 2, label: '禁用'},
                    ]
                },
            },
            status2: {
                type: 'input',
                label: '显示',
                vif(model) {
                    return model.status === 1
                },
            }
        },
        onSearch() {
            console.log('查询')
        },
        onReset() {
            console.log('重置')
        }
    })


    return (
        <>
            <DinertForm {...dinertForm}>

            </DinertForm>
        </>
    )
}

export default forwardRef<any, any>(App)
