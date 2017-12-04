const Main = () => import('views/main/index.vue') // 主页框架

import Login from './map/log'
import Demo from './map/demo'
import Service from './map/service'
import Alliance from './map/alliance'
import Shopmanage from './map/shopmanage' //店铺管理
import Elebusiness from './map/elebusiness' //电商中心（商品、服务上下架）
import GoodsManage from './map/goodsManage' // 商品管理

export default [
    ...Login,
    {
        path: '/main',
        name: 'main',
        component: Main,
        meta: {
            title: '管理系统',
            auth: true
        },
        children: [
            ...Demo,
            ...GoodsManage,
            ...Service,
            ...Alliance,
            ...Shopmanage,
            ...Elebusiness,
            ...GoodsManage,
        ]
    }
]