<template>
  <div class="blog-main-left" v-show="isDetail">
    <div class="shadow"  v-show="isSearch" style="text-align:center;font-size:16px;padding:40px 15px;background:#fff;margin-bottom:15px;">
      未搜索到与【<span style="color: #FF5722;">keywords</span>】有关的文章，随便看看吧！
    </div>
    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
      <legend>文章列表</legend>
    </fieldset>

      <ArticleList v-for="(blog,index) in blogs" :key="index" :index="blog.id" :blog="blog" @click="$router.push('/article/view/'+blog.id)" >
      </ArticleList>
    <div :class="{topnav_current:isCurrent('/article')}" @click="goto('/article')">
      <span>文章专栏</span>
    </div>
  </div>
</template>

<script>
  import ArticleList from '../../components/common/ArticleList'
  export default {
    components:{
      ArticleList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
