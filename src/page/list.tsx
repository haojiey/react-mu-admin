import { MessageOutlined } from '@ant-design/icons'
import {
    Button,
    DatePicker,
    Divider,
    Form,
    InputNumber,
    Rate,
    Select,
    Slider,
    Space,
    Switch,
    Typography
} from 'antd'

const { Option } = Select
const { Title } = Typography

// import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";

function change() {
    // toggleTheme({
    //     scopeName: "theme-dark",
    // });
}

const List = () => (
    <div className="card">
        <MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />;
        <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
            <Space align="start">
                <img
                    style={{ width: 40, height: 40 }}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    alt="Ant Design"
                    onClick={change}
                />
                <Title level={2} style={{ marginBottom: 0 }}>
                    Ant Design
                </Title>
            </Space>
        </section>
        <Divider style={{ marginBottom: 60 }}>Form</Divider>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
            <Form.Item label="数字输入框">
                <InputNumber min={1} max={10} defaultValue={3} />
                <span className="ant-form-text"> 台机器</span>
                <a href="https://ant.design">链接文字</a>
            </Form.Item>
            <Form.Item label="开关">
                <Switch defaultChecked />
            </Form.Item>
            <Form.Item label="滑动输入条">
                <Slider defaultValue={70} />
            </Form.Item>
            <Form.Item label="选择器">
                <Select defaultValue="lucy" style={{ width: 192 }}>
                    <Option value="jack">jack</Option>
                    <Option value="lucy">lucy</Option>
                    <Option value="disabled" disabled>
                        disabled
                    </Option>
                    <Option value="yiminghe">yiminghe</Option>
                </Select>
            </Form.Item>
            <Form.Item label="日期选择框">
                <DatePicker />
            </Form.Item>
            <Form.Item label="日期范围选择框">
                <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item label="评分">
                <Rate defaultValue={5} />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button>Cancel</Button>
                </Space>
            </Form.Item>
        </Form>
    </div>
)

export default List
