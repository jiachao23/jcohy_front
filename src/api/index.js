/*
  封装API 请求
 */
import ajax from './ajax'

const BASE_URL = '/api'
export const getBanners = () => ajax('')
export const reqNotices = () => ajax(`${BASE_URL}/jcohy/v1/notices`)
export const reqCategories = () => ajax(`${BASE_URL}/jcohy/v1/categories`)
export const reqTags = () => ajax(`${BASE_URL}/jcohy/v1/tags`)
export const reqResources = () => ajax(`${BASE_URL}/jcohy/v1/resources`)
export const reqLinks = () => ajax(`${BASE_URL}/jcohy/v1/links`)
export const reqBlogs = type => ajax(`${BASE_URL}/jcohy/v1/blogs/`+type)

