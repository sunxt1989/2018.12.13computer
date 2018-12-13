import Vue from 'vue'
import Router from 'vue-router'
import computer from '@/components/computer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'computer',
      component: computer
    }
  ]
})
