<template>
  <header id="header" :class="{'login': isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1 class="page-title">Let's share</h1>
      <p class="page-slogan">精品博客汇聚</p>
      <div class="btns" v-if="$route.path !== '/login' && $route.path !== '/register'">
        <router-link to="/login">
          <el-button class="login-btn">立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button class="register-btn">注册账号</el-button>
        </router-link>
      </div>
    </template>

    <template v-if="isLogin">
      <h1 class="page-title">Let's share</h1>
      <i class="edit el-icon-edit"></i>
      <div class="user">
        <img class="avatar" :src="
        user.avatar" :alt="user.username" :title="user.username">
        <ul class="myMenu">
          <li><router-link to="my">我的</router-link></li>
          <li><a class="logoutLink" href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import auth from '@/api/auth'
window.auth = auth
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },

  computed: {
    ...mapGetters([
      'user',
      'isLogin',
    ])
  },

  created() {
    this.checkLogin().then()
  },

  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout() {
      this.logout()
    }
  },

}
</script>


<style scoped lang="less" src="./header.less"></style>
