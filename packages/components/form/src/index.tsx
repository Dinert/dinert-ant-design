import { Form } from 'antd'
import React from 'react'

import {RewriteFormProps} from '@packages/components/form/types/index'
import FormItem from './formItem'

const FormC: React.FC<RewriteFormProps> = (form) => {
    const {formItem, showLabel, ...reset} = form
  return (
      <Form {...reset} >
          {
              <FormItem {...form}></FormItem>
          }
      </Form>
  )
}

export default FormC
