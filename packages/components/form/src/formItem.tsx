import React from 'react'
import { Form, Input} from 'antd'

import { CustomFormItemProps} from '@packages/components/form/types/index'

const customPlaceholder = (type: string = 'input', label: string = '') => {
    const placeholder: {[key: string]: string} = {
        'input': '请输入',
        'input-search':'请输入'
    }

    return placeholder[type] + label || ''
}

const objToArr = (formItem: CustomFormItemProps) => {
    let index = 0
    const result: any = []
    Object.keys(formItem).forEach(key => {
        const value = (formItem as any)[key] as Partial<CustomFormItemProps>
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
    const {key, options} = item
    const obj: any = {
        'input': <Input {...options} key={key}></Input>,
        'input-search': <Input.Search {...options} key={key}></Input.Search>,
    }

    return obj[item.type]
}

const FormC: React.FC<CustomFormItemProps> = (formItem) => {
  const {...reset} = formItem
  const formItemMap = objToArr(reset)
  return (
      <>
          {
            formItemMap.map((item: CustomFormItemProps) => {
                const {slot, ...rest} = item
                const slotformItem = typeof slot === 'function' ? slot(item) : slot
                return (
                    <Form.Item {...rest} key={item.key}>
                        {slotformItem ? slotformItem : mapComponents(item)}
                    </Form.Item>
                )
            })
        }

      </>
  )
}

export default FormC