import { useEffect, useState } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Upload } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'

import { UpProps } from './types'

import './index.less'

import { useMessage } from '/@/hooks/message'

const { Dragger } = Upload

import Modal from '/@/components/Modal'

const { uesWarningMsg } = useMessage()

const Index: React.FC<UpProps> = ({
    isUploadOpen,
    setIsUploadOpen,
    title = '上传文件',
    maxCount = 2
}: UpProps) => {
    const [fileList, setFileList] = useState<UploadFile[]>([])

    useEffect(() => {
        fileList.length = 0
        setFileList(fileList)
    }, [isUploadOpen])

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        customRequest,
        onRemove,
        onChange
    }

    function onRemove(file: UploadFile) {
        const files = fileList.filter((v) => v.name !== file.name)
        setFileList(files)
    }

    function onChange(info: any) {
        if (info.file.status != 'removed' && isAccord(info.file.name)) {
            info.file.percent = 100
            info.file.status = 'done'
        }
    }

    function customRequest(info: any) {
        if (fileList.length == maxCount) {
            return false
        }
        if (isAccord(info.file.name)) {
            if (info.file.size / 1024 / 1024 > 5) {
                uesWarningMsg('文件大小限制为5M')
                return false
            }

            let newFileList = [...fileList, info.file]
            setFileList(newFileList)
        } else {
            uesWarningMsg('可选择doc、docx，txt文件')
            return false
        }
    }

    function isAccord(name: String) {
        const index = name.lastIndexOf('.')
        const ext = name.substr(index + 1)
        const arr = ['doc', 'docx', 'txt']
        return arr.includes(ext)
    }

    function done(value: boolean, type: string) {
        setIsUploadOpen(value, type == 'sure' ? fileList : type)
    }

    return (
        <Modal isModalOpen={isUploadOpen} setIsOpen={done} title={title}>
            <Dragger {...props} fileList={fileList}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">移动文件至此处或点击上传</p>
                <p className="ant-upload-intro">文件大小限制为5M</p>
                <p className="ant-upload-intro">文件类型为doc、docx、txt文件</p>
                <p className="ant-upload-intro">限制上传数量最大为{maxCount}条</p>
            </Dragger>
        </Modal>
    )
}

export default Index
