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
            <ArticleList>

            </ArticleList>
          </div>
          <!--banner end-->
          <!-- left end -->
          <!-- right start-->
          <div class="blog-main-right">
            <!--profile info start -->
            <Cards cardType="leftHorizontal" title="热文排行" :datas="hotblogs"/>
            <Cards cardType="leftHorizontal" title="分享排行" :datas="shareblogs"/>
            <Cards cardType="vertical" title="标签分类" :datas="tags"/>
            <!--<Cards cardType="leftHorizontal" title="资源分享" :datas="resources"/>-->
            <Cards cardType="asideHorizontal" title="时光轴" :datas="timelines"/>
            <Cards cardType="vertical" title="友情链接" :datas="links" :insideJump="false"/>
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
  import TopSection from '../../components/common/TopSection'
  import Banner from '../../components/common/Banner'
  import Me from '../../components/Me'
  import Cards from '../../components/Cards'
  import Notice from '../../components/common/Notices'
  import '../../../static/css/jcohy/home.css'
  import ArticleList from '../../components/common/ArticleList'
  import {mapState} from 'vuex'
  export default {
    name: "home",
    computed:{
      ...mapState(['hotblogs','shareblogs','categories','resources','tags','timelines','links'])
    },
    components:{
      TopSection,
      Banner,
      Notice,
      Me,
      Cards,
      ArticleList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @media only screen and (max-width: 878px) {
    .blog-main-right:nth-child(0) {
      display: none;
    }
    #logo a{
      position relative;
    }
    .topnav div{
      margin 0;
    }
    .nav{
      margin 15px 0 15px 0;
    }
    header{
      width 100%;
    }
    #logo{
      display none;
    }
  }
</style>
