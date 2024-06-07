import React from 'react'
import { Form, FormItemProps, FormProps, Input } from 'antd'
interface RewriteFormProps extends FormProps{
    formItem?: Partial<FormItemProps>
}
const FormC: React.FC<RewriteFormProps['formItem']> = (formItem) => {

  return (
      <>
          <Form.Item {...formItem}>
              <Input></Input>
          </Form.Item>
      </>
  )
}

export default FormC