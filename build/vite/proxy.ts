type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

/**
 * Generate proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
    if (!Array.isArray(list)) {
        return
    }
    const ret = {}
    for (const [prefix, target] of list) {
        ret[prefix] = {
            target: target,
            changeOrigin: true,
            rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '')
        }
    }
    return ret
}
