import Vue from 'vue'
import Router from 'vue-router'

import AIndex from '@/page/index'
import Auser from '@/page/createuser'
import Managementuser from '@/page/Managementuser'
import Ainstitution from '@/page/institution'
import Alog from '@/page/log'
 import Alogin from '@/page/login1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Alogin',
      name:'Alogin',
      component: Alogin,
    },   
    {
      path: '/',
      name: 'AIndex',
      component: AIndex,
      redirect: 'Auser',
      children: [
        {
          path: 'Auser',
          name: 'Auser',
          component: Auser,
        }
      ]
    },
    {
      path: '/',
      name: 'AIndex',
      component: AIndex,
      redirect: 'Managementuser',
      children: [
        {
          path: 'Managementuser',
          name: 'Managementuser',
          component: Managementuser,
        }
      ]
    },
    {
      path: '/',
      name: 'AIndex',
      component: AIndex,
      redirect: 'Ainstitution',
      children: [
        {
          path: 'Ainstitution',
          name: 'Ainstitution',
          component: Ainstitution,
        }
      ]
    },
    {
      path: '/',
      name: 'AIndex',
      component: AIndex,
      redirect: 'Alog',
      children: [
        {
          path: 'Alog',
          name: 'Alog',
          component: Alog,
        }
      ]
    },
   

  ]
})
