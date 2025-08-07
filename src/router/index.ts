import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/home/Home.vue'
import AboutView from '../views/About/About.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
