import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'
import Create from '@/pages/Create/Create'
import Detail from '@/pages/Detail/Detail'
import Edit from '@/pages/Edit/Edit'
import My from '@/pages/My/My'
import User from '@/pages/User/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/user',
      component: User
    },
  ]
})
