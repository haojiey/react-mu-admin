import React, { useState } from 'react'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import Forms from '/@/components/Forms'
import Tables from '/@/components/Tables'
import Upload from '/@/components/Upload'
interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
}
import type { ColumnsType } from 'antd/es/table'

import { querylConfig } from '/@/page/forms/common/data'
export default function Index() {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address'
        }
    ]

    const onSearch = (values: any) => {
        console.warn('Received values of form: ', values)
    }

    const formConfig = {
        submit: onSearch,
        isShowAdvanced: true,
        formsColumn: querylConfig
    }

    const data: DataType[] = []
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`
        })
    }
    const [isOpen, setIsOpen] = useState(false)
    const showModal = () => {
        setIsOpen(!isOpen)
    }
    const toggleModal = (value: boolean, fileList: any) => {
        setIsOpen(value)
        console.warn('文件内容', fileList)
    }
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.warn('selectedRowKeys changed: ', newSelectedRowKeys)
        setSelectedRowKeys(newSelectedRowKeys)
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    }

    return (
        <div className="card">
            <Upload
                isUploadOpen={isOpen}
                setIsUploadOpen={toggleModal}
                title="上传文件"
                maxCount={2}
            />
            <Forms formConfig={formConfig} />
            <p className="mb-[12px]"></p>
            <Tables
                columns={columns}
                dataSource={data}
                rowSelection={rowSelection}
                headerContent={{
                    isShowFilter: true,
                    settingDisable: ['name'],
                    content: () => [
                        <Button
                            key="button2"
                            onClick={showModal}
                            type="primary"
                            icon={<PlusOutlined />}
                        >
                            导入文件
                        </Button>,
                        <Button key="button3" type="primary" danger icon={<DeleteOutlined />}>
                            批量删除
                        </Button>
                    ]
                }}
            />
        </div>
    )
}
