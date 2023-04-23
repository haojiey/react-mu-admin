import { useState } from 'react'
import { Button } from 'antd'

import Modal from '/@/components/Modal'
export default function Index() {
    const [isOpen, setIsOpen] = useState(false)

    const showModal = () => {
        setIsOpen(!isOpen)
    }
    const toggleModal = (value: boolean, type: any) => {
        setIsOpen(value)
        console.warn(`点击了${type}按钮`)
    }
    return (
        <div className="card">
            <Button onClick={showModal} type="primary">
                自定义弹窗
            </Button>
            <Modal isModalOpen={isOpen} setIsOpen={toggleModal} title="自定义弹窗">
                弹窗内容
            </Modal>
        </div>
    )
}
