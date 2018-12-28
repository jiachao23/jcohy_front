<template>
  <div id="app">
    <router-view/>
    <BaseFooter/>
  </div>
</template>

<script>
import HeaderTop from './pages/HeaderTop'
import BaseFooter from './components/common/BaseFooter'
export default {
 components:{
   HeaderTop,
   BaseFooter
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
