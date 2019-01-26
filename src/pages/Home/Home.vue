<template>
  <div id="home">
    <section class="blog-posts">
      <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <img class="avatar-img"
          :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption class="author">{{blog.user.username}}</figcaption>
        </figure>
        <h3 class="blog-title">{{blog.title}}<span class="blog-time"> {{friendlyDate(blog.createdAt)}}</span></h3>
        <p class="blog-content">{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination layout="prev, pager, next" :total="total" background @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
