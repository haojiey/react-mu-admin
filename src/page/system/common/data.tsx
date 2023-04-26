import { Tag } from 'antd'
export const queryAccountConfig = [
    {
        label: '用户名',
        name: 'name',
        components: 'Input'
    },
    {
        label: '手机号',
        name: 'phone',
        components: 'Input'
    },
    {
        label: '状态',
        name: 'status',
        components: 'Select',
        options: [
            {
                label: '启用',
                value: 'running'
            },
            {
                label: '停用',
                value: 'stop'
            }
        ]
    }
]

export const AccountColumns = [
    {
        title: '用户名称',
        dataIndex: 'name'
    },
    {
        title: '用户账号',
        dataIndex: 'user'
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: (text: string) => {
            let color = text == 'stop' ? 'red' : 'blue'
            return <Tag color={color}>{text == 'stop' ? '停用' : '启用'}</Tag>
        }
    },
    {
        title: '邮箱',
        dataIndex: 'email'
    },
    {
        title: '创建时间',
        dataIndex: 'time'
    }
]
