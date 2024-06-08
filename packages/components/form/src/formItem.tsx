import React from 'react'
import { Form} from 'antd'

import {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types/index'
import RewriteInput from './input'

const customPlaceholder = (type: string = 'input', label: string = '') => {
    const placeholder: {[key: string]: string} = {
        'input': '请输入',
        'input-search':'请输入'
    }

    return placeholder[type] + label || ''
}

const objToArr = (formItem: RewriteFormProps['formItem']) => {
    let index = 0
    const result: any = []
    Object.keys(formItem).forEach(key => {
        const value = formItem[key] as Partial<CustomFormItemProps>
        const placeholderObj = {
            placeholder: customPlaceholder(value.type, value.label as string),
        }

        value.options = value.options ? {...placeholderObj, ...value.options} : placeholderObj

        result.push({
            ...value,
            key: key,
            sort: typeof value.sort === 'undefined' ? index : value.sort,
        })
        index += 10
    })

    result.sort((a: any, b: any) => {
        return a.sort - b.sort
    })

    return result
}

const mapComponents = (item: CustomFormItemProps) => {
    const {key, ...rest} = item
    const obj: any = {
        'input': <RewriteInput {...rest} tempKey={key}></RewriteInput>,
        'input-search': <RewriteInput {...rest} tempKey={key}></RewriteInput>,
    }

    return obj[item.type]
}

const FormC: React.FC<RewriteFormProps['formItem']> = (formItem) => {
  const {children, ...reset} = formItem
  const formItemMap = objToArr(reset)
  const slot: any = children || {}
  return (
      <>
          {
            formItemMap.map((item: CustomFormItemProps) => {
                const slotformItem = slot['formitem_' + item.key]
                return (
                    <Form.Item {...item} key={item.key}>
                        {slotformItem ? typeof slotformItem === 'function' ? slotformItem(item) : slotformItem : mapComponents(item)}
                    </Form.Item>
                )
            })
        }

      </>
  )
}

export default FormC