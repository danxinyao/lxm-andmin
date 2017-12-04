const AList = resolve => require(['views/alliance/aList/index.vue'], resolve) // 加盟商列表
const ARankList = resolve => require(['views/alliance/aRankList/index.vue'], resolve) // 加盟商等级列表
const AreaList = resolve => require(['views/alliance/areaList/index.vue'], resolve) // 区域列表


export default [
    {
        path: '/aList',
        name: '加盟商列表',
        component: AList,
        meta: {
            auth: true
        },
    },
    {
        path: '/aRankList',
        name: '加盟商等级列表',
        component: ARankList,
        meta: {
            auth: true
        }
    },
    {
        path: '/areaList',
        name: '区域列表',
        component: AreaList,
        meta: {
            auth: true
        }
    },

]