<template>

</template>


<script>
  import marked from 'marked'
  import hljs from '../../../static/js/highlight.min.js'
  import range from '../../../static/js/rangeFn.js'
  /*引入reset文件*/
  import "../../../static/css/mk/reset";
  /*引入github的markdown样式文件*/
  import "../../../static/css/mk/github-markdown.css";
  /*引入atom的代码高亮样式文件*/
  import "../../../static/css/mk/atom-one-dark.min.css";
  export default {
    props: ['value'],
    data() {
      return {
        defaultData:'preview'
      }
    },
    methods: {
      changeData(value, render) {
        console.log(render);

      // imgAdd(pos, $file) {
      //   let that = this
      //   let formdata = new FormData();
      //   // formdata.append('image', $file);
      //
      //   // upload(formdata).then(data => {
      //   //   // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
      //   //   if (data.code == 0) {
      //   //
      //   //     that.$refs.md.$img2Url(pos, data.data.url);
      //   //   } else {
      //   //     that.$message({message: data.msg, type: 'error', showClose: true})
      //   //   }
      //   //
      //   // }).catch(err => {
      //   //   that.$message({message: err, type: 'error', showClose: true});
      //   // })
      }
    },
    components: {
      mavonEditor
    }
  }
</script>
<style scoped>
  .me-editor {
    z-index: 6 !important;
  }

  .v-note-wrapper.fullscreen {
    top: 60px !important
  }
</style>
