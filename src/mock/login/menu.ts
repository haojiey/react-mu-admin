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
                    icon: 'FileTextOutlined',
                    path: 'echarts',
                    element: 'echarts/index',
                    title: '图表页'
                },
                {
                    icon: 'FileTextOutlined',
                    path: 'forms',
                    element: 'forms/index',
                    title: '表单'
                },
                {
                    icon: 'FileTextOutlined',
                    path: 'tables',
                    element: 'tables/index',
                    title: '表格'
                },
                {
                    icon: 'FileTextOutlined',
                    path: 'users',
                    element: 'users/index',
                    title: '个人信息'
                },
                {
                    icon: 'FileTextOutlined',
                    path: 'error',
                    title: '错误页面',
                    children: [
                        {
                            icon: 'AppstoreOutlined',
                            path: '403',
                            element: 'error/403/index',
                            title: '403页面'
                        },
                        {
                            icon: 'AppstoreOutlined',
                            path: '404',
                            element: 'error/404/index',
                            title: '404页面'
                        }
                    ]
                },
                {
                    icon: 'FileTextOutlined',
                    path: 'components',
                    title: '常用组件',
                    children: [
                        {
                            icon: 'AppstoreOutlined',
                            path: 'icon',
                            element: 'components/icon/index',
                            title: 'ICON 图标',
                            meta: {
                                auth: true
                            }
                        }
                    ]
                },
                {
                    icon: 'FileTextOutlined',
                    path: 'btnAuth',
                    element: 'BtnAuth/index',
                    title: '按钮权限'
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
                            icon: 'AppstoreOutlined',
                            path: 'notify',
                            element: 'system/notify/index',
                            title: '消息管理',
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
