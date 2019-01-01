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
          <el-button class="register-btn">立即注册</el-button>
        </router-link>
      </div>
    </template>

    <template v-if="isLogin">
      <h1 class="page-title">Let's share</h1>
      <i class="edit el-icon-edit"></i>
      <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
    }
  }
}
</script>


<style scoped lang="less" src="./header.less"></style>
