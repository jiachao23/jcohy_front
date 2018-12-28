import Vue from 'vue'
import Router from 'vue-router'
import MHome from '../pages/Home/MHome'
import MArticle from '../pages/Article/MArticle'
import MResource from '../pages/Resource/MResource'
import ArticleDetails from '../components/article/ArticleItem'
import Index from '../pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/',
          name:'home',
          component:MHome,
          meta:{
            showHeader:true
          }
        },
        {
          path: '/articles',
          component:MArticle,
          meta:{
            showHeader:true
          }
        },
        {
          path: '/article/view/:id',
          component:ArticleDetails,
          meta:{
            showHeader:true
          }
        },
        {
          path: '/resources',
          component:MResource,
          meta:{
            showHeader:true
          }
        }
      ]
    }
  ]
})
