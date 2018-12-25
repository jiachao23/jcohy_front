<template>

  <div class="blog-main-right">
    <!--profile info start -->
    <Me/>
    <Cards/>
    <!--profile Info end-->
  </div>


  <!--左边文章列表-->



  <!--右边小栏目-->
</template>

<script>
  import Me from './Me'
  import Cards from './Cards'
  export default {
    components:{
      Me,
      Cards
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
