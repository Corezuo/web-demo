import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '@/layout'
import dashboard from '@/views/dashboard'
import topology from '@/views/topology'
import trace from '@/views/trace'
import sentinel from '@/views/sentinel'
import alarm from '@/views/alarm'
import Page404 from '@/views/error-page/404';

const createRouter = () => new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/dashbaord',
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: dashboard
                },
                {
                    path: 'topology',
                    name: 'topology',
                    component: topology
                },
                {
                    path: 'trace',
                    name: 'trace',
                    component: trace
                },
                {
                    path: 'sentinel',
                    name: 'sentinel',
                    component: sentinel
                },
                {
                    path: 'alarm',
                    name: 'alarm',
                    component: alarm
                }
            ]
        },
        {
            path: '/404',
            name: 'Page404',
            component: Page404
        }
    ]
})

const router = createRouter()

export default router