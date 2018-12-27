
<template>

</template>

<script>
  import Banner from '../left/Banner'
  import ArticleList from '../common/ArticleList'
  import Me from '../right/Me'
  import Cards from '../right/Cards'
  import {mapState} from 'vuex'
  import Notice from '../common/Notices'
  import '../../../static/css/jcohy/home.css'
  export default {
    data(){
      return{
        isSearch:false
      }
    },
    computed:{
      ...mapState(['blogs'])
    },
   components :{
     Banner,
     ArticleList,
     Notice,
     Me,
     Cards
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
