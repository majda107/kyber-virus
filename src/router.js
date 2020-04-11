import Vue from 'vue'
import Router from 'vue-router'

import HomeView from './views/HomeView.vue'
import GlobalView from './views/GlobalView.vue'

Vue.use(Router)

const linkActiveClass = 'link-active'

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/global',
            name: 'global',
            component: GlobalView
        }
    ],
    linkActiveClass
})