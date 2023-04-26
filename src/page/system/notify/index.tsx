import React, { useEffect, useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import { NotifyColumns, queryNotifyConfig } from '../common/data'

import { getSystemNotifys } from '/@/api/system'
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
        formsColumn: queryNotifyConfig
    }

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        setLoading(true)
        const result = await getSystemNotifys()
        setData(result)
        setLoading(false)
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
            <Forms formConfig={formConfig} />
            <p className="mb-[12px]"></p>
            <Tables
                columns={NotifyColumns}
                dataSource={data}
                loading={loading}
                rowSelection={rowSelection}
                headerContent={{
                    content: () => [
                        <Button key="button3" type="primary" danger icon={<DeleteOutlined />}>
                            批量删除
                        </Button>
                    ]
                }}
            />
        </div>
    )
}
