/*
  封装API 请求
 */
import ajax from './ajax'

const BASE_URL = '/api'
export const getBanners = () => ajax('')
export const reqNotices = () => ajax(`${BASE_URL}/jcohy/v1/notices`)
