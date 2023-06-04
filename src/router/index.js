import {createRouter, createWebHistory, RouterView} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/pages/Home.vue')
        },
        {
            path: '/ourWork',
            name: 'OurWork',
            component: () => import('../views/pages/OurWork.vue')
        },
        {
            path: '/contactUs',
            name: 'ContactUs',
            component: () => import('../views/pages/ContactUs.vue')
        },
        {
            path: '/customSites',
            name: 'CustomSites',
            component: () => import('../views/pages/CustomSites.vue')
        },
        {
            path: '/templatedSites',
            name: 'TemplatedSites',
            component: () => import('../views/pages/TemplatedSites.vue')
        },
        {
            path: '/blog',
            component: RouterView,
            children: [
                {
                    path: '',
                    name: 'Blog',
                    component: () => import('../views/pages/Blog.vue')
                },
                {
                    path: ':id',
                    name: 'BlogInner',
                    component: () => import('../views/pages/BlogInner.vue')
                }
            ]
        },

    ]
})

export default router
