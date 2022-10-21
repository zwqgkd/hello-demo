import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    // history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('@/登陆界面/LoginWindow.vue')
            // component: () => import('../components/ProcessDp.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('@/主界面/MainWindow.vue'),
            children: [
                {
                    path: '/processDp',
                    name: 'process',
                    component: () => import('@/流程图界面/ProcessDp.vue')
                },
            ]
        },
        // {
        //     path: '/file',
        //     name: 'file',
        //     component: () => import('@/主界面/components/UserFile.vue')
        // },
        // {
        //     path: '/os',
        //     name: 'os',
        //     component: () => import('@/主界面/components/UserOS.vue')
        // },
        // {
        //     path: '/view',
        //     name: 'view',
        //     component: () => import('@/主界面/components/UserView.vue')
        // },
        // {
        //     path: '/else',
        //     name: 'else',
        //     component: () => import('@/主界面/components/UserElse.vue')
        // },
        // {
        //     path: '/img',
        //     name: 'img',
        //     component: () => import('@/主界面/components/UserImg.vue')
        // },
        {
            path: '/userLF',
            name: 'lf',
            component: () => import('@/流程图界面/components/UserLF.vue')
        },
    ]
})

export default router

