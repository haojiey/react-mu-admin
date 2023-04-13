export default [
    {
        url: '/api/menu/list',
        method: 'get',
        response: () => {
            const menus = [
                {
                    icon: 'HomeOutlined',
                    path: 'home',
                    element: 'home/index',
                    title: '首页',
                    meta: {
                        auth: true
                    }
                },
                {
                    icon: 'FileTextOutlined',
                    path: 'guide',
                    element: 'guide/index',
                    title: '引导页'
                },
                {
                    icon: 'PieChartOutlined',
                    path: 'system',
                    title: '系统管理',
                    children: [
                        {
                            icon: 'AppstoreOutlined',
                            path: 'account',
                            element: 'system/account/index',
                            title: '账号管理',
                            meta: {
                                auth: true
                            }
                        },
                        {
                            icon: 'ProfileOutlined',
                            path: 'menu',
                            element: 'system/menu/index',
                            title: '菜单管理',
                            meta: {
                                auth: true
                            }
                        }
                    ]
                }
            ]
            return {
                code: 200,
                message: 'ok',
                data: menus
            }
        }
    }
]
