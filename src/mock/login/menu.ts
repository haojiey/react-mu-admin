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
                            icon: 'icon-all',
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
                            icon: 'icon-clock',
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
                            icon: 'icon-form',
                            path: 'forms',
                            meta: {
                                title: '表单案例',
                                auth: true
                            },
                            children: [
                                {
                                    icon: 'icon-form',
                                    path: 'normal',
                                    element: 'forms/normal/index',
                                    meta: {
                                        title: '常规表单',
                                        auth: true
                                    }
                                },
                                {
                                    icon: 'icon-form',
                                    path: 'check',
                                    element: 'forms/check/index',
                                    meta: {
                                        title: '校验表单',
                                        auth: true
                                    }
                                },
                                {
                                    icon: 'icon-form',
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
                            icon: 'icon-calendar',
                            path: 'tables',
                            meta: {
                                title: '表格案例',
                                auth: true
                            },
                            children: [
                                {
                                    icon: 'icon-calendar',
                                    path: 'routine',
                                    element: 'tables/routine/index',
                                    meta: {
                                        title: '复杂表格'
                                    }
                                },
                                {
                                    icon: 'icon-calendar',
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
                            icon: 'icon-edit',
                            path: 'function',
                            meta: {
                                title: '常用功能'
                            },
                            children: [
                                {
                                    icon: 'icon-edit',
                                    path: 'download',
                                    element: 'function/download/index',
                                    meta: {
                                        title: '下载文件'
                                    }
                                },
                                {
                                    icon: 'icon-edit',
                                    path: 'notify',
                                    element: 'function/notify/index',
                                    meta: {
                                        title: '消息提示'
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
                            icon: 'icon-viewgallery',
                            path: 'components',
                            meta: {
                                title: '常用组件',
                                auth: true
                            },
                            children: [
                                {
                                    icon: 'icon-viewgallery',
                                    path: 'icon',
                                    element: 'components/icon/index',
                                    meta: {
                                        title: 'ICON 图标'
                                    }
                                },
                                {
                                    icon: 'icon-viewgallery',
                                    path: 'water',
                                    element: 'components/water/index',
                                    meta: {
                                        title: '水印'
                                    }
                                },
                                {
                                    icon: 'icon-viewgallery',
                                    path: 'modal',
                                    element: 'components/modal/index',
                                    meta: {
                                        title: '弹窗'
                                    }
                                },
                                {
                                    icon: 'icon-viewgallery',
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
                            icon: 'icon-set',
                            path: 'system',
                            meta: {
                                title: '系统管理',
                                auth: true
                            },
                            children: [
                                {
                                    icon: 'icon-set',
                                    path: 'account',
                                    element: 'system/account/index',
                                    meta: {
                                        title: '账号管理',
                                        auth: true
                                    }
                                },
                                {
                                    icon: 'icon-set',
                                    path: 'notify',
                                    element: 'system/notify/index',
                                    meta: {
                                        title: '消息管理',
                                        auth: true
                                    }
                                },
                                {
                                    icon: 'icon-set',
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
                            icon: 'icon-cry',
                            path: 'error',
                            meta: {
                                title: '错误页面'
                            },
                            children: [
                                {
                                    icon: 'icon-cry',
                                    path: '403',
                                    element: 'error/403/index',
                                    meta: {
                                        title: '403页面'
                                    }
                                },
                                {
                                    icon: 'icon-cry',
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
                            icon: 'icon-category',
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
