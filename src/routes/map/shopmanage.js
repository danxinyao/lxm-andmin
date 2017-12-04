//店铺管理
const Shopgrade = resolve => require(['views/shopmanage/shopgrade/index.vue'], resolve) // 门店等级 -店铺管理
const Shopcircle = resolve => require(['views/shopmanage/shopcircle/index.vue'], resolve) // 门店商圈
const Shopvisual = resolve => require(['views/shopmanage/shopvisual/index.vue'], resolve) // 门店形象
const Shoplist = resolve => require(['views/shopmanage/shoplist/index.vue'], resolve) // 店铺列表


export default [
    {
        path: '/shopgrade',
        name: '门店等级列表',
        component: Shopgrade,
        meta: {
            auth: true
        }
    },
    {
        path: '/shopcircle',
        name: '门店商圈列表',
        component: Shopcircle,
        meta: {
            auth: true
        }
    }, 
    {
        path: '/shopvisual',
        name: '门店形象列表',
        component: Shopvisual,
        meta: {
            auth: true
        }
    }, 
    {
        path: '/shoplist',
        name: '店铺列表',
        component: Shoplist,
        meta: {
            auth: true
        }
    }
]