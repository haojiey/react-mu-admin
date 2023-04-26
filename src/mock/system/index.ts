const userList = (() => {
    const result: any[] = []
    for (let i = 0; i < 13; i++) {
        result.push({
            key: i,
            name: '@cname()',
            user: '@string("lower", 6)',
            status: '@pick(["stop","running"])',
            email: '@email',
            time: '@datetime()'
        })
    }
    return result
})()

const notifyList = (() => {
    const result: any[] = []
    for (let i = 0; i < 203; i++) {
        result.push({
            key: i,
            name: '@ctitle()',
            desc: '@cparagraph()',
            status: '@pick(["read","unread"])',
            user: '@last',
            time: '@datetime()'
        })
    }
    return result
})()

const btnAuthlist = (key: string) => {
    const result: any[] = []
    for (let i = 0; i < 4; i++) {
        result.push({
            name: '@pick(["新增列表","导入文件"])',
            key: key + ':btn:' + '@last',
            index: i
        })
    }
    return result
}

export default [
    {
        url: '/api/system/users',
        method: 'post',
        timeout: 500,
        response: () => ({
            code: 200,
            message: 'ok',
            data: userList
        })
    },
    {
        url: '/api/system/notifys',
        method: 'post',
        timeout: 500,
        response: () => ({
            code: 200,
            message: 'ok',
            data: notifyList
        })
    },
    {
        url: '/api/menu/btnAuthList',
        method: 'post',
        timeout: 500,
        response: ({ body }) => ({
            code: 200,
            message: 'ok',
            data: btnAuthlist(body.path || 'system')
        })
    }
]
