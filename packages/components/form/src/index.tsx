import { Form, Button } from 'antd'
import React, { useState} from 'react'

import {RewriteFormProps} from '@packages/components/form/types/index'
import FormItem from './formItem'
import '@packages/assets/form.scss'
import {DownOutlined, UpOutlined} from '@ant-design/icons'
import useWindowResize from '@packages/hooks/useWindowResize'
import {getUuid} from '@packages/utils/tools'

const FormC: React.FC<RewriteFormProps> = form => {
    const {formItem, form: formInstance, showLabel, name, onSearch, onReset, packUp: packUp2, onUnFold, ...reset} = form
    const [formClass] = useState('form_' + getUuid())

    const [packUp, setPackUp] = useState(packUp2)
    const [isArrow, setIsArrow] = useState(false)

    const resizeForm = () => {
        let elFormLeft = document.querySelectorAll(`.${formClass} .ant-form-item > div`) as any
        if (elFormLeft[0]) {
            const firstTop = elFormLeft[0].getBoundingClientRect().top
            const lastTop = elFormLeft[elFormLeft.length - 1].getBoundingClientRect().top
            const isHeight = firstTop !== lastTop
            if (isHeight) {
                setIsArrow(true)
            } else {
                if (!packUp) {
                    setPackUp(true)
                }
                setIsArrow(false)
            }
        }
        elFormLeft = null
    }


    const searchFn = () => {
        onSearch && onSearch()
    }
    const resetFn = () => {
        onReset && onReset()
    }

    const unfold = () => {
        setPackUp(!packUp)
        onUnFold && onUnFold()
    }
    let timer: any = null
    useWindowResize(() => {
        setIsArrow(false)
        timer = setTimeout(() => {
            resizeForm()
            clearTimeout(timer)
            timer = null
        })
    }, 50, true)

    return (
        <div className="dinert-form">
            <Form {...reset} form={formInstance} className={[name, packUp ? '' : 'packUp', formClass] as any}>
                {
                    <FormItem {...form}></FormItem>
                }
            </Form>
            {
                name === 'search'
              && (<div className={['dinert-form-operations', isArrow ? 'isArrow' : ''].join(' ')}>
                  {isArrow && <Button className="dinert-form-operations-isArrow" onClick={unfold} type="link" icon={packUp ? <UpOutlined/> : <DownOutlined/>}>{packUp ? '收起' : '展开'}</Button>}
                  <Button type="primary" onClick={searchFn}>查询</Button>
                  <Button type="default" onClick={resetFn} style={{marginLeft: '12px'}}>重置</Button>
              </div>)
            }
        </div>

    )
}

export default FormC
