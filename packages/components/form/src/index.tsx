import { Form, Button } from 'antd'
import React from 'react'

import {RewriteFormProps} from '@packages/components/form/types/index'
import FormItem from './formItem'
import '@packages/assets/form.scss'

const FormC: React.FC<RewriteFormProps> = (form) => {
  const {formItem, showLabel, name, onSearch, onReset, ...reset} = form
  const searchFn = () => {
    onSearch && onSearch()
  }
  const resetFn = () => {
    onReset && onReset()
  }
  return (
      <Form {...reset} >
          {
              <FormItem {...form}></FormItem>
          }
          {
             name === 'search' && (<Form.Item>
                 <Button type="primary" onClick={searchFn}>查询</Button>
                 <Button type="default" onClick={resetFn} style={{marginLeft: '12px'}}>重置</Button>
             </Form.Item>)
          }
      </Form>
  )
}

export default FormC
