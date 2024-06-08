import React from 'react'
import { Form } from 'antd'

import {RewriteFormProps} from '@packages/components/form/types/index'
import FormItem from './formItem'


const FormC: React.FC<RewriteFormProps> = (form) => {
    const {formItem,children, ...reset} = form
    const slot: any = children || {}
  return (
      <Form {...reset}>
          <FormItem {...formItem}>{slot}</FormItem>
      </Form>
  )
}

export default FormC