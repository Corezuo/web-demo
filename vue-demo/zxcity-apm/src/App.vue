<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import dashboard from "./views/dashboard";
  
  export default {
    name: 'app',
    components: {
      dashboard
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 200px;
    border: 1px solid red;
  }
</style>