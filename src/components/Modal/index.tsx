import React from 'react'
import { Button, Modal } from 'antd'

import { ModalProps } from './types'

import './index.less'

const Index: React.FC<ModalProps> = ({
    isModalOpen,
    width = 520,
    title = '弹窗',
    okText = '确定',
    cancelText = '取消',
    footer = -1,
    setIsOpen,
    children
}) => {
    const handleOk = () => {
        setIsOpen(false, 'sure')
    }

    const handleCancel = () => {
        setIsOpen(false, 'cancel')
    }

    const footerNode = () => {
        if (footer == -1) {
            return [
                <Button key="submit" type="primary" onClick={handleOk}>
                    {okText}
                </Button>,
                <Button key="back" onClick={handleCancel}>
                    {cancelText}
                </Button>
            ]
        }
        return footer
    }

    return (
        <>
            <Modal
                title={title}
                width={width}
                onCancel={handleCancel}
                open={isModalOpen}
                footer={footerNode()}
            >
                {children}
            </Modal>
        </>
    )
}

export default Index
