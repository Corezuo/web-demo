<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
        <img class="pic-404__parent" src="@/assets/images/404.png" alt="404">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      return 'The webmaster said that you can not enter this page...'
    }
  }
}
</script>

<style lang="scss" scoped>
.wscn-http404-container{
  transform: translate(-50%,-50%);
  position: absolute;
  top: 40%;
  left: 50%;
}
.wscn-http404 {
  display: flex;
  .pic-404__parent {
    width: 500px;
  }
}
</style>
