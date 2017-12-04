/**
 * 商品管理
 */

const Goods = () => import('views/goodsManage/goods/index.vue') // 商品列表
const TypeList = resolve => require(['views/alliance/typeList/index.vue'], resolve) // 分类列表

export default [
    {

        path: '/goods',
        name: '商品列表',
        component: Goods,
        meta: {
            auth: true
        }
    },
    {
        path: '/typeList',
        name: '分类列表',
        component: TypeList,
        meta: {
            auth: true
        }
    },
]