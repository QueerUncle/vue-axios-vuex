/**
 *  2017/12/12  lize
 */
import axios from './http.js'

class Ax {
  
  constructor(url,method,heads){
    
    this.url=url
    
    this.method=method
    
    this.heads=heads || ""
    
  }
  
  ajaxfn(params){
    
    const arr = [];
    
    if(params.libName){
  
      axios.defaults.headers['libName'] = encodeURI(params.libName);

      delete(params.libName);
  
      for(let i in params){
        
        if(params[i] instanceof Array){
      
          arr.push(params[i])
      
        }
    
      }
  
      if(arr.length>0){
    
        params = [];
    
        arr.forEach((i,v) =>{
          
          if(arr.length == 1){
  
            i.forEach((k,y) =>{
    
              params.push(k);
    
            })
            
          }else{
  
            params.push(i);
            
          }
          
        })
    
      }
      
    }
    
    return new Promise((resolve,reject) => {
    
      if (this.method === 'get'|| this.method === 'head') {
      
        axios({
        
          method: this.method,
        
          url: this.url,
        
          params: params,
        
        })
          .then((response) => {
          
            resolve(response);
          
          })
          .catch((error) => {
          
            reject(error)
          
          })
      
      } else if (this.method === 'delete'){
  
        axios({
    
          method: this.method,
    
          url: this.url+'/'+params,
    
        })
          .then((response) => {
      
            resolve(response);
      
          })
          .catch((error) => {
      
            reject(error)
      
          })
        
      } else {
      
        axios({
        
          method: this.method,
        
          url: this.url,
        
          data: params,
        
        })
        .then((response) => {
        
          resolve(response);
        
        })
        .catch((error) => {
        
          reject(error)
        
        })
      
      }
    
    })
    
  }
  
}

export { Ax };
