<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
  @import '../node_modules/minireset.css/minireset.sass';

  body {
    background-color: #EDF0FC;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  #app {

  }
</style>
