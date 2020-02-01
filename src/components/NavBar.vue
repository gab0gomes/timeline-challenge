<template>
  <nav class="nav">
    <img
      class="logo"
      alt="Logo"
      src="../assets/img/logo.svg"
    />
    <router-link to="/">Timeline</router-link>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.nav {
  padding: 15px 0px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: #303F66;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.5);

  .logo {
    max-width: 40px;
    margin: 0em 2em;
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 2em;
    font-weight: bold;
  }

  a:hover, a.router-link-exact-active {
    color: #36B274;
  }

}
</style>
