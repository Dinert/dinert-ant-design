import { Button, Space } from 'antd'
import {DinertModal} from '../../../../packages'

import React, { forwardRef, useState } from 'react'


const App = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const showModal = () => {
        setOpen(true)
    }

    const showModal2 = () => {
        setOpen2(true)
    }
    return (
        <div>
            <Space>
                <Button onClick={showModal}>默认弹窗</Button>
                <Button onClick={showModal2}>带有确认按钮的弹窗</Button>
            </Space>

            <DinertModal open={open} onCancel={() => setOpen(false)} >
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
            </DinertModal>
            <DinertModal open={open2} onCancel={() => setOpen2(false)} footer={undefined}>
                <p>带有确认按钮的弹窗</p>
            </DinertModal>
        </div>

    )
}

export default forwardRef<any, any>(App)
