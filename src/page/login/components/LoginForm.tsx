import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
const LoginForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Form
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
            className="login-forms"
        >
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password
                    autoComplete="new-password"
                    placeholder="密码：123456"
                    prefix={<LockOutlined />}
                />
            </Form.Item>

            <Form.Item
                className="login-remeber"
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 0, span: 16 }}
            >
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    icon={<UserOutlined />}
                    className="login-btn"
                >
                    登陆
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
