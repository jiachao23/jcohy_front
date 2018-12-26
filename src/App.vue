<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <HeaderTop v-show="$route.meta.showHeader"></HeaderTop>
    <router-view/>
    <Footter/>
  </div>
</template>

<script>
import HeaderTop from './components/header/HeaderTop'
import Footter from './components/footer/Footter'
export default {
 components:{
   HeaderTop,
   Footter
 },
  mounted(){
    this.$store.dispatch('getNotices')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getTags')
    this.$store.dispatch('getLinks')
    this.$store.dispatch('getResources')
    this.$store.dispatch('getBlogs',"hot")
    this.$store.dispatch('getBlogs',"share")
  }
}
</script>

<style>

</style>
