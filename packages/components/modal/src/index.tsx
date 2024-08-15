import React, { forwardRef } from 'react'

import { Modal, ModalProps } from 'antd'

import './index.scss'

export interface RewriteModalProps extends ModalProps {
    size?: 'large' | 'medium' | 'small'
}

const getWH = (options: RewriteModalProps) => {
    const result: any = {
        width: '65%',
    }
    if (options.size === 'large') {
        result.width = 840
        result.height = 606
    } else if (options.size === 'small') {
        result.width = 382
        result.height = 262
    } else if (options.size === 'medium') {
        result.width = 620
        result.height = 340
    }

    return result
}


const ModalC = forwardRef<RewriteModalProps, RewriteModalProps>((props, ref) => {

    return (
        <Modal
            okText={'保存'}
            title={'标题'}
            width={getWH(props).width}
            footer={null}
            styles={{body: {height: getWH(props).height, 'flex': getWH(props).height ? 'auto' : undefined, overflow: 'auto'}}}
            className={'dinertModal'}
            {...props}
        >
        </Modal>
    )
})
ModalC.displayName = 'DinertModal'
export default ModalC
