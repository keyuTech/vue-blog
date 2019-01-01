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

#app {
  display: grid;
  grid-template-columns: 16% auto 16%;
  grid-template-rows: auto 1fr auto;
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

@media (max-width: 786px) {
  #app {
    grid-template-columns: 10px auto 10px;

    #header, #footer {
      padding: 0 10px;
    }
  }
}
</style>
