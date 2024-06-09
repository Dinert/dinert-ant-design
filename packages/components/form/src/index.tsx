import { Form } from 'antd'

import {RewriteFormProps} from '@packages/components/form/types/index'
import FormItem from './formItem'


const FormC: React.FC<RewriteFormProps> = (form) => {
    const {formItem, ...reset} = form


  return (
      <Form {...reset} >
          <FormItem {...formItem}></FormItem>
      </Form>
  )
}

export default FormC