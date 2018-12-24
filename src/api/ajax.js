
import axios from './ajax'

export default function ajax(url='',data={},headers={},method='GET') {

  return new Promise(function (resolve,reject) {
    let promise
    if(method === 'GET'){
      //拼接字符串
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' +data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?'+dataStr
      }
      promise = axios.get(url,headers)
    }else{
      promise = axios.post(url,data,headers)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error =>{
      reject(error)
    })
  })

}