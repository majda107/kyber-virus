import Vue from 'vue'
import Router from 'vue-router'

import HomeView from './views/HomeView.vue'

Vue.use(Router)

const linkActiveClass = 'my-link-active-class'

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
        }
    ],
    linkActiveClass
})