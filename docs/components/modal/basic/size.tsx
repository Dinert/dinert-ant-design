import { Button, Space } from 'antd'
import {DinertModal} from '../../../../packages'

import React, { forwardRef, useState } from 'react'


const App = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    const showModal = () => {
        setOpen(true)
    }

    const showModal2 = () => {
        setOpen2(true)
    }
    const showModal3 = () => {
        setOpen3(true)
    }
    return (
        <div>
            <Space>
                <Button onClick={showModal}>large</Button>
                <Button onClick={showModal2}>medium</Button>
                <Button onClick={showModal3}>small</Button>
            </Space>

            <DinertModal open={open} onCancel={() => setOpen(false)} size={'large'}>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
                <p>large</p>
            </DinertModal>
            <DinertModal open={open2} onCancel={() => setOpen2(false)} size={'medium'}>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
                <p>medium</p>
            </DinertModal>

            <DinertModal open={open3} onCancel={() => setOpen3(false)} size={'small'}>
                <p>small</p>
            </DinertModal>
        </div>

    )
}

export default forwardRef<any, any>(App)
