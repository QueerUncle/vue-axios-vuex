/**
 *  2017/12/12  lize
 */
import {Ax} from './ajax.js'
import apis from './config.js'

let api = {};

api.aggregatorRes=function(obj,fn){
  let ax=new Ax(apis.aggregator.res,'GET')
  ax.ajaxfn(obj).then(e =>{if(fn){fn(e)}})
}
api.aggregatorFilter=function(obj,fn){
  let ax=new Ax(apis.aggregator.filter,'POST')
  ax.ajaxfn(obj).then(e =>{if(fn){fn(e)}})
}
api.getLib=(obj,fn)=>{
  let ax=new Ax(apis.libs,'get')
  ax.ajaxfn(obj).then(e =>{if(fn){fn(e)}})
}
api.updateLib=function(obj,fn){
  let ax=new Ax(apis.lib,'PUT')
  ax.ajaxfn(obj).then(e =>{if(fn){fn(e)}})
}
api.deleteLib=function(id,fn){
  let ax=new Ax(apis.lib,'delete')
  ax.ajaxfn(id).then(e =>{if(fn){fn(e)}})
}
api.publishResource=function(obj,fn){
  let ax=new Ax(apis.resource.publish,'POST')
  ax.ajaxfn(obj).then(e =>{if(fn){fn(e)}})
}

export default api
