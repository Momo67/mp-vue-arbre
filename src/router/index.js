import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import ArbreListe from '@/components/ArbreListe'
import ArbreView from '@/components/ArbreView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello
    },
    {
      path: '/arbreliste',
      name: 'arbreliste',
      component: ArbreListe,
      props: true
    },
    {
      path: '/arbre-view/:id(\\d+)',
      name: 'arbre-view',
      component: ArbreView,
      props: true
    },
    {
      path: '*',
      name: 'default',
      redirect: '/'
    }
  ]
})
