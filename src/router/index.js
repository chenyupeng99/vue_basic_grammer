import Vue from 'vue'
import Router from 'vue-router'
import TemplateGra from '@/components/TemplateGra.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TemplateGra',
      component: TemplateGra
    },
    {
      path: '/login',
      component: Login
  },
  ]
})
