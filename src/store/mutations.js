/*
vuex 的mutations 模块
 */
import {RECEIVE_NOTICES} from './mutation-types'
export default {
  [RECEIVE_NOTICES](state,{notices}){
    state.notices = notices
  }
}
