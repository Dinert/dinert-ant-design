/* eslint-disable consistent-return */
import React, { useState } from 'react'
import { Form, Input, InputNumber, Radio, Select, RadioProps, Row, Col} from 'antd'

import { CustomFormItemProps, RewriteFormProps} from '@packages/components/form/types/index'
import { dataTransformRod } from '@packages/utils/tools'

const mapPlaceholder = (type: string = 'input', label: string = '') => {
    const enterMsg = '请输入'
    const selectMsg = '请选择'

    const placeholder: {[key: string]: string} = {
        'input': enterMsg,
        'input-search': enterMsg,
        'textarea': enterMsg,
        'input-number': enterMsg,
        'select': selectMsg
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
        const valueOptions = value.options ? {...placeholderObj, ...value.options} : placeholderObj
        let valueRequired = value.required === undefined ? value.required || form.required : value.required
        valueRequired = valueRequired === undefined ? valueRequired || form.required : valueRequired
        const valueShowLabel = value.showLabel === undefined ? value.showLabel || form.showLabel : value.showLabel

        rules = valueRequired ? [{required: true}].concat(rules as any) : rules
        rules = (valueShowLabel || form.showLabel) ? [] : rules


        result.push({
            ...value,
            options: valueOptions,
            required: valueRequired,
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
        'input': <Input {...options} allowClear key={key}></Input>,
        'input-search': <Input.Search {...options} allowClear key={key}></Input.Search>,
        'textarea': <Input.TextArea style={{height: '120px'}} {...options} allowClear key={key} ></Input.TextArea>,
        'input-number': <InputNumber style={{width: '100%'}} {...options} key={key} ></InputNumber>,
        'select': () => {
            const {options: selectOptions, ...resetSelect} = options
            return (<Select {...resetSelect} allowClear key={key}>
                {
                    selectOptions.map((item2: any) => {
                        return (
                            <Select.Option {...item2} key={item2[options.value || 'value']}></Select.Option>
                        )
                    })
                }
            </Select>)
        },
        'radio': () => {
            const radioOptions: RadioProps[] = options.options || []
            return (
                <Radio.Group {...options}>
                    {radioOptions.map((item2: any) => {
                        return <Radio {...item2} key={item2[options.value || 'value']}></Radio>
                    })}
                </Radio.Group>
            )
        },
        'radio-button': () => {
            const radioOptions: RadioProps[] = options.options || []
            return (
                <Radio.Group {...options} optionType={'button'}>
                    {radioOptions.map((item2: any) => {
                        return <Radio.Button {...item2} key={item2[options.value || 'value']}></Radio.Button>
                    })}
                </Radio.Group>
            )
        }
    }

    const Com = typeof obj[item.type] === 'function' ? obj[item.type]() : obj[item.type]
    return Com
}

const FormItemC: React.FC<RewriteFormProps> = props => {
    const {formItem, ...reset} = props
    const formItemMap = objToArr(formItem, reset as RewriteFormProps)

    const values = Form.useWatch(values => {
        return {...reset.initialValues, ...reset.form?.getFieldsValue(), ...values}
    }, reset.form) || {}

    return (
        <Row {...{gutter: reset.name === 'search' ? 0 : 24, ...reset.row}} className="dinert-form-row">
            {
                formItemMap.map((item: CustomFormItemProps) => {


                    const {slot, showLabel, vif, ...rest} = item
                    let slotformItem = typeof slot === 'function' ? slot({...rest, initialValues: values}) : slot
                    if (!slotformItem && !showLabel) {
                        rest.name = rest.key
                    }

                    if (showLabel) {
                        slotformItem = dataTransformRod(values && values[item.key])
                    }

                    slotformItem = slotformItem ? slotformItem : mapComponents(rest)

                    let vif2 = typeof vif === 'function' ? vif(values) : vif
                    vif2 = vif2 === undefined ? true : vif2

                    if (vif2) {
                        return (
                            <Col {...{span: reset.name !== 'search' ? 24 : undefined, ...reset.col, ...item.col}} key={item.key} className="dinert-form-row-col">
                                <Form.Item className={[item.type, item.key] as any} {...rest} key={item.key}>
                                    {slotformItem}
                                </Form.Item>
                            </Col>
                        )
                    }
                    return null
                })
            }
        </Row>

    )
}

export default FormItemC
