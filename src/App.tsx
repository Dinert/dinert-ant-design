import React, { useState } from 'react'

import DinertForm from '../packages/components/form/src/index'
import {Button, Form } from 'antd'
import {RewriteFormProps} from '@packages/components/form/types/index'

function App() {

    interface Model{
        name: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    }
    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        // initialValues: {
        //     // name: 333
        // },
        packUp: true,
        layout:'inline',
        name: 'search',
        labelCol: {
            // span: 8
        },
        formItem: {
            name: {
                type: 'input',
                label: '输入框',
                options: {

                },
                vif() {
                    return true
                },
            },
            name2: {
                type: 'input-search',
                label: '搜索框',
                options: {
                },
            },
            name3: {
                type: 'input',
                label: '文本域',
                options: {
                }
            },
            name4: {
                type: 'input-number',
                label: '数据输入框'
            },
            name5: {
                type: 'select',
                label: '选择框',
                options: {

                    options: [
                        {value: 1, label: '222'},
                        {value: 2, label: '3333'},
                    ]
                }
            }
        }
    })
    // dinertForm.form?.setFieldsValue({
    //     name: '1231'
    // })
    const aaa = () => {

        dinertForm.form?.submit()
        setDinertForm({
            ...dinertForm,
            initialValues: {name: 1231, name2: 222},
        })

    }

    const name = Form.useWatch('name', dinertForm.form)
    const name2 = Form.useWatch('name5', dinertForm.form)
  return (
      <>

          <DinertForm {...dinertForm}>

          </DinertForm>
      </>
  )
}

export default App
