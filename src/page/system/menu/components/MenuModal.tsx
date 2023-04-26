import { Form, Input, Select, Switch } from 'antd'

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
            const params = {
                ...result,
                auth: !!result.auth
            }
            setIsOpen(flag, params)
        } else {
            setIsOpen(flag, '')
        }
    }
    const changeValue = (e: any) => {
        form.setFieldsValue({ icon: e.target.dataset.icon || '' })
    }

    const Icon = () => (
        <div className="muen-modal-icon" onClick={changeValue}>
            <i data-icon="icon-cart" className={'iconfont icon-cart !text-[18px] font-black'} />
            <i
                data-icon="icon-category"
                className={'iconfont icon-category !text-[18px] font-black'}
            />
            <i data-icon="icon-form" className={'iconfont icon-form !text-[18px] font-black'} />
            <i data-icon="icon-pic" className={'iconfont icon-pic !text-[18px] font-black'} />
            <i data-icon="icon-qrcode" className={'iconfont icon-qrcode !text-[18px] font-black'} />
            <i
                data-icon="icon-viewgallery"
                className={'iconfont icon-viewgallery !text-[18px] font-black'}
            />
            <i
                data-icon="icon-account"
                className={'iconfont icon-account !text-[18px] font-black'}
            />
            <i data-icon="icon-clock" className={'iconfont icon-clock !text-[18px] font-black'} />
            <i
                data-icon="icon-calendar"
                className={'iconfont icon-calendar !text-[18px] font-black'}
            />
            <i data-icon="icon-text" className={'iconfont icon-text !text-[18px] font-black'} />
            <i
                data-icon="icon-icondownload"
                className={'iconfont icon-icondownload !text-[18px] font-black'}
            />
            <i
                data-icon="icon-rejectedorder"
                className={'iconfont icon-rejectedorder !text-[18px] font-black'}
            />
            <i data-icon="icon-all" className={'iconfont icon-all !text-[18px] font-black'} />
            <i
                data-icon="icon-comments"
                className={'iconfont icon-comments !text-[18px] font-black'}
            />
            <i data-icon="icon-cry" className={'iconfont icon-cry !text-[18px] font-black'} />
            <i data-icon="icon-set" className={'iconfont icon-set !text-[18px] font-black'} />
            <i data-icon="icon-edit" className={'iconfont icon-edit !text-[18px] font-black'} />
            <i
                data-icon="icon-Clothes"
                className={'iconfont icon-Clothes !text-[18px] font-black'}
            />
        </div>
    )

    return (
        <Modal isModalOpen={isModalOpen} setIsOpen={onFinish} title={title}>
            <Form {...layout} form={form} name="nest-messages" validateMessages={validateMessages}>
                <Form.Item name={'title'} label="菜单名称" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'path'} label="菜单路由" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'element'} label="组件路径" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'icon'} label="菜单图标">
                    <Select
                        className="menu-modal-select"
                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                        dropdownRender={() => <Icon />}
                    />
                </Form.Item>
                <Form.Item name={'auth'} label="验证登陆信息">
                    <Switch />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Index
