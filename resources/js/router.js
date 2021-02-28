import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import fistPage from './components/pages/firstpage'

const routes = [
    {
        path: '/fistpage',
        component: fistPage
    }
]

export default new Router({
    mode: 'history',
    routes
})
