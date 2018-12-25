<template>
  <div class="block" id="banner">
    <div carousel-item="" >
      <el-carousel height="350px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index" class="banner">
          <img v-bind:src="item.url">
          <h3>{{ item.title }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import 'element-ui/lib/theme-chalk/index.css'
  import {Carousel,CarouselItem} from 'element-ui'
  Vue.use(Carousel)
  Vue.use(CarouselItem)
  export default {
    data(){
      return{
        imgList:[
          {
            url:require('../../../static/images/banner/banner1.jpg'),
            title:'banner1'
          },
          {
            url:require('../../../static/images/banner/banner2.jpg'),
            title:'banner2'
          },
          {
            url:require('../../../static/images/banner/banner3.jpg'),
            title:'banner4'
          },
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .blog-main-left {
    width: 100%;
    float: left;
  }
  @media (min-width: 992px) {
    .blog-main > .blog-main-left {
      width: 70%;
    }
  }
  img{
    width:100%;
    height :100%;
  }


</style>
