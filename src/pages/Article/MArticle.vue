<template>
  <div class="blog-body">
    <div class="blog-container">
      <Breadcrumb/>
      <div class="blog-main" >
        <div class="blog-main-left">
          <div class="shadow"  v-show="isSearch" style="text-align:center;font-size:16px;padding:40px 15px;background:#fff;margin-bottom:15px;">
            未搜索到与【<span style="color: #FF5722;">keywords</span>】有关的文章，随便看看吧！
          </div>
          <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
            <legend>文章列表</legend>
          </fieldset>

          <ArticleList :blogs = "blogs">
          </ArticleList>
        </div>
        <div class="blog-main-right">
          <div class="blog-search">
            <form class="layui-form" action="">
              <div class="layui-form-item">
                <div class="search-keywords  shadow">
                  <input type="text" name="keywords" lay-verify="required" placeholder="输入关键词搜索" autocomplete="off" class="layui-input layui-disabled" >
                </div>
                <div class="search-submit  shadow">
                  <a class="search-btn" lay-submit="formSearch" lay-filter="formSearch" onclick="javascript:layer.msg('此功能暂不可用')"><i class="fa fa-search"></i></a>
                </div>
              </div>
            </form>
          </div>
          <Cards cardType="leftHorizontal" title="热文排行" :datas="hotblogs"/>
          <Cards cardType="leftHorizontal" title="分享排行" :datas="shareblogs"/>
          <div class="category-toggle"><i class="fa fa-chevron-left"></i></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '@/components/common/Breadcrumb'
  import '../../../static/css/jcohy/article.css'
  import ArticleList from '@/components/common/ArticleList'
  import {mapState} from 'vuex'
  import Cards from '../../components/Cards'
  export default {
    data(){
      return{
        isSearch:false,
      }
    },
    computed:{
      ...mapState(['hotblogs','shareblogs','blogs']),
    },
    methods:{
      goto(path) {
        this.$router.replace(path)
      }
    },
    components:{
      Breadcrumb,
      ArticleList,
      Cards
    },
    watch: {
      $route(to) {

      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
