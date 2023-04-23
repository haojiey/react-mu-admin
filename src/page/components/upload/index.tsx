import { useState } from 'react'
import { Button } from 'antd'

import Upload from '/@/components/Upload'
export default function Index() {
    const [isOpen, setIsOpen] = useState(false)
    const showModal = () => {
        setIsOpen(!isOpen)
    }
    const toggleModal = (value: boolean, fileList: any) => {
        setIsOpen(value)
        console.warn('文件内容', fileList)
    }
    return (
        <div className="card">
            <Button onClick={showModal} type="primary">
                导入文件
            </Button>
            <Upload
                isUploadOpen={isOpen}
                setIsUploadOpen={toggleModal}
                title="上传文件"
                maxCount={2}
            />
        </div>
    )
}
