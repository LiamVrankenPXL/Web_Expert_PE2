// index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProductView from '@/views/ProductView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import WinkelmandjeView from '@/views/WinkelmandjeView.vue';
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import CheckoutView from '@/views/CheckoutView.vue'

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
            path: '/products/detail/:id',
            name: 'productDetail',
            component: ProductDetailView
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/winkelmandje',
            name: 'winkelmandje',
            component: WinkelmandjeView,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: CheckoutView,
        },
        {
            path: '/:notFound(.*)',
            component: PageNotFoundView
        }
    ]
});

export default router
