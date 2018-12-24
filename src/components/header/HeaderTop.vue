<template>
  <header>
    <div id="logo"><a href="/"></a></div>
    <nav class="topnav" id="topnav">
      <div :class="{topnav_current:isCurrent('/home')}" @click="goto('/home')">
        <span>网站首页</span>
      </div >
      <div :class="{topnav_current:isCurrent('/article')}" @click="goto('/article')">
        <span>文章专栏</span>
      </div>
      <div :class="{topnav_current:isCurrent('/resource')}" @click="goto('/resource')">
        <span>资源分享</span>
      </div>
    </nav>
  </header>
</template>

<script>

  export default {
    methods:{
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style>
  { margin: 0; padding: 0 }
  ul { list-style: none; }
  a:link, a:visited {text-decoration: none;}
  a:hover{  color: #5FB878;  }

  header { width: 1000px; margin: auto; height: 80px; position: relative; overflow: hidden }
  #logo a { width: 260px; height: 60px; margin: 10px 0 0 0; position: absolute; background: url(../../../static/images/logo_text.png) no-repeat; display: block }
  nav { float: right; width: 100%; margin: 30px 0 0 0; text-align: right }
  nav div { position: relative; display: inline-block; font-size: 18px; font-family: "微软雅黑", Arial, Helvetica, sans-serif; }
  nav div:hover { text-decoration: none }
  .topnav div { margin: 0 5px; padding: 0 8px; }
  .topnav div span{display: block; }
  .topnav_current { color: #e15782; }
</style>
