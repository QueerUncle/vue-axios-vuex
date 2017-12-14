/**
 *  2017/12/12  lize
 */
let  url='https://res2.china-bim.org/'

if (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'development') {
  
  url='http://106.15.56.216:8787/'
  
}

const basePath=url+'api/resources/v1/magr/'

var userUrl ;

let locationHref = window.location.href;


if(locationHref.indexOf('ticket')>0){
  userUrl = url+"api/user/uaa/v1/user"
}
else{
  userUrl = url+"uaa/v1/user"
}


var apis={
  
  lib:basePath+'lib',
  
  categoryByLibName:basePath+'categoryByLibName',
  
  templates:basePath+'templates',
  template:basePath+'template',
  
  login_user:url+"api/user/uaa/v1/user",
  
  user:userUrl,
  layout:url+"uaa/logout",
  login:url+"uaa/login",
  category:basePath+'category',
  categorys:basePath+'categorys',
  categoryByFullPath:url+"api/resources/v1/magr/categoryByFullPath",
  children:basePath+'category/children',
  other_category:url+"api/resources/v1/magr/category/other/children",
  parent:basePath+'category/parent',
  libs:basePath+'libs',
  lib_template:url+'api/resources/v1/magr/lib/template',
  
  valueSets:{
    valueSets: url+'api/resources/v1/magr/valueSets',
    valueSet:url+'api/resources/v1/magr/valueSet',
    valueSetList:url+'api/resources/v1/magr/queryValueSets',
    
    
    valueSetId:url + 'api/resources/v1/magr/valueSetId'
  },
  
  
  convert:url+'api/conversion/v1/convert',
  
  result:url+'api/conversion/v1/result',
  
  aggregator:{
    res:url+'api/resources/aggregator/home/resources',
    lib:url+'api/resources/aggregator/home/libs',
    filter:url+'api/resources/aggregator/home/filter',
    
  },
  
  resource:{
    add:url+'api/resources/v1/add',
    all:url+'api/resources/v1/all',
    refresh:url+'api/resources/v1/refresh',
    detail:url+'api/resources/v1/detail',
    remove:url+'api/resources/v1/remove',
    update:url+'api/resources/v1/update',
    publish:url+'api/resources/v1/publish',
    revoke:url+'api/resources/v1/revoke',
    comment:url+"api/resources/v1/comment",
    comments:url+"api/resources/v1/comments",
    getAllComments:url+"api/resources/v1/commentManage/commentList",
    deleteComment:url+"api/resources/v1/commentManage",
    commentDetail:url+"api/resources/v1/commentManage/detail",
    queryByCondition:url+"api/resources/v1/queryByCondition",
    recommend:url+"api/resources/v1/recommend",
    query:url+"api/resources/v1/query"
    
  },
  
  tag:{
    tags:url+'api/resources/v1/magr/tags',
    tag:url+'api/resources/v1/magr/tag',
    
    
  },
  resourcePack:{
    toPack:basePath+'toPack',
    removeFromPack:basePath+'removeFromPack'
    
  },
  revitProperty:{
    query:url+'api/resources/revitProperty/query/',
    queryChild:url+'api/resources/revitProperty/queryChild/',
    delete:url+'api/resources/revitProperty/delete/',
    add:url+'api/resources/revitProperty/add',
    update:url+'api/resources/revitProperty/update'
    
  },
  collect:{
    add:url+'api/tracks/v1/collect/add',
    query:url+'api/tracks/v1/collect/queryAll',
    queryByCondition:url+'api/tracks/v1/collect/queryByCondition',
    delete:url+'api/tracks/v1/collect/delete',
    getQueryResStatus:url+'api/tracks/v1/resources/packageAndCollect',
    getQueryBatResStatus:url+'api/tracks/v1/resources/packageAndCollect'
  },
  demand:{
    add:url+'api/tracks/v1/demand/addDemand',
    demandByCondition:url+'api/tracks/v1/demand/queryByCondition',
    addRespond:url+'api/tracks/v1/demand/addRespond',
    queryRespond:url+'api/tracks/v1/demand/queryRespond',
    delete:url+'api/tracks/v1/demand/delete',
    queryAll:url+'api/tracks/v1/demand/all',
    deleteByIds:url+'api/tracks/v1/demand/deleteByIds',
    userAll:url+'api/tracks/v1/demand/queryAll',
  },
  mypack:{
    batchDelete:url+'api/tracks/v1/package/resource',
    addMyResource:url+'api/tracks/v1/package',
    detail:url+'api/tracks/v1/detail',
    simpleDetail:url+'api/tracks/v1/simpleDetail',
    copy: url+'api/tracks/v1/package/copy',
    all:url+'api/tracks/v1/packages',
    delete:url+'api/tracks/v1/package',
    addPack:url+'api/tracks/v1/package/resource',
    copyCbim:url+'api/tracks/v1/package/copy/other'
    
    
  },
  cbimPack:{
    batchDelete:url+'api/resources/v1/magr/package/resource',
    addMyResource:url+'api/resources/v1/magr/package/resource',
    detail:url+'api/resources/v1/magr/package/detail',
    simpleDetail:url+'api/resources/v1/magr/package/simpleDetail',
    all:url+'api/resources/v1/magr/packages',
    delete:url+'api/resources/v1/magr/package',
    addPack:url+'api/resources/v1/magr/package',
    add_where_Pack:url+'api/resources/v1/magr/resources/packageAndCollect',
    search_res_from_package:url+'api/resources/v1/magr/package/resources',
    find_package:url+"api/resources/v1/magr/category/packages"
    
    
  },
  purchase:{
    purchase:url+'api/tracks/v1/resource/purchase',
    category:url+'api/tracks/v1/resource/category',
    
    
  },
  authority:{
    roles:url+"api/user/uaa/v1/magr/roles",
    add:url+"api/user/uaa/v1/magr/role",
    module:url+'api/user/uaa/v1/magr/resource/module_mapping',
    resource:url+'api/user/uaa/v1/magr/resource/resource_mapping',
    lookup_methods_auth:url+"uaa/v1/permission/methods/0",
    lookup_moudel_auth:url+"uaa/v1/permission/labels/0"
    
  },
  userManage:{
    add:url+"api/user/uaa/v1/admin/account",
    all:url+"api/user/uaa/v1/admin/accounts",
    getAllUserRoles:url+"api/user/uaa/v1/admin/account/permissions",
    enterprise:url+"api/user/uaa/v1/admin/account/enterprise",
    find:url+"api/user/uaa/v1/admin/account/find",
    purchase:url+"api/tracks/v1/resource/purchase",
    enterprises:url+"api/user/uaa/v1/enterprises",
    companyBuyRes:url+"api/tracks/v1/resource/purchase/enterprise",
    allocation_resource:url+"api/resources/v1/magr/enterprise/resource",
    permissionlib:url+'api/user/uaa/v1/permission/resources'
    
  },
  count:{
    byRes:url+"api/tracks/v1/statistics/resources",
    byResDown:url+"api/tracks/v1/statistics/resource",
    byCompany:url+"api/tracks/v1/statistics/enterprise",
    byDepartment:url+"api/tracks/v1/statistics/department",
    byOperator:url+"api/tracks/v1/statistics/operator",
    byProject:url+"api/tracks/v1/statistics/project",
    getProjects:url+"api/tracks/v1/statistics/projects",
    getdepartments:url+"api/tracks/v1/statistics/enterprise/department",
    getoperators:url+"api/tracks/v1/statistics/enterprise/department/operator",
    
  },
  
  categoryTree:url+'api/resources/v1/magr/category/tree',
  
  upload:url+'zuul/api/upload/v1/upload',
  
  download:url+'api/download/v1/download',
  
  deletes:url+'api/viewer/v1/remove/',
  
  add_v:url+'api/viewer/v1/add',
  
  add:url+'api/viewer/v1/add'
}



export default apis;
