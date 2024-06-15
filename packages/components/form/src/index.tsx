import { Form, Button } from 'antd'
import React, {useState} from 'react'

import {RewriteFormProps} from '@packages/components/form/types/index'
import FormItem from './formItem'
import '@packages/assets/form.scss'
import {DownOutlined, UpOutlined} from '@ant-design/icons'

const FormC: React.FC<RewriteFormProps> = (form) => {
  const {formItem, showLabel, name, onSearch, onReset, ...reset} = form

  const [packUp, setPackUp] = useState(false)
  const [isArrow, setIsArrow] = useState(false)

  const searchFn = () => {
    onSearch && onSearch()
  }
  const resetFn = () => {
    onReset && onReset()
  }


  return (
      <Form {...reset} className={['dinert-form', name, packUp ? '' : 'packUp'] as any}>
          {
              <FormItem {...form}></FormItem>
          }
          {
             name === 'search' &&
              (<div className={'operations'}>
                  {isArrow && <Button type="link" icon={packUp ? <UpOutlined/> : <DownOutlined/>}>{packUp ? '收起' : '展开'}</Button>}
                  <Button type="primary" onClick={searchFn}>查询</Button>
                  <Button type="default" onClick={resetFn} style={{marginLeft: '12px'}}>重置</Button>
              </div>)
          }
      </Form>
  )
}

export default FormC
