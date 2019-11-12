<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import axiosInst from './utils/request'
  export default {
    name: 'app',
    created: function(){
      console.log("开启请求");
      axiosInst.get("/test")
      .then(function (req) {
        console.log("请求成功！")
        console.log(req);
      }).catch(function(err){
        console.log("请求失败！")
        console.log(err);
      });
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 200px;
    border: 1px solid red;
  }
</style>