export interface ViteEnv {
    VITE_PORT: number
    VITE_USE_MOCK: boolean
    VITE_USE_PWA: boolean
    VITE_PUBLIC_PATH: string
    VITE_PROXY: [string, string][]
    VITE_OPEN: boolean
    VITE_GLOB_APP_TITLE: string
    VITE_GLOB_APP_SHORT_NAME: string
    VITE_USE_CDN: boolean
    VITE_DROP_CONSOLE: boolean
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_DYNAMIC_IMPORT: boolean
    VITE_LEGACY: boolean
    VITE_USE_IMAGEMIN: boolean
}

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: any): ViteEnv {
    const ret: any = {}

    for (const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, '\n')
        realName = realName === 'true' ? true : realName === 'false' ? false : realName
        if (envName === 'VITE_PORT') {
            realName = Number(realName)
        }
        if (envName === 'VITE_PROXY') {
            try {
                realName = JSON.parse(realName)
            } catch (error) {
                throw error
            }
        }

        ret[envName] = realName
    }
    return ret
}
