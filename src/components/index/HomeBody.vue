
<template>
  <!-- 首页主题body，包括顶部的公告，和左右两侧 start -->
    <div class="blog-body">
      <div class="blog-container">
        <div class="blog-main">
          <!-- 公告部分 start -->
          <Notice/>
          <!-- 公告部分 end -->
          <!-- left start -->
          <Left/>
          <!-- left end -->
          <!-- right start-->
          <Right/>
          <!--right end-->

    <div class="clear"></div>
  </div>
  </div>

  </div>
</template>

<script>
  import Right from '../right/RightMain'
  import Left from '../left/LeftMain'
  import Notice from '../common/Notices'
  import '../../../static/css/jcohy/home.css'
  export default {
   components :{
     Right,
     Left,
     Notice
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
