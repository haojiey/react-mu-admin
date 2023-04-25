import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import Tables from '/@/components/Tables'
export default function Index() {
    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }
    ]

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address'
        }
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[]) => {
            console.warn(`selectedRowKeys: ${selectedRowKeys}`)
        },
        getCheckboxProps: (record: any) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
        })
    }
    const [selectionType] = useState<'checkbox'>('checkbox')

    return (
        <div className="card">
            <Tables
                headerContent={{
                    isShowFilter: true,
                    settingDisable: ['name'],
                    content: () => [
                        <Button
                            key="button"
                            icon={<PlusOutlined />}
                            onClick={() => {}}
                            type="primary"
                        >
                            新建
                        </Button>
                    ]
                }}
                columns={columns}
                dataSource={dataSource}
                rowSelection={{
                    type: selectionType,
                    ...rowSelection
                }}
            />
        </div>
    )
}
