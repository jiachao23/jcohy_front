<template>
  <div>
    <div v-for="(blog,index) in blogs" :key="index">
    <div class="article shadow">
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
        <span><i class="fa fa-clock-o"></i> &nbsp;{{blog.publishTime |formatDate}}</span>
        <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;{{blog.username}}</span>
        <span><i class="fa fa-tag"></i>&nbsp;&nbsp;{{blog.tags}}</span>
        <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;&nbsp;&nbsp;{{blog.shareNum}}</span>
        <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;&nbsp;&nbsp;{{blog.readNum}}</span>
      </div>
    </div>
      </div>
  </div>
</template>

<script>
  import { formatDate } from "../../utils/TimeUtils";
  export default {
    props:['blogs','index'],
    filters:{
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
