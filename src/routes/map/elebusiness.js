//电商中心
const Mealgrounding = resolve => require(['views/elebusiness/mealgrounding/index.vue'], resolve) // 上架套装商品列表
const Goodsgrounding = resolve => require(['views/elebusiness/goodsgrounding/index.vue'], resolve) // 上架商品列表
const Servicesgrounding = resolve => require(['views/elebusiness/servicesgrounding/index.vue'], resolve) // 上架服务列表

export default [
    {
        path: '/mealgrounding',
        name: '上架套装商品列表',
        component: Mealgrounding,
        meta: {
            auth: true
        }
    },
    {
        path: '/goodsgrounding',
        name: '上架商品列表',
        component: Goodsgrounding,
        meta: {
            auth: true
        }
    },  
    {
        path: '/servicesgrounding',
        name: '上架服务列表',
        component: Servicesgrounding,
        meta: {
            auth: true
        }
    }
]