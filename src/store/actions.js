/*
vuex 的actions 模块
 */
import {
  reqNotices,reqCategories,reqTags,reqLinks,reqResources,reqBlogs,reqTimeLines
} from '../api'
import {
  RECEIVE_NOTICES,RECEIVE_CATEGORIES,RECEIVE_TAGS,RECEIVE_LINKS,RECEIVE_RESOURCES,RECEIVE_BLOG,RECEIVE_TIMELINES
} from './mutation-types'
export default {

 async getNotices({commit}){
   const result = await reqNotices()
   commit(RECEIVE_NOTICES,{notices: result.data})
 },
  async getCategories({commit}){
    const result = await reqCategories()
    commit(RECEIVE_CATEGORIES,{categories: result.data})
  },
  async getTags({commit}){
    const result = await reqTags()
    commit(RECEIVE_TAGS,{tags: result.data})
  },
  async getLinks({commit}){
    const result = await reqLinks()
    commit(RECEIVE_LINKS,{links: result.data})
  },
  async getResources({commit}){
    const result = await reqResources()
    commit(RECEIVE_RESOURCES,{resources: result.data})
  },
  async getBlogs({commit},type){
    const result = await reqBlogs(type)
    commit(RECEIVE_BLOG,{blogs: result.data,type:type})
  },
  async getTimeLines({commit},type){
    const result = await reqTimeLines()
    commit(RECEIVE_TIMELINES,{timelinks: result.data})
  }
}
