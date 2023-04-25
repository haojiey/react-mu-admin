import { Button, Divider } from 'antd'

import { useMessage } from '/@/hooks/message'

const { uesSuccessMsg, uesErrorMsg, uesWarningMsg } = useMessage()
export default function Index() {
    const createSuccess = () => {
        uesSuccessMsg('成功提示信息')
    }
    const createError = () => {
        uesErrorMsg('错误提示信息')
    }
    const createWarning = () => {
        uesWarningMsg('警告提示信息')
    }
    return (
        <div className="card">
            <Button type="primary" onClick={createSuccess}>
                成功提示
            </Button>
            <Divider />
            <Button type="primary" danger onClick={createError}>
                错误提示
            </Button>
            <Divider />
            <Button onClick={createWarning}>警告提示</Button>
            <Divider />
        </div>
    )
}
