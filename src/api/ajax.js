/*
* ajax请求函数模块
* */
import axios from 'axios'
export default function ajax(url,data={},type='GET') {
  return new Promise(function (resolve,reject) {
    //执行异步ajax请求
    let promise
    if(type === 'GET'){
      //准备url query参数数据
      let dataStr = ''  //数据拼接字符串
      Object.keys(data).forEach(key =>{
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
      }
      promise = axios.get(url)
    }else{
      //发送post请求
      promise = axios.post(url,data)
    }
    promise.then(function (response) {
      //成功的回调
      resolve(response.data)
    })
      .catch(function (error) {
        //失败的回调
        reject(error)
      })

  })


}
