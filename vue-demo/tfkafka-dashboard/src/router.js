import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Logging  from './views/Logging'
import Cluster from './views/Cluster'
import JavaProperties from './views/JavaProperties'
import ThreadDump from './views/ThreadDump'
import BrokerConfig from './views/BrokerConfig'
import Topics from './views/Topics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/logging',
      name: 'logging',
      component: Logging
    }, 
    {
      path: '/cluster',
      name: 'cluster',
      component: Cluster
    },
    {
      path: '/java-properties',
      name: 'java-properties',
      component: JavaProperties
    }, 
    {
      path: '/thread-dump',
      name: 'thread-dump',
      component: ThreadDump
    }, 
    {
      path: '/broker-config',
      name: 'broker-config',
      component: BrokerConfig
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    }
  ]
})
