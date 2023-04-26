import { Button, Popconfirm, Tag } from 'antd'
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
    },
    {
        title: '操作',
        key: 'operation',
        align: 'center',
        width: 150,
        render: () => <Button type="link">编辑</Button>
    }
]

export const queryNotifyConfig = [
    {
        label: '消息名称',
        name: 'name',
        components: 'Input'
    },
    {
        label: '发布日期',
        name: 'time',
        placeholder: ['开始日期', '结束日期'],
        components: 'RangePicker',
        labelCol: {
            span: 0,
            offset: 0
        }
    },
    {
        label: '状态',
        name: 'status',
        components: 'Select',
        options: [
            {
                label: '已读',
                value: 'read'
            },
            {
                label: '未读',
                value: 'unread'
            }
        ]
    }
]

export const NotifyColumns = [
    {
        title: '消息名称',
        dataIndex: 'name'
    },
    {
        title: '消息描述',
        dataIndex: 'desc',
        width: 600,
        ellipsis: true
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: (text: string) => {
            let color = text == 'unread' ? 'red' : 'blue'
            return <Tag color={color}>{text == 'unread' ? '未读' : '已读'}</Tag>
        }
    },
    {
        title: '操作人',
        dataIndex: 'user'
    },
    {
        title: '发布时间',
        dataIndex: 'time'
    }
]

export const MenuColumns = (fn: Function) => [
    {
        title: '菜单名称',
        dataIndex: 'meta',
        render: (record: any) => <span>{record?.title || ''}</span>
    },
    {
        title: '图标',
        dataIndex: 'icon',
        render: (text: string) => <i className={`iconfont ${text} !text-[18px] font-black`} />
    },
    {
        title: '路由',
        dataIndex: 'path'
    },
    {
        title: '操作',
        key: 'operation',
        align: 'center',
        width: 150,
        render: () => (
            <div>
                <Button type="link" size="small" onClick={() => fn(true, '新增菜单')}>
                    新增
                </Button>
                <Button type="link" size="small" onClick={() => fn(true, '编辑菜单')}>
                    编辑
                </Button>
                <Popconfirm
                    placement="topRight"
                    title={'Are you sure to delete this task?'}
                    onConfirm={() => {}}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="link" size="small" danger>
                        删除
                    </Button>
                </Popconfirm>
            </div>
        )
    }
]
export const MenuBtnColumns = (fn: Function) => [
    {
        title: '权限名称',
        dataIndex: 'name'
    },
    {
        title: '权限标识',
        dataIndex: 'key'
    },
    {
        title: '操作',
        key: 'operation',
        align: 'center',
        width: 150,
        render: () => (
            <div>
                <Button type="link" size="small" onClick={() => fn(true, '编辑权限配置')}>
                    编辑
                </Button>
                <Popconfirm
                    placement="topRight"
                    title={'Are you sure to delete this task?'}
                    onConfirm={() => {}}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="link" size="small" danger>
                        删除
                    </Button>
                </Popconfirm>
            </div>
        )
    }
]
