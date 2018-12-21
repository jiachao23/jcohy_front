import Vue from 'vue'
import Router from 'vue-router'
import MHome from '../pages/Home/MHome'
import MArticle from '../pages/Article/MArticle'
import MProfile from '../pages/Profile/MProfile'
import MResource from '../pages/Resource/MResource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'MHome',
      component: MHome,
      meta:{
        showHeader:true
      }
    },
    {
      path: '/article',
      name:'MArticle',
      component: MArticle,
      meta:{
        showHeader:true
      }
    },
    {
      path: '/resource',
      name:'MResource',
      component: MResource,
      meta:{
        showHeader:true
      }
    },
    {
      path: '/profile',
      name:'MProfile',
      component: MProfile,
      meta:{
        showHeader:true
      }
    }
  ]
})
