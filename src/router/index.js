import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import Blank from '@/layout/blank'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'DefaultPage',
    component: DefaultPage
  }, {
    path: '/blank',
    name: 'Blank',
    component: Blank
  }]
})
