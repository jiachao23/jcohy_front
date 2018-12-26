<template>
  <div>
  <div class="shadow"  v-show="isSearch" style="text-align:center;font-size:16px;padding:40px 15px;background:#fff;margin-bottom:15px;">
    未搜索到与【<span style="color: #FF5722;">keywords</span>】有关的文章，随便看看吧！
  </div>
  <div class="article shadow">
    <div class="article-left">
      <img src="../../../static/images/banner/01.jpg"  />
    </div>
    <div class="article-right">
      <div class="article-title">
        <a href="">{{blog.title}}</a>
      </div>
      <div class="article-abstract">
        {{blog.summary}}
      </div>
    </div>
    <div class="clear"></div>
    <div class="article-footer">
      <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
      <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
      <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
      <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
      <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props:['blog','index','isSearch'],
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
