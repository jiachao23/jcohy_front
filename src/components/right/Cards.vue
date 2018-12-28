<template>
  <div class="blog-module shadow">
    <div class="blog-module-title">{{title}}</div>
    <ul class="fa-ul blog-module-ul"  v-if="cardType === 'leftHorizontal'">
      <li v-for="(data,index) in datas" :key="index"><i class="fa-li fa fa-hand-o-right" ></i>
        <router-link :to="'/article/view/'+data.id">{{data.title?data.title:data.name}}</router-link>
      </li>
    </ul>

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
    <dl class="footprint" v-if="cardType === 'asideHorizontal'" v-for="(data,index) in datas" :key="index">
      <dt>{{data.displayDate}}</dt>
      <dd>{{data.displayName}}</dd>
    </dl>
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
