import { message } from 'antd'

const success = (content: string, duration: number = 3) => {
    message.success(content, duration || 3)
}

const error = (content: string, duration: number = 3) => {
    message.error(content, duration || 3)
}

const warning = (content: string, duration: number = 3) => {
    message.warning(content, duration || 3)
}

const info = (content: string, duration: number = 3) => {
    message.warning(content, duration || 3)
}

export function useMessage() {
    return {
        uesSuccessMsg: success,
        uesErrorMsg: error,
        uesWarningMsg: warning,
        uesInfoMsg: info
    }
}
