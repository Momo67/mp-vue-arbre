import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/arbreliste',
      name: 'arbreliste',
      component: require('@/components/ArbreListe.vue'),
      props: true
    },
    {
      path: '/arbre-view/:id(\\d+)',
      name: 'arbre-view',
      component: require('@/components/ArbreView.vue'),
      props: true
    },
    {
      path: '*',
      name: 'default',
      redirect: '/arbreliste'
    }
  ]
})
