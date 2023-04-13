export default [
    {
        url: '/api/login',
        method: 'post',
        response: ({ body }) => {
            if (body.username !== 'admin' || body.password !== '123456') {
                return {
                    code: 500,
                    message: '用户名或密码输入错误'
                }
            }
            const params = {
                token: 'hfejahfjeafe6612gjuiouio37812gjhg321'
            }
            return {
                code: 200,
                message: 'ok',
                data: params
            }
        }
    }
]
