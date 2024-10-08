/* eslint-disable consistent-return */
import React from 'react'
import { Form, Input, InputNumber, Radio, Select, RadioProps, Row, Col, Space, AutoComplete, Checkbox, Switch, Slider, Rate, DatePicker, Cascader} from 'antd'

import { CustomFormItemProps, RewriteFormProps} from '@packages/components/form/types/index'
import { dataTransformRod } from '@packages/utils/tools'

const mapPlaceholder = (type: string = 'input', label: string = '') => {
    const enterMsg = '请输入'
    const selectMsg = '请选择'

    const placeholder: {[key: string]: string | string[]} = {
        'input': enterMsg,
        'input-search': enterMsg,
        'input-password': enterMsg,
        'textarea': enterMsg,
        'input-number': enterMsg,
        'select': selectMsg,
        radio: selectMsg,
        'radio-button': selectMsg,
        'autocomplete': enterMsg,
        datetime: selectMsg,
        datetimerange: [selectMsg + '开始时间', selectMsg + '结束时间'],
        date: selectMsg,
        daterange: [selectMsg + '开始时间', selectMsg + '结束时间'],
        dates: selectMsg,
        week: selectMsg,
        weekange: [selectMsg + '开始周', selectMsg + '结束周'],
        month: selectMsg,
        cascader: selectMsg,
        'cascader-panel': selectMsg
    }

    return typeof placeholder[type] === 'string' ? (placeholder[type] || '') + label || '' : placeholder[type]
}
const objToArr = <D, >(formItem: CustomFormItemProps, form: RewriteFormProps, values: D) => {
    const result: any = []
    Object.keys(formItem).forEach(key => {

        const value = (formItem as any)[key] as Partial<CustomFormItemProps>

        let rules = value.rules || []
        const placeholderObj = {placeholder: mapPlaceholder(value.type, typeof value.label === 'function' ? value.label({...value, initialValues: values}) : value.label)}
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
            name: key,
        })
    })

    result.sort((a: any, b: any) => {
        return (a.sort || Infinity) - (b.sort || Infinity)
    })

    return result
}

const mapComponents = (item: CustomFormItemProps) => {
    const {key, options} = item

    const obj: any = {
        'input': <Input allowClear {...options} key={key}></Input>,
        'autocomplete': <AutoComplete allowClear {...options}></AutoComplete>,
        'input-search': <Input.Search allowClear {...options} key={key}></Input.Search>,
        'input-password': <Input.Password allowClear autoComplete={'on'} {...options} key={key} ></Input.Password>,
        'textarea': <Input.TextArea style={{height: '120px'}} allowClear controls {...options} key={key} ></Input.TextArea>,
        'input-number': <InputNumber style={{width: '100%'}} {...options} key={key} ></InputNumber>,
        'select': () => {
            const {...resetSelect} = options
            const selectOptions = options.options || []

            return (<Select allowClear {...resetSelect} key={key}>
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
                    <Space direction={options.direction}>
                        {radioOptions.map((item2: any) => {
                            return <Radio {...item2} key={item2[options.value || 'value']}></Radio>
                        })}
                    </Space>
                </Radio.Group>
            )
        },
        'radio-button': () => {
            const radioOptions: RadioProps[] = options.options || []
            return (
                <Radio.Group {...options} optionType={'button'}>
                    <Space direction={options.direction}>
                        {radioOptions.map((item2: any) => {
                            return <Radio.Button {...item2} key={item2[options.value || 'value']}></Radio.Button>
                        })}
                    </Space>
                </Radio.Group>
            )
        },
        checkbox: () => {
            const plainOptions: RadioProps[] = options.options || []
            return (
                <Checkbox.Group options={plainOptions} {...options} />
            )
        },
        switch: <Switch {...options} />,
        slider: <Slider {...options} />,
        rate: <Rate {...options}></Rate>,
        datetime: <DatePicker showTime allowClear {...options} />,
        datetimerange: <DatePicker.RangePicker showTime allowClear {...options} />,
        date: <DatePicker allowClear {...options} />,
        daterange: <DatePicker.RangePicker allowClear {...options} />,
        dates: <DatePicker allowClear {...options} />,
        week: <DatePicker allowClear {...options} picker={'week'}/>,
        weekrange: <DatePicker.RangePicker allowClear {...options} picker={'week'}/>,
        month: <DatePicker allowClear {...options} picker={'month'}/>,
        monthrange: <DatePicker.RangePicker allowClear {...options} picker={'month'}/>,
        quarter: <DatePicker allowClear {...options} picker={'quarter'}/>,
        quarterrange: <DatePicker.RangePicker allowClear {...options} picker={'quarter'}/>,
        year: <DatePicker allowClear {...options} picker={'year'}/>,
        yearrange: <DatePicker.RangePicker allowClear {...options} picker={'year'}/>,
        cascader: <Cascader allowClear {...options} />,
        'cascader-panel': <Cascader.Panel allowClear {...options} />,
    }


    const Com = typeof obj[item.type] === 'function' ? obj[item.type]() : obj[item.type]
    return Com
}

const FormItemC: React.FC<RewriteFormProps> = props => {
    const {formItem, ...reset} = props
    const values = Form.useWatch(values => values, reset.form) || {}
    const formItemMap = objToArr(formItem, reset as RewriteFormProps, values)

    return (
        <Row {...{gutter: reset.name === 'search' ? 0 : 24, ...reset.row}} className="dinert-form-row">
            {
                formItemMap.map((item: CustomFormItemProps) => {

                    const {slot, showLabel, vif, ...rest} = item

                    let slotformItem = typeof slot === 'function' ? <div className="ant-form-item-control-input-content-text">{slot({...rest, initialValues: values})}</div> : slot

                    if (showLabel && !slotformItem) {
                        slotformItem = <div className="ant-form-item-control-input-content-text">{dataTransformRod(values && values[item.key])}</div>
                    }

                    slotformItem = slotformItem ? slotformItem : mapComponents(rest)

                    let vif2 = typeof vif === 'function' ? vif(values) : vif
                    vif2 = vif2 === undefined ? true : vif2

                    if (vif2) {
                        const itemLabel = typeof rest.label === 'function' ? rest.label({...rest, initialValues: values}) : rest.label

                        return (
                            <Col {...{span: reset.name !== 'search' ? 24 : undefined, ...reset.col, ...item.col}} key={item.key} className="dinert-form-row-col">
                                <Form.Item className={[item.type, item.key] as any} {...rest} label={itemLabel} key={item.key}>
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
