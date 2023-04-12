export function setObjToUrlParams(baseUrl: string, obj: any): string {
    let parameters = ''
    for (const key in obj) {
        parameters += key + '=' + encodeURIComponent(obj[key]) + '&'
    }
    parameters = parameters.replace(/&$/, '')
    return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}
