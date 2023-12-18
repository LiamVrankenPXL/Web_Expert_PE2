import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProductView from '@/views/ProductView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/products',
            component: ProductView
        },
        {
            path: '/products/detail',
            component: ProductDetailView
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/:notFound(.*)',
            component: PageNotFoundView
        }
    ]
})

export default router