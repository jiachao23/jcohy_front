<template>
  <div>
    <HeaderTop v-show="$route.meta.showHeader"></HeaderTop>
    <router-view/>
  </div>

</template>

<script>
  import HeaderTop from './HeaderTop'
  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style >

</style>
