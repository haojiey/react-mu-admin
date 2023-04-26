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
    }
]
