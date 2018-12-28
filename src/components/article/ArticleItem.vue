<!--suppress ALL -->
<template>
  <div class="blog-body">
    <div class="blog-container">
      <blockquote class="layui-elem-quote sitemap layui-breadcrumb shadow" style="visibility: visible">
        <router-link to="/" title="网站首页">网站首页</router-link>
        <span lay-separator="">/</span>
        <router-link to="/articles" title="文章专栏">文章专栏</router-link>
        <span lay-separator="">/</span>
        <a><cite></cite></a>
      </blockquote>
      <div class="blog-main">
        <div class="blog-main-left">
          <!-- 文章内容（使用Kingeditor富文本编辑器发表的） -->
          <div class="article-detail shadow">
            <div class="article-detail-title">
              {{blog.title}}
            </div>
            <div class="article-detail-info">
              <span>编辑时间：{{blog.createdTime}}</span>
              <span>作者：{{blog.username}}</span>
              <span>浏览量：{{blog.readNum}}</span>
            </div>
            <div class="article-detail-content" id="article-detail-content">

              <textarea style="display: none;">{{blog.content}}</textarea>


            </div>

            <div class="blogerinfo-nickname">
              文章来源出处:<a :href="blog.url" target="_blank" >{{blog.url}}</a>
            </div>

        </div>
        <!-- 评论区域 -->
        <div class="blog-module shadow" style="box-shadow: 0 1px 8px #a6a6a6;">
          <fieldset class="layui-elem-field layui-field-title" style="margin-bottom:0">
            <legend>来说两句吧</legend>
            <div class="layui-field-box">
              <form class="layui-form blog-editor" action="">
                <div class="layui-form-item">
                  <textarea name="editorContent" lay-verify="content" id="remarkEditor" disabled placeholder="暂时不可用" class="layui-textarea layui-hide"></textarea>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-submit="formRemark" lay-filter="formRemark">提交评论</button>
                </div>
              </form>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="blog-main-right">
        <!--右边悬浮 平板或手机设备显示-->
        <div class="category-toggle"><i class="fa fa-chevron-left"></i></div><!--这个div位置不能改，否则需要添加一个div来代替它或者修改样式表-->
        <div class="article-category shadow">
          <div class="article-category-title">分类导航</div>
          <!-- 点击分类后的页面和artile.html页面一样，只是数据是某一类别的 -->
          <a href="javascript:layer.msg(&#39;切换到相应分类&#39;)">${(x.name)!}</a>
        </div>
            <li><i class="fa-li fa fa-hand-o-right"></i><a href="${ctx!}/article/view/${x.id}">${(x.title)!}</a></li>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  // import MarkdownEditor from '@/components/markdown/MarkdownEditor'
  import '../../../static/css/jcohy/detail.css'
  import {reqBlogById} from '../../api/blogs'
  import {mapState} from 'vuex'
  export default {
    name: "article-details",
    created(){
      this.getArticle()
    },
    data(){
      return {
        blog:{}
      }
    },
    computed:{
      ...mapState(['blogs'])
      // ...mapState(['blogs','blog'])
    },
    watch: {
      '$route': 'getArticle'
    },
    methods:{
      getArticle(){
        let id = this.$route.params.id
        const reslut = reqBlogById(id)
        this.blog = this.blogs.find( x => x.id*1 === id *1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
