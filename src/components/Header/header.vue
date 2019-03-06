<!-- header组件 -->
<!-- 由于header和footer在所有页面上都需要，所以将header和footer抽离成组件，在每个页面都加载 -->
<template>
  <!-- 通过判断isLogin添加不同的样式，当isLogin为true时代表已登录，使用login样式，当isLogin为false时代表未登录，使用no-login样式 -->
  <header id="header" :class="{'login': isLogin, 'no-login': !isLogin}">
    <!-- 当用户未登录时加载以下结构 -->
    <template v-if="!isLogin">
      <h1 class="page-title">Let's share</h1>
      <p class="page-slogan">精品博客汇聚</p>
      <!-- 当页面不在登录注册页面时展示登录注册两个按钮 -->
      <div class="btns" v-if="$route.path !== '/login' && $route.path !== '/register'">
        <router-link to="/login">
          <el-button class="login-btn">立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button class="register-btn">注册账号</el-button>
        </router-link>
      </div>
    </template>

    <!-- 用户已登录时加载以下结构 -->
    <template v-if="isLogin">
      <!-- 标题 -->
      <h1 class="page-title"><router-link to="/">Let's share</router-link></h1>
      <!-- 点击图标跳转到新建博客页面 -->
      <router-link to="/create">
        <i class="edit el-icon-plus"></i>
      </router-link>
      <!-- 用户信息，头像和用户名 -->
      <div class="user">
        <img class="avatar" :src="
        user.avatar" :alt="user.username" :title="user.username">
        <!-- 用户账户相关操作 -->
        <ul class="myMenu">
          <!-- 点击’我的‘按钮跳转到’我的‘页面 -->
          <li><router-link to="my" class="myLink">我的</router-link></li>
          <!-- 点击注销按钮退出登录 -->
          <li><a class="logoutLink" href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
// 引入登录相关的api
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
  // 在页面创建完成时检查用户是否登录，根据登录状态作后续处理
  created() {
    this.checkLogin().then()
  },

  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    // 注销登录
    onLogout() {
      this.logout()
    }
  },

}
</script>


<style scoped lang="less" src="./header.less"></style>
