import {DinertForm, RewriteFormProps} from '../../../../packages'

import React, { forwardRef, useEffect, useState } from 'react'

import {Form } from 'antd'

const App = () => {

    interface Model{
        name: string
        name2: string[]
        name3: string
        name4: string[]
        name5: string
        name6: string
        name7: string[]
        name8: string
        name9: string
        name10: string
        name11: string
        name12: string
    }

    interface FormItemProps{
        name: 'datetime'
        name2: 'datetimerange'
        name3: 'date'
        name4: 'daterange'
        name5: 'dates'
        name6: 'week'
        name7: 'weekrange'
        name8:'month'
        name9:'monthrange'
        name10:'quarter'
        name11:'quarterrange'
        name12:'year'
        name13:'yearrange'
    }

    const [dinertForm, setDinertForm] = useState<RewriteFormProps<Model, FormItemProps>>({
        form: Form.useForm()[0],
        scrollToFirstError: true,
        packUp: false,
        initialValues: {

        },
        labelCol: {
            span: 4,
        },
        formItem: {
            name: {
                type: 'datetime',
                label: '小时',
                options: {

                }
            },
            name2: {
                type: 'datetimerange',
                label: '小时双选',
                options: {
                }
            },
            name3: {
                type: 'date',
                label: '天',
                options: {
                }
            },
            name4: {
                type: 'daterange',
                label: '天双选',
                options: {
                }
            },
            // name5: {
            //     type: 'dates',
            //     label: '天',
            //     options: {
            //     }
            // },
            name6: {
                type: 'week',
                label: '周',
                options: {
                }
            },
            name7: {
                type: 'weekrange',
                label: '周双选',
                options: {
                }
            },
            name8: {
                type: 'month',
                label: '月',
                options: {
                }
            },
            name9: {
                type: 'monthrange',
                label: '月双选',
                options: {
                }
            },
            name10: {
                type: 'quarter',
                label: '季度',
                options: {
                }
            },
            name11: {
                type: 'quarterrange',
                label: '季度双选',
                options: {
                }
            },
            name12: {
                type: 'year',
                label: '年',
                options: {
                }
            },
            name13: {
                type: 'yearrange',
                label: '年双选',
                options: {
                }
            }

        },
    })
    const values = Form.useWatch(values => values || {}, dinertForm.form)

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <>
            {/* <p>{values && values.name}</p> */}
            <DinertForm {...dinertForm}>
            </DinertForm>
        </>
    )
}

export default forwardRef<any, any>(App)
