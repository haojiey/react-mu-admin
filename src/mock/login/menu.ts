export default [
    {
        url: '/api/menu/list',
        method: 'get',
        response: () => {
            const menu = [
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'HomeOutlined',
                            path: 'home',
                            element: 'home/index',
                            meta: {
                                title: '首页'
                            }
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'guide',
                            element: 'guide/index',
                            meta: {
                                title: '引导页'
                            }
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'echarts',
                            element: 'echarts/index',
                            meta: {
                                title: '图表页'
                            }
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'users',
                            element: 'users/index',
                            meta: {
                                title: '个人信息'
                            }
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'btnAuth',
                            element: 'ButtonAuth/index',
                            meta: {
                                title: '按钮权限'
                            }
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'error',
                            meta: {
                                title: '错误页面'
                            },
                            children: [
                                {
                                    icon: 'AppstoreOutlined',
                                    path: '403',
                                    element: 'error/403/index',
                                    meta: {
                                        title: '403页面'
                                    }
                                },
                                {
                                    icon: 'AppstoreOutlined',
                                    path: '404',
                                    element: 'error/404/index',
                                    meta: {
                                        title: '404页面'
                                    }
                                }
                            ]
                        }
                    ]
                },

                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'function',
                            meta: {
                                title: '常用功能'
                            },
                            children: [
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'download',
                                    element: 'function/download/index',
                                    meta: {
                                        auth: true,
                                        title: '下载文件'
                                    }
                                }
                            ]
                        }
                    ]
                },

                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'components',
                            meta: {
                                title: '常用组件',
                                auth: true
                            },
                            children: [
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'icon',
                                    element: 'components/icon/index',
                                    meta: {
                                        title: 'ICON 图标'
                                    }
                                },
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'modal',
                                    element: 'components/modal/index',
                                    meta: {
                                        title: '弹窗'
                                    }
                                },
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'upload',
                                    element: 'components/upload/index',
                                    meta: {
                                        title: '上传文件'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'forms',
                            meta: {
                                title: '表单案例',
                                auth: true
                            },
                            children: [
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'normal',
                                    element: 'forms/normal/index',
                                    meta: {
                                        title: '常规表单',
                                        auth: true
                                    }
                                },
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'check',
                                    element: 'forms/check/index',
                                    meta: {
                                        title: '校验表单',
                                        auth: true
                                    }
                                },
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'query',
                                    element: 'forms/query/index',
                                    meta: {
                                        title: '高级查询表单',
                                        auth: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'tables',
                            meta: {
                                title: '表格案例',
                                auth: true
                            },
                            children: [
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'routine',
                                    element: 'tables/routine/index',
                                    meta: {
                                        title: '复杂表格'
                                    }
                                },
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'condition',
                                    element: 'tables/condition/index',
                                    meta: {
                                        title: '常规表格'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'PieChartOutlined',
                            path: 'system',
                            meta: {
                                title: '系统管理',
                                auth: true
                            },
                            children: [
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'account',
                                    element: 'system/account/index',
                                    meta: {
                                        title: '账号管理',
                                        auth: true
                                    }
                                },
                                {
                                    icon: 'AppstoreOutlined',
                                    path: 'notify',
                                    element: 'system/notify/index',
                                    meta: {
                                        title: '消息管理',
                                        auth: true
                                    }
                                },
                                {
                                    icon: 'ProfileOutlined',
                                    path: 'menu',
                                    element: 'system/menu/index',
                                    meta: {
                                        title: '菜单管理',
                                        auth: true
                                    }
                                }
                            ]
                        }
                    ]
                },

                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'FileTextOutlined',
                            path: 'about',
                            element: 'about/index',
                            meta: {
                                title: '关于信息',
                                auth: true
                            }
                        }
                    ]
                }
            ]

            return {
                code: 200,
                message: 'ok',
                data: menu
            }
        }
    }
]
