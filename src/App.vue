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
  @import './assets/styles/app.scss';

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #EDF0FC;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #555;
  }

  #app {

  }
</style>
