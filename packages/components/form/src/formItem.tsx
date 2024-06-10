import React from 'react'
import { Form, Input, InputNumber} from 'antd'

import { CustomFormItemProps, RewriteFormProps} from '@packages/components/form/types/index'
import { dataTransformRod } from '@packages/utils/tools'

const mapPlaceholder = (type: string = 'input', label: string = '') => {
    const enterMesg = '请输入'

    const placeholder: {[key: string]: string} = {
        'input': enterMesg,
        'input-search':enterMesg,
        'textarea': enterMesg,
        'input-number': enterMesg
    }

    return placeholder[type] + label || ''
}
const objToArr = (formItem: CustomFormItemProps, form: RewriteFormProps) => {
    let index = 0
    const result: any = []
    Object.keys(formItem).forEach(key => {

        const value = (formItem as any)[key] as Partial<CustomFormItemProps>

        let rules = value.rules || []

        const placeholderObj = {placeholder: mapPlaceholder(value.type, value.label as string)}
        value.options = value.options ? {...placeholderObj, ...value.options} : placeholderObj

        value.required = value.required === undefined ? value.required || form.required : value.required
        value.showLabel = value.showLabel === undefined ? value.showLabel || form.showLabel : value.showLabel

        rules = value.required ? [{required: true}].concat(rules as any) : rules
        rules = (value.showLabel || form.showLabel) ? [] : rules


        result.push({
            ...value,
            rules,
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
        'textarea': <Input.TextArea style={{height: '120px', ...options.style}} {...options} key={key} ></Input.TextArea>,
        'input-number': <InputNumber style={{width: '100%', ...options.style}} {...options} key={key} ></InputNumber>
    }

    return obj[item.type]
}

const FormC: React.FC<RewriteFormProps> = (props) => {
    const {formItem, ...reset} = props

    const formItemMap = objToArr(formItem, reset as RewriteFormProps)
    const values = reset.form?.getFieldsValue()
  return (
      <>
          {
            formItemMap.map((item: CustomFormItemProps) => {
                const {slot, showLabel, vif, ...rest} = item
                let slotformItem = typeof slot === 'function' ? slot(rest) : slot
                    if(!slotformItem && !showLabel) {
                        rest.name = rest.key
                    }

                    if(showLabel) {
                        slotformItem = dataTransformRod(reset.initialValues && reset.initialValues[item.key])
                    }

                    slotformItem = slotformItem ? slotformItem : mapComponents(rest)

                    let vif2 = typeof vif === 'function' ? vif(values) : vif
                        vif2 = vif2 === undefined ? true : vif2

                    if(vif2) {
                        return (
                            <Form.Item {...rest} key={item.key}>
                                {slotformItem}
                            </Form.Item>
                        )
                    }

            })
        }

      </>
  )
}

export default FormC