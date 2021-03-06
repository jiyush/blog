import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import fistPage from './components/pages/firstpage'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/basic/methods'
import home from './components/pages/home'

const routes = [

    // Project Route
    {
        path:'/',
        component: home
    },

    // basic test route
    {
        path: '/fistpage',
        component: fistPage
    },
    {
        path: '/hooks',
        component: hooks
    },
    {
        path: '/methods',
        component: methods
    },
]

export default new Router({
    mode: 'history',
    routes
})
