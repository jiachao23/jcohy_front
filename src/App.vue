<template>
  <div id="app">
    <router-view/>
    <!--分享窗体-->
    <div class="blog-share layui-hide">
      <div class="blog-share-body">
        <div style="width: 200px;height:100%;">
          <div class="bdsharebuttonbox">
            <a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
            <a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
            <a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
            <a class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
          </div>
        </div>
      </div>
    </div>

    <BaseFooter/>
  </div>
</template>
<script>
import HeaderTop from './pages/HeaderTop'
import BaseFooter from './components/common/BaseFooter'
// import {} from '../static/js/global'
export default {
 components:{
   HeaderTop,
   BaseFooter
 },
  mounted(){
    this.$store.dispatch('getNotices')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getTags')
    this.$store.dispatch('getLinks')
    this.$store.dispatch('getResources')
    this.$store.dispatch('getBlogs',"hot")
    this.$store.dispatch('getBlogs',"share")
    this.$store.dispatch('getTimeLines')
    this.fixbar()
  },
  methods:{
    fixbar(){
      window.layui.use(['util'], function(){
        let util = layui.util,
          $ = layui.jquery;
        util.fixbar({
          bar1: '&#xe641;',
          click: function (type) {
            if (type === 'bar1') {
              let sear = new RegExp('layui-hide');
              if (sear.test($('.blog-share').attr('class'))) {
                shareIn();//显示百度分享
              } else {
                shareOut();
              }
            }
          }
        });
      });
    }
  }
}
</script>
<style>
</style>
