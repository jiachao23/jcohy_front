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
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5,10]"
      :page-size="size"
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import { formatDate } from "../../utils/TimeUtils";
  import {reqBlogByPage} from '../../api/blogs'
  export default {
    created(){
      this.handleBlogList()
    },
    data(){
      return{
        page:1, //初始页
        size:5,    //    每页的数据
        total:100,
        blogs:[]
      }
    },
    filters:{
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    },
    methods:{
      handleSizeChange: function (size) {
        this.size = size;
      },
      handleCurrentChange: function(currentPage){
        this.page = currentPage;
        this.handleBlogList()
      },
      async handleBlogList(){
        const {page,size} = this
        const result =await reqBlogByPage({page,size})
        this.blogs = result.data
        this.total = result.total
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-pagination{
    margin 30px
  }
</style>
