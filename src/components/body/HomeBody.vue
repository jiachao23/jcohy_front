
<template>
  <!-- 首页主题body，包括顶部的公告，和左右两侧 start -->
  <div>
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
  </div>
</template>

<script>
  import Right from '../right/RightMain'
  import Left from '../left/LeftMain'
  import Notice from './Notices'
  export default {
   components :{
     Right,
     Left,
     Notice
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .blog-main {
    margin-top: 15px;
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .blog-main > .home-tips {
    padding: 10px 10px;
    background: #fff;
    font-size: 13px;
    margin-bottom: 15px;
  }

  .blog-main > .home-tips > i {
    color: #009688;
    font-size: 15px;
  }

  .blog-main > .home-tips > .home-tips-container {
    margin-left: 20px;
    height: 20px;
    overflow: hidden;
  }

  .blog-main > .home-tips > .home-tips-container > span {
    display: block;
  }

  .blog-main > .blog-main-left {
    width: 100%;
    float: left;
  }

  .blog-main > .blog-main-right, .blog-main-center{
    width: 100%;
  }

  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .blog-container {
      width: 738px;
      margin: 0 auto;
    }

    .blog-main > .blog-main-right,.blog-main-center > .blog-module {
      width: 45%;
      /*margin-bottom: 15px;*/
    }

    .blog-main > .blog-main-right,.blog-main-center > .blog-module:nth-child(odd) {
      float: left;
      clear: left;
    }

    .blog-main > .blog-main-right,.blog-main-center > .blog-module:nth-child(odd).blog-module:last-child {
      width: auto;
      float: none;
      clear: both;
    }

    .blog-main > .blog-main-right,.blog-main-center > .blog-module:nth-child(even) {
      float: right;
      clear: right;
    }
  }

  /* 中等屏幕（桌面显示器，大于等于 992px） */
  @media (min-width: 992px) {
    .blog-container {
      width: 962px;
    }

    .blog-main > .blog-main-left {
      width: 70%;
    }

    .blog-main > .blog-main-center {
      width: 100%;
    }

    .blog-main > .blog-main-right {
      width:  29%;
    }

    .blog-main > .blog-main-right > .blog-module {
      width: auto;
      float: none !important;
    }
  }

  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media (min-width: 1200px) {
    .blog-container {
      width: 1200px;
    }
  }
</style>
