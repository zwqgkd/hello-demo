import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    // history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../pages/LoginWindow.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../pages/MainWindow.vue'),
            children: [
                {
                    path: '/processDp',
                    name: 'process',
                    component: () => import('../components/ProcessDp.vue')
                },
            ]
        },
        {
            path: '/file',
            name: 'file',
            component: () => import('../pages/menuPages/UserFile.vue')
        },
        {
            path: '/os',
            name: 'os',
            component: () => import('../pages/menuPages/UserOS.vue')
        },
        {
            path: '/view',
            name: 'view',
            component: () => import('../pages/menuPages/UserView.vue')
        },
        {
            path: '/else',
            name: 'else',
            component: () => import('../pages/menuPages/UserElse.vue')
        },
        {
            path: '/img',
            name: 'img',
            component: () => import('../components/UserImg.vue')
        },
        {
            path: '/userLF',
            name: 'lf',
            component: () => import('../components/UserLF.vue')
        },
    ]
})

export default router

