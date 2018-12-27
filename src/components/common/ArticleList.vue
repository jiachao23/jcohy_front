<template>
  <div>
    <div v-for="(blog,index) in blogs" :key="index">
    <div class="article shadow" @click="$router.push('/article/view/'+blog.id)">
      <div class="article-left">
        <img src="../../../static/images/banner/01.jpg"  />
      </div>
      <div class="article-right">
        <div class="article-title">
          <router-link :to="'/article/view/'+blog.id" class="link-title">
            {{blog.title}}
          </router-link>
          <!--<a ></a>-->
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
  </div>
</template>

<script>
  export default {
    props:['blogs','index'],
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
