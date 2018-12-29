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

              <!--<textarea v-html="compiledMarkdown"></textarea>-->
              <!--<VueMarkdown :source="blog.content"/>-->
              <markdown
                :mdValuesP="blog.content"
                :fullPageStatusP="false"
                :editStatusP="false"
                :previewStatusP="true"
                :navStatusP="false"
                :icoStatusP="false"
                :parseP="true"
              ></markdown>
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
        <Cards cardType="hasBlockLine" title="分类导航" :datas="tags"/>
        <Cards cardType="leftHorizontal" title="阅读排行" :datas="blogs"/>
        <Cards cardType="leftHorizontal" title="分享排行" :datas="blogs"/>
      </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  // import VueMarkdown from 'marked'
  // import marked from 'marked'
  import markdown from '../../components/markdown/markdown'
  import 'mavon-editor/dist/css/index.css'
  import '../../../static/css/jcohy/detail.css'
  import {reqBlogById} from '../../api/blogs'
  import {mapState} from 'vuex'
  import Cards from '../Cards'
  export default {
    name: "article-details",
    created(){
      this.getArticle()
    },
    components:{
      // VueMarkdown
      markdown,
      Cards
    },
    data(){
      return {
        blog:{},
      }
    },
    computed:{
      ...mapState(['blogs','tags']),
      // ...mapState(['blogs','blog'])
      // compiledMarkdown () {
      //   return marked(this.blog.content, { sanitize: true })
      // }
    },
    watch: {
      '$route': 'getArticle'
    },
    methods:{
      getArticle(){
        let id = this.$route.params.id
        const reslut = reqBlogById(id)
        this.blog = this.blogs.find( x => x.id*1 === id *1)
      },
      childEventHandler:function(res){
        // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
        this.msg=res;
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
