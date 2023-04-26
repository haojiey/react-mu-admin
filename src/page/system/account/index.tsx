import React, { useEffect, useState } from 'react'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import { AccountColumns, queryAccountConfig } from '../common/data'

import AddAccount from './components/AddAccount'

import { getSystemUsers } from '/@/api/system'
import Forms from '/@/components/Forms'
import Tables from '/@/components/Tables'
export default function Index() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const onSearch = (values: any) => {
        console.warn('Received values of form: ', values)
        getData()
    }

    const formConfig = {
        submit: onSearch,
        formsColumn: queryAccountConfig
    }

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        setLoading(true)
        const result = await getSystemUsers()
        setData(result)
        setLoading(false)
    }

    const [isOpen, setIsOpen] = useState(false)
    const showModal = () => {
        setIsOpen(!isOpen)
    }
    const toggleModal = (flag: boolean, values: any) => {
        setIsOpen(flag)
        console.warn('表单内容', values)
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
            <AddAccount isModalOpen={isOpen} setIsOpen={toggleModal} />
            <Forms formConfig={formConfig} />
            <p className="mb-[12px]"></p>
            <Tables
                columns={AccountColumns}
                dataSource={data}
                loading={loading}
                rowSelection={rowSelection}
                headerContent={{
                    content: () => [
                        <Button
                            key="button2"
                            onClick={showModal}
                            type="primary"
                            icon={<PlusOutlined />}
                        >
                            新增
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
