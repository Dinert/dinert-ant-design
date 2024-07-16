import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
// for date-picker i18n
import 'dayjs/locale/zh-cn'
import React, { forwardRef } from 'react'

const App = (props: any) => {
    return (
        <ConfigProvider locale={zhCN}>
            {props.children}
        </ConfigProvider>
    )
}

export default forwardRef<any, any>(App)
