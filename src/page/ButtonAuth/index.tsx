import { Button, Divider } from 'antd'

import AuthPermissions from '/@/components/AuthPermissions'

const textStyle = {
    marginBottom: '12px'
}

export default function Index() {
    return (
        <div className="card">
            <h2 style={textStyle}>新增按钮权限示例</h2>
            <AuthPermissions authority={'system:btn:add'}>
                <Button type="primary">新增 Button</Button>
            </AuthPermissions>
            <Divider />
            <h2 style={textStyle}>编辑按钮权限示例</h2>
            <AuthPermissions authority={'system:btn:edit'}>
                <Button>编辑 Button</Button>
            </AuthPermissions>
            <Divider />
            <h2 style={textStyle}>删除按钮权限示例</h2>
            <AuthPermissions authority={'system:btn:remove'}>
                <Button type="primary" danger>
                    删除 Button
                </Button>
            </AuthPermissions>
            <Divider />

            <p>使用方式：AuthPermissions 组件 authority 属性内容为权限标识</p>
        </div>
    )
}
