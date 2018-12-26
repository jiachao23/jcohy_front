
<template>
  <!-- 首页主题body，包括顶部的公告，和左右两侧 start -->
    <div class="blog-body">
      <div class="blog-container">
        <div class="blog-main">
          <!-- 公告部分 start -->
          <Notice/>
          <!-- 公告部分 end -->
          <!-- left start -->
          <!-- banner start-->
          <div class="blog-main-left" style="margin-bottom: 15px">
            <Banner/>
          </div>
          <div class="blog-main-right">
            <!--profile info start -->
            <Me/>

            <!--profile Info end-->
          </div>
          <div class="blog-main-left">
            <ArticleList v-for="(blog,index) in blogs" :key="index" :blog="blog" :search="isSearch">

            </ArticleList>
          </div>
          <!--banner end-->
          <!-- left end -->
          <!-- right start-->
          <div class="blog-main-right">
            <!--profile info start -->
            <Cards/>

            <!--profile Info end-->
          </div>

          <!--right end-->

    <div class="clear"></div>
  </div>
  </div>

  </div>
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
