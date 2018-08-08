<template>
  <div id="app">
    <h1> Hello Vue</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      console.log(this.$route);
    }
  }
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
