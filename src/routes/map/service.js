const SList = resolve => require(['views/service/sList/index.vue'], resolve) // 服务列表
const SPackageList = resolve => require(['views/service/sPackageList/index.vue'], resolve) // 服务套餐列表
const SkinList = resolve => require(['views/service/skinList/index.vue'], resolve) // 肌肤列表


export default [
    {
        path: '/sList',
        name: '服务列表',
        component: SList,
        meta: {
            auth: true
        }
    },
    {
        path: '/sPackageList',
        name: '服务套餐列表',
        component: SPackageList,
        meta: {
            auth: true
        }
    },
    {
        path: '/skinList',
        name: '肌肤列表',
        component: SkinList,
        meta: {
            auth: true
        }
    }
]