import { Form, Input } from 'antd'

import Modal from '/@/components/Modal'
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
}

const validateMessages = {
    required: '${label} is required!'
}

const Index = ({
    isModalOpen,
    setIsOpen,
    title
}: {
    isModalOpen: boolean
    setIsOpen: (flag: boolean, values: any) => void
    title: string
}) => {
    const [form] = Form.useForm()

    const onFinish = async (flag: boolean, values: string) => {
        if (values == 'sure') {
            const result = await form.validateFields()
            setIsOpen(flag, result)
        } else {
            setIsOpen(flag, '')
        }
    }

    return (
        <Modal isModalOpen={isModalOpen} setIsOpen={onFinish} title={title}>
            <Form {...layout} form={form} name="nest-messages" validateMessages={validateMessages}>
                <Form.Item name={'title'} label="权限名称" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'key'} label="权限标识" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Index
