<template>
  <div class="home-tips shadow">
    <i style="float:left;line-height:17px;" class="fa fa-volume-up"></i>
    <div class="home-tips-container" v-for="(notice,index) in notices" :key="index">
      <span style="color: red">{{notice.content}}<a :href="notice.url" target="_blank" style="color:#01AAED">&nbsp;&nbsp;点我前往</a></span>
      <span style="color: #009688">{{notice.content}}</span>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['notices'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-tips {
    padding: 10px 10px;
    background: #fff;
    font-size: 13px;
    margin-bottom: 15px;
  }
  .home-tips > i {
    color: #009688;
    font-size: 15px;
  }
  .home-tips > .home-tips-container {
    margin-left: 20px;
    height: 20px;
    overflow: hidden;
  }
  .home-tips > .home-tips-container > span {
    display: block;
  }
</style>
