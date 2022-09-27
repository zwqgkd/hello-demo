import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    // history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../pages/UserLogin.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../pages/MainWindow.vue'),
            
        },
        {
            path:'/file',
            name:'file',
            component:()=>import('../pages/menuPages/UserFile.vue')
        },
        {
            path:'/os',
            name:'os',
            component:()=>import('../pages/menuPages/UserOS.vue')
        },
        {
            path:'/view',
            name:'view',
            component:()=>import('../pages/menuPages/UserView.vue')
        },
        {
            path:'/else',
            name:'else',
            component:()=>import('../pages/menuPages/UserElse.vue')
        }
        // {
        //     path:'/lf',
        //     name:'FlowDemo',
        //     component:()=>import('../pages/FlowDemo.vue')
        // },
        // {
        //     path:'/lf1',
        //     name:'flow1',
        //     component:()=>import('../pages/FlowDemo1.vue')
        // }
    ]
})

export default router

