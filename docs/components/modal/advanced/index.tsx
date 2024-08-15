import { Button, Space } from 'antd'
import {DinertModal, UseModal} from '../../../../packages'

import React, { forwardRef } from 'react'


const App = () => {

    const useModal = new UseModal({
        size: 'large'
    })
    const {stateOpen, updateOpen} = useModal

    return (
        <div>
            <Space>
                <Button onClick={() => updateOpen(true)}>hook弹窗</Button>
            </Space>

            <DinertModal open={stateOpen} onCancel={() => updateOpen(false)} size={useModal.options.size}>
                <p>默认弹窗</p>
                <p>默认弹窗</p>
                <p>默认弹窗</p>

            </DinertModal>
        </div>

    )
}

export default forwardRef<any, any>(App)
