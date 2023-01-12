import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    //history: createWebHistory(),
    history: createWebHashHistory(),
    // history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('@/登录窗口/LoginWindow.vue')
            // component: () => import('../components/FlowArea.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('@/主窗口/MainWindow.vue'),
            children: [
                {
                    path: '/processDp',
                    name: 'process',
                    component: () => import('@/流程图操作/FlowArea.vue')
                },
            ]
        },
        {
            path: '/logicFlow',
            name: 'lf',
            component: () => import('@/流程图操作/components/LogicFlow.vue')
        },
        {
            path: '/conditionEdge',
            name: 'conditionEdge',
            component: () => import('@/流程图操作/components/dialog/ConditionEdgeDialog.vue')
        },
        {
            path: '/conditionNode',
            name: 'conditionNode',
            component: () => import('@/流程图操作/components/dialog/ConditionNodeDialog.vue')
        },
    ]
})

export default router

