export const menuList = [
    {
        path: '/',
        name: 'Demo',
        iconCls: '',
        children: [
            {
                path: '/demo',
                name: 'Demo',
                iconCls: '',
                menuPower: [
                    '批量删除',
                    '新增',
                    '启用',
                    '禁用',
                    '编辑',
                    '删除'
                ]
            }
        ]
    },
    {
        path: '/',
        name: '商品管理',
        iconCls: '',
        children: [
            {
                path: '/goods',
                name: '商品列表',
                iconCls: '',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '导入',
                    '导出',
                    '导入国际码',
                    '淘汰',
                    '修改',
                    '添加SKU',
                    '查看库存',
                    '查看'
                ]
            },
            {
                path: '/typeList',
                name: '分类列表',
                iconCls: '',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '导入',
                    '导出',
                    '编辑',
                    '删除'
                ]
            },
        ]
    },
    {
        path: '/',
        name: '服务管理',
        iconCls: '',
        children: [
            {
                path: '/sList',
                name: '服务列表',
                iconCls: '',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '导入',
                    '导出',
                    '编辑',
                    '删除'
                ]
            },
            {
                path: '/sPackageList',
                name: '服务套餐列表',
                iconCls:'',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '导入',
                    '导出',
                    '编辑',
                    '删除'
                ]
            },
            {
                path: '/skinList',
                name: '肌肤列表',
                iconCls:'',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '导入',
                    '导出',
                    '编辑',
                    '删除'
                ]
            },
        ]
    },
    {
        path: '/',
        name: '加盟商管理',
        iconCls: '',
        children: [
            {
                path: '/areaList',
                name: '区域列表',
                iconCls: '',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '导入',
                    '导出',
                    '编辑',
                    '删除'
                ]
            },
            {
                path: '/aList',
                name: '加盟商列表',
                iconCls:'',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '导入',
                    '导出',
                    '编辑',
                    '删除',
                    '设为默认',
                    '查看属下门店'
                ]
            },
            {
                path: '/aRankList',
                name: '加盟商等级列表',
                iconCls:'',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '导入',
                    '导出',
                    '编辑',
                    '删除',
                    '设置商品等级价'
                ]
            },
        ]
    },
    {
        path: '/',
        name: '店铺管理',
        iconCls: '',
        children: [
            {
                path: '/shopgrade',
                name: '门店等级列表',
                iconCls: '',
                menuPower: [
                    '新增',
                    '启用',
                    '禁用',
                    '编辑',
                ]
            },
            {
                path: '/shopcircle',
                name: '门店商圈列表',
                iconCls: '',
                menuPower: [
                    '批量删除',
                    '新增',
                    '启用',
                    '禁用',
                    '编辑',
                    '删除'
                ]
            },
            {
                path: '/shopvisual',
                name: '门店形象列表',
                iconCls: '',
                menuPower: [
                    '批量删除',
                    '新增',
                    '启用',
                    '禁用',
                    '编辑',
                    '删除'
                ]
            },
            {
                path: '/shoplist',
                name: '店铺列表',
                iconCls: '',
                menuPower: [
                    '批量删除',
                    '新增',
                    '启用',
                    '禁用',
                    '编辑',
                    '删除',
                    '查看',
                    '转让',
                    '转让记录',
                    '导入',
                    '导出',                    
                ]
            },                                    
        ]
    }, 
    {
        path: '/',
        name: '商品上下架',
        iconCls: '',
        children: [
            {
                path: '/mealgrounding',
                name: '上架套装商品列表',
                iconCls: '',
                menuPower: [
                    '上架',
                    '下架',
                    '导入电商资料',
                    '导出电商资料',
                    '配置电商资料',
                ]
            }, 
            {
                path: '/goodsgrounding',
                name: '上架商品列表',
                iconCls: '',
                menuPower: [
                    '上架',
                    '下架',
                    '导入电商资料',
                    '导出电商资料',
                    '配置电商资料',
                ]
            },                                             
        ]
    }, 
    {
        path: '/',
        name: '服务上下架',
        iconCls: '',
        children: [
            {
                path: '/servicesgrounding',
                name: '上架服务列表',
                iconCls: '',
                menuPower: [
                    '上架',
                    '下架',
                    '导入电商资料',
                    '导出电商资料',
                    '配置电商资料',
                ]
            },                                            
        ]
    },              
]
