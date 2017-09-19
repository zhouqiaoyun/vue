import Vue from 'vue'
import Router from 'vue-router'
import Log from '@/page/Log'
import Reg from '@/page/Reg'
import dashboard from '@/page/dashboard'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  	 {
      path: '/',
      component: Log
    },
    {
      path: '/Log',
      name: 'Log',
      component: Log
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
