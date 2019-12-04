import Vue from 'vue';
import { createBrotliCompress } from 'zlib';
export default {
   //获取用户明细（查询）
   getUser(currentPag,pageSize,search){
       return Vue.axios.post('auth/auth/v1/find/users?currentPag='+currentPag+'&pageSize='+pageSize+'&search='+search+'&access_token='+localStorage.getItem('access_token'),{
        currentPage: currentPag,
        pageSize:pageSize,
        search: search
       })
   },
   //新建用戶
   createUser(mobile,password,username){
     return Vue.axios.post('auth/auth/v1/register?mobile='+mobile+'&password='+password+'&username='+username+'&access_token='+localStorage.getItem('access_token'),{
      mobile:mobile,
      password:password,
      username:username
    })
   },
   //根据id查询用户信息
   findUser(id){
     return Vue.axios.get('auth/auth/v1/find/user/'+id+'?access_token='+localStorage.getItem('access_token'),{
       id:id
     })
   },
   //修改用户信息
   updateUser(id,email,mobile,username){
     return Vue.axios.put('auth/auth/v1/update/user?id='+id+'&email='+email+'&mobile='+mobile+'&username='+username+'&access_token='+localStorage.getItem('access_token'),{
      id:id,
      email:email,
      mobile:mobile,
      username:username
     })
   },
   //删除用户
   deleteUser(id){
      return Vue.axios.delete('auth/auth/v1/delete/user/'+id+'?access_token='+localStorage.getItem('access_token'),{
        id:id
      })
   },

   //登录
  login(name,password){
    return Vue.axios.post('auth/oauth/token?grant_type=password&username='+name+'&password='+password+'&client_id=client&client_secret=secret&scope=all')
  },

  //退出
  logout(){
    return Vue.axios.post('auth/auth/logout?access_token='+localStorage.getItem('access_token'))
  },

  // 获取所有角色信息列表
  getRoles(){
    return Vue.axios.get('auth/auth/v1/get/roles?access_token='+localStorage.getItem('access_token'))
  },

  //新建角色
  createRoles(description,nickname,roleName){
    return Vue.axios.post('auth/auth/v1/add/role?description='+description+'&nickname='+nickname+'&roleName='+roleName+'&access_token='+localStorage.getItem('access_token'),{
        description:description,
        nickname:nickname,
        roleName:roleName
    })
  },
  //删除角色
  deleteRoles(id){
    return Vue.axios.delete('auth/auth/v1/delete/role/'+id+'?access_token='+localStorage.getItem('access_token'),{
      id:id
    })
  },
  //根据id获取角色
  getRole(id){
    return Vue.axios.get('auth/auth/v1/get/role/'+id+'?access_token='+localStorage.getItem('access_token'),{
      id:id
    })
  },
  //修改角色
  updateRole(description,id,nickname,roleName){
    return Vue.axios.put('auth/auth/v1/update/role?id='+id+'&description='+description+'&nickname='+nickname+'&roleName='+roleName+'&access_token='+localStorage.getItem('access_token'),{
      id:id,
      description:description,
      nickname:nickname,
      roleName:roleName
     })

  },
  //查询所有组织机构
  getUnits(){
    return Vue.axios.get('auth/auth/v1/get/units?access_token='+localStorage.getItem('access_token'))
  },
  //新增组织机构
  addUnits(code,description,displayname,parentId){
    return Vue.axios.post('auth/auth/v1/add/units?code='+code+'&description='+description+'&displayname'+displayname+'&parentId='+parentId+'&access_token='+localStorage.getItem('access_token'),{
      code:code,
      description:description,
      displayname:displayname,
      parentId:parentId
    })
  },

  //重置密码
  revisePass(info){
    return Vue.axios.post('auth/auth/v1/reset/pwd',info)
  }
  
  
  
  

  

}