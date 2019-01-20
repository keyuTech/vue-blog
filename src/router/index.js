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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!store.getters.isLogin) {
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