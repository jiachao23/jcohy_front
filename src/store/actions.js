/*
vuex 的actions 模块
 */
import {reqNotices} from '../api'
import {RECEIVE_NOTICES} from './mutation-types'
export default {

 async getNotices({commit}){
   const result = await reqNotices()
   commit(RECEIVE_NOTICES,{notices: result.data})
 }
}
