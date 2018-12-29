<template>
  <div class="blog-module shadow">
    <div class="blog-module-title">{{title}}</div>
    <!--水平靠左-->
    <ul class="fa-ul blog-module-ul"  v-if="cardType === 'leftHorizontal'">
      <li v-for="(data,index) in datas" :key="index"><i class="fa-li fa fa-hand-o-right" ></i>
        <router-link :to="'/article/view/'+data.id">{{data.title?data.title:data.name}}</router-link>
      </li>
    </ul>
    <!--水平颜色变换-->
    <ul class="blogroll"  v-if="cardType === 'vertical'">
      <li v-for="(data,index) in datas" :key="index">
        <router-link :to="data.url" target="_blank"  v-if="insideJump">
          <span class="layui-badge" :class="itemBgColor(data.id)">{{data.name?data.name:data.title}}</span>
        </router-link>
        <a :href="data.url" target="_blank"  v-else>
          <span class="layui-badge" :class="itemBgColor(data.id)">{{data.name?data.name:data.title}}</span>
        </a>
      </li>
    </ul>

    <!--key-value形式，key在上，value在下-->
    <dl class="footprint" v-if="cardType === 'asideHorizontal'" v-for="(data,index) in datas" :key="index">
      <dt>{{data.displayDate}}</dt>
      <dd>{{data.displayName}}</dd>
    </dl>

    <!--左右结构，块状带表格线-->
    <div class="category-toggle"><i class="fa fa-chevron-left" ></i></div><!--这个div位置不能改，否则需要添加一个div来代替它或者修改样式表-->
      <div class="article-category shadow"  v-if="cardType === 'hasBlockLine'">
        <div class="article-category-title">{{title}}</div>
        <!-- 点击分类后的页面和artile.html页面一样，只是数据是某一类别的 -->
        <a href="javascript:layer.msg(&#39;切换到相应分类&#39;)" v-for="(data,index) in datas" :key="index">{{data.name}}</a>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cards",
    props:['cardType','title','datas','insideJump'],
    data(){
      return {

      }
    },
    methods:{
      itemBgColor(id){
        if(id % 3 === 1){
          return 'layui-bg-green'
        }else if( id % 3 ===2){
          return 'layui-bg-orange'
        }else{
          return 'layui-bg-blue'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
