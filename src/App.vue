<!-- 构建Vue App框架 -->

<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
// 引入header、footer组件
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="less">
@import "./assets/common.less";

// 使用Gird system 做桌面端整体布局
#app {
  display: grid;
  // 三列布局，左右确定宽度为16%，中间一列宽度自适应
  grid-template-columns: 16% auto 16%;
  grid-template-rows: auto 1fr auto;
  // 上中下三部分，header、footer充满屏幕，main区域左右留出spacing
  grid-template-areas: "header header header"
                       ".      main   ."
                       "footer footer footer";
  #header {
    grid-area: header;
    padding-left: 16%;
    padding-right: 16%;
  }

  #main {
    grid-area: main;
  }

  #footer {
    grid-area: footer;
    padding-left: 16%;
    padding-right: 16%;
  }
}

// 移动设备布局
@media (max-width: 786px) {
  #app {
    grid-template-columns: 10px auto 10px;

    #header, #footer {
      padding: 0 10px;
    }
  }
}
</style>
