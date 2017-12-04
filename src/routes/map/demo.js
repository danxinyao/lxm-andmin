const Demo = () => import('views/demo/index.vue') // demo

export default [
    {
        path: '/demo',
        name: 'demo',
        component: Demo,
        meta: {
            auth: true
        }
    }  
]