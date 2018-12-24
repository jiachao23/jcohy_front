<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <HeaderTop v-show="$route.meta.showHeader"></HeaderTop>
    <router-view/>
  </div>
</template>

<script>
import HeaderTop from './components/header/HeaderTop'
export default {
 components:{
   HeaderTop
 }
}
</script>

<style>

</style>
