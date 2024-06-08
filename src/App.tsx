import { useState } from 'react'

import Form from '../packages/components/form/src/index'
import {Button} from 'antd'
import {RewriteFormProps} from '@packages/components/form/types/index'

function App() {
    type FormProps = React.ComponentProps<typeof Form>
    interface Model{
        name: string
        name2: string
    }

    const [form, setForm] = useState<RewriteFormProps<Model>>({
        formItem: {
            name: {
                type: 'input',
                label: '输入框',
                rules: [{required: true}],
                options: {
                }
            },
            name2: {
                type: 'input-search',
                label: '输入框',
                options: {
                }
            },
        }
    })

    const aaa = () => setForm(form2 => {
        form2.formItem.name!.label = '哈哈哈中'
        return {...form2}
    })
  return (
      <>
          <Form {...form} >
              {{
                formitem_name: function (item) {return item.label},
            } as any}
          </Form>
          <Button onClick={aaa}>修改</Button>
      </>
  )
}

export default App
