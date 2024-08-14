import { Button } from 'antd'
import {DinertModal} from '../../../../packages'

import React, { forwardRef, useState } from 'react'


const App = () => {
    const [open, setOpen] = useState(false)

    const showModal = () => {
        setOpen(true)
    }
    return (
        <div>
            <Button onClick={showModal}>打开弹窗</Button>
            <DinertModal open={open} onCancel={() => setOpen(false)}>
            </DinertModal>
        </div>

    )
}

export default forwardRef<any, any>(App)
