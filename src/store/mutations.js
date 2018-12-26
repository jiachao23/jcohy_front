/*
vuex 的mutations 模块
 */
import {
  RECEIVE_NOTICES,RECEIVE_CATEGORIES,RECEIVE_TAGS,RECEIVE_LINKS,RECEIVE_RESOURCES,RECEIVE_BLOG
} from './mutation-types'
export default {
  [RECEIVE_NOTICES](state,{notices}){
    state.notices = notices
  },
  [RECEIVE_CATEGORIES](state,{categories}){
    state.categories = categories
  },
  [RECEIVE_TAGS](state,{tags}){
    state.tags = tags
  },
  [RECEIVE_LINKS](state,{links}){
    state.links = links
  },
  [RECEIVE_RESOURCES](state,{resources}){
    state.resources = resources
  },
  [RECEIVE_BLOG](state,{blogs}){
    state.blogs = blogs
  }
}
