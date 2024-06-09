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
        formItem: {
            name: {
                type: 'input',
                label: '输入框',
                name: 'name',
                rules: [{required: true}],
                options: {
                },
            },
            name2: {
                type: 'input-search',
                label: '搜索框',
                name: 'input-search',
                options: {
                }
            },
        }
    })

    const aaa = () => {
        dinertForm.form?.submit()
    }

    const name = Form.useWatch('name', dinertForm.form)
  return (
      <>
          <DinertForm {...dinertForm}>

          </DinertForm>
          <Button onClick={aaa}>修改</Button>
          <p>{name}</p>
      </>
  )
}

export default App
