<template>
  <div>

    <TopSection/>
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
            <ArticleList :blogs = "blogs">

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
  </div>

</template>

<script>
  import TopSection from '../../components/header/TopSection'
  import Banner from '../../components/left/Banner'
  import ArticleList from '../../components/common/ArticleList'
  import Me from '../../components/right/Me'
  import Cards from '../../components/right/Cards'
  import {mapState} from 'vuex'
  import Notice from '../../components/common/Notices'
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
    components:{
      TopSection,
      Banner,
      ArticleList,
      Notice,
      Me,
      Cards
    }
  }
</script>

<style >

</style>
