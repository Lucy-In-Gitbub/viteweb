import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/home/Home.vue'
import AboutView from '../views/about/About.vue'
import MyView from '../views/my/My.vue'
import path from 'path'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

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
    {
        path:"/my",
        name:'my',
        component:MyView,
        children: [
            {
                path: 'tree-select',
                name: 'tree-select',
                component: component
            },{
                path: 'tree-select-option',
                name: 'tree-select-option',
                component: component
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
