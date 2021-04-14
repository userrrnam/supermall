import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () =>
                import ('@/views/home/home.vue')
        },
        {
            path: '/category',
            component: () =>
                import ('@/views/category/category.vue')
        },
        {
            path: '/cart',
            component: () =>
                import ('@/views/cart/cart.vue')
        },
        {
            path: '/profile',
            component: () =>
                import ('@/views/profile/profile.vue')
        },
        {
            path: '/deteil/:iid',
            component: () =>
                import ('@/views/deteil/deteil.vue')
        }
    ]
})