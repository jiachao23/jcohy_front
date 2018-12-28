<template>
  <div>
    <TopSection/>
    <div class="blog-body">
      <!-- 这个一般才是真正的主体内容 -->
      <div class="blog-container">
        <blockquote class="layui-elem-quote sitemap layui-breadcrumb shadow">
          <a href="/" title="网站首页">网站首页</a>
          <a><cite>资源分享</cite></a>
        </blockquote>
        <div class="blog-main">
          <div class="child-nav shadow">
            <span class="child-nav-btn child-nav-btn-this">网站导航</span>
            <span class="child-nav-btn">文档分享</span>
            <span class="child-nav-btn">案例分享</span>
          </div>
          <div class="mixed-main" id="pic"></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopSection from '../../components/common/TopSection'
  export default {
    components:{
      TopSection
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
