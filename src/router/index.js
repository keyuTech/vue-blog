// 路由管理文件

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home/Home'
// import Login from '@/pages/Login/Login'
// import Register from '@/pages/Register/Register'
// import Create from '@/pages/Create/Create'
// import Detail from '@/pages/Detail/Detail'
// import Edit from '@/pages/Edit/Edit'
// import My from '@/pages/My/My'
// import User from '@/pages/User/User'
import store from '../store'

Vue.use(Router)

const router = new Router({
  // 判断路由决定需要加载的组件和是否需要用户登录
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Home/Home.vue')
    },
    {
      path: '/login',
      component: () => import('@/pages/Login/Login.vue')
    },
    {
      path: '/user/:userId',
      component: () => import('@/pages/User/User.vue')
    },
    {
      path: '/register',
      component: () => import('@/pages/Register/Register.vue')
    },
    {
      path: '/create',
      component: () => import('@/pages/Create/Create.vue')
    },
    {
      // 博客详情页面需要登录才可以查看，所以传递requiresAuth为true，下同
      path: '/detail/:blogId',
      component: () => import('@/pages/Detail/Detail.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/pages/Edit/Edit.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/my',
      component: () => import('@/pages/My/My.vue'),
      meta: { requiresAuth: true },
    },
  ]
})

// 登录后跳转到原来的页面
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 判断store中的isLogin状态是否为true，isLogin为true就是已登录，false即为未登录
    store.dispatch('checkLogin').then(isLogin => {

      if (!store.getters.isLogin) {
        // 如果用户未登录跳转到登录页面
        next({
          path: '/login',
          query: { redirect: to.fullPath},
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router