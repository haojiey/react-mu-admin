import { storageEnum } from '/@/enum/storage'

const WebStorage = {
    set: (key: string, value: any) => {
        localStorage.setItem(`${storageEnum.PREFIX}_${key}`, JSON.stringify(value))
    },
    get: (key: string) => {
        const val = localStorage.getItem(`${storageEnum.PREFIX}_${key}`)
        if (val) {
            return JSON.parse(val)
        }
        return ''
    },
    remove: (key: string) => {
        localStorage.removeItem(`${storageEnum.PREFIX}_${key}`)
    }
}

export default WebStorage
