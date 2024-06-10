import { useState, useRef } from 'react'

import DinertForm from '../packages/components/form/src/index'
import {Button, Form } from 'antd'
import {RewriteFormProps} from '@packages/components/form/types/index'

function App() {

    interface Model{
        name: string;
        name2: string;
    }
    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        labelCol: {
            span: 2
        },
        formItem: {
            name: {
                type: 'input',
                label: '输入框',
                rules: [{required: true}],
                options: {
                },
                vif(model) {
                    console.log(model,'321321')
                    return true
                }
                // showLabel: true,
            },
            'name2': {
                type: 'input-search',
                label: '搜索框',
                options: {
                }
            }
        }
    })

    const aaa = () => {
        dinertForm.form?.setFieldsValue({
            name: '1231'
        })
        console.log(dinertForm.form?.getFieldsValue(), 'dinertForm.form?.getFieldsValue()')
        dinertForm.form?.submit()

    }

    const name = Form.useWatch('name', dinertForm.form)
    const name2 = Form.useWatch('name2', dinertForm.form)
  return (
      <>

          <DinertForm {...dinertForm}>

          </DinertForm>
          <Button onClick={aaa}>修改</Button>

          <p>{name}</p>
          <p>{name2}</p>
      </>
  )
}

export default App
