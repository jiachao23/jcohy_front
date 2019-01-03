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
                  <input type="text" name="keywords" lay-verify="required" placeholder="输入关键词搜索" autocomplete="off" class="layui-input">
                </div>
                <div class="search-submit  shadow">
                  <a class="search-btn" lay-submit="formSearch" lay-filter="formSearch"><i class="fa fa-search"></i></a>
                </div>
              </div>
            </form>
          </div>
          <Cards cardType="leftHorizontal" title="热文排行" :datas="hotblogs"/>
          <Cards cardType="leftHorizontal" title="分享排行" :datas="shareblogs"/>
          <!--<div class="blog-module shadow">-->
            <!--<div class="blog-module-title">随便看看</div>-->
            <!--<ul class="fa-ul blog-module-ul">-->
              <!--<li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（一）（HTML篇）</a></li>-->
              <!--<li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">ASP.NET MVC制作404跳转（非302和200）</a></li>-->
              <!--<li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">ASP.NET MVC 防范跨站请求伪造（CSRF）</a></li>-->
              <!--<li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（三）（JS篇）</a></li>-->
              <!--<li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a></li>-->
              <!--<li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（二）（CSS篇）</a></li>-->
              <!--<li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">写了个Win10风格快捷菜单！</a></li>-->
              <!--<li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">常用正则表达式</a></li>-->
            <!--</ul>-->
          <!--</div>-->
          <!--右边悬浮 平板或手机设备显示-->
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
      ...mapState(['hotblogs','shareblogs']),
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
