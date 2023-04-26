import { LockOutlined } from '@ant-design/icons'
import { Form, Input, Select } from 'antd'

import Modal from '/@/components/Modal'
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
}

const validateMessages = {
    required: '${label} is required!'
}

const Index = ({
    isModalOpen,
    setIsOpen
}: {
    isModalOpen: boolean
    setIsOpen: (flag: boolean, values: any) => void
}) => {
    const [form] = Form.useForm()

    const onFinish = async (flag: boolean, values: string) => {
        if (values == 'sure') {
            const result = await form.validateFields()
            setIsOpen(flag, result.user)
        } else {
            setIsOpen(flag, '')
        }
    }

    return (
        <Modal isModalOpen={isModalOpen} setIsOpen={onFinish} title={'新增账号'}>
            <Form {...layout} form={form} name="nest-messages" validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="用户名称" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'user']} label="用户账号" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'pass']} label="用户密码" rules={[{ required: true }]}>
                    <Input.Password autoComplete="new-password" prefix={<LockOutlined />} />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="邮箱" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'status']} label="状态" rules={[{ required: true }]}>
                    <Select
                        options={[
                            {
                                value: 'running',
                                label: '启用'
                            },
                            {
                                value: 'stop',
                                label: '停用'
                            }
                        ]}
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Index
