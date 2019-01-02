<template>
  <blockquote class="layui-elem-quote sitemap layui-breadcrumb shadow" style="visibility: visible">
    <router-link to="/" title="网站首页">网站首页</router-link>
    <span lay-separator="">/</span>
    <router-link to="/articles" title="文章专栏">文章专栏</router-link>
    <span lay-separator="">/</span>
  </blockquote>
</template>

<script>
  export default {
    name: "breadcrumb"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
