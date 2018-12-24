<template>

  <div class="blog-main-left" style="margin-bottom: 15px">
    <div class="layui-carousel" id="banner">
      <div carousel-item="">
        <el-carousel>
          <el-carousel-item v-for="(item,index) in imgList" :key="index" class="banner">
            <img v-bind:src="item.url">
            <h3>{{ item.title }}</h3>
          </el-carousel-item>
        </el-carousel>
        <!--<div><img src="${ctx!}/static/images/blog/banner1.jpg" class="banner"></div>-->
        <!--<div><img src="${ctx!}/static/images/blog/banner2.jpg" class="banner"></div>-->
        <!--<div><img src="${ctx!}/static/images/blog/banner3.jpg" class="banner"></div>-->
      </div>
    </div>
  </div>

  <!--<div class="block">-->
    <!--<span class="demonstration"></span>-->
    <!--<el-carousel height="150px">-->
      <!--<el-carousel-item v-for="(item,index) in imgList" :key="index">-->
        <!--<img v-bind:src="item.url">-->
        <!--<h3>{{ item.title }}</h3>-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->
  <!--</div>-->
</template>

<script>
  import Vue from 'vue'
  import 'element-ui/lib/theme-chalk/index.css'
  import ElementUI from 'element-ui'
  Vue.use(ElementUI)
  export default {
    data(){
      return{
        imgList:[
          {
            url:require('../../static/images/banner/banner1.jpg'),
            title:'banner1'
          },
          {
            url:require('../../static/images/banner/banner2.jpg'),
            title:'banner2'
          },
          {
            url:require('../../static/images/banner/banner3.jpg'),
            title:'banner4'
          },
        ]
      }
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

</style>
