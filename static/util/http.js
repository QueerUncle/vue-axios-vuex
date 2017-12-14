/**
 *  2017/12/12  lize
 */

import axios from 'axios'
import qs from 'qs'
import {tmp_token} from './token'

console.log(tmp_token)

//axios配置

axios.defaults.timeout = 5000;

axios.defaults.headers.common['Authorization'] = 'Bearer ' + tmp_token;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

axios.defaults.headers.delete['Content-Type'] = 'application/json;charset=utf-8';

axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.baseURL = 'http://106.15.56.216:8787';

//http request  拦截器

//请求拦截器

axios.interceptors.request.use((confing) =>{
  
  confing.headers.Accept = 'application/json';
  
  return confing
  
},(error) => {
  
  console.log('错误——————请求拦截器',error)
  
  return Promise.reject(error);
  
})

//响应拦截器

axios.interceptors.response.use((res) =>{
  
  console.log(res)
  
  if(res.status !== 200){
    
    console.log('100')
  
    return Promise.reject(error);
    
  }else{
  
    console.log('200')
  
    return res;
    
  }
  
},(error) =>{
  
  console.log('错误——————响应拦截器',error)
  
  return Promise.reject(error);
  
});

export default axios;







