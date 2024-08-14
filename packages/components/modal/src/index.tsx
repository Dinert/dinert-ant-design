import React, { useRef, useImperativeHandle, forwardRef} from 'react'

import { Modal, ModalProps } from 'antd'


const ModalC = forwardRef<ModalProps, ModalProps>(props => {


    return (
        <Modal
            okText={'保存'}
            title={'标题'}
            width={'60%'}
            {...props}
        >

        </Modal>
    )
})
ModalC.displayName = 'DinertModal'
export default ModalC
