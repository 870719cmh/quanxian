<template>
<div id="createRole">

    <el-button @click="drawer = true" plain style="margin-left: 16px;" type="primary">
      <i class="el-icon-plus" style=" margin-left:-10px"></i><span>新增角色</span>
    </el-button>
    <el-drawer
      title="新增角色"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose" style="margin-top:5%">
          <p style=" color: #000;margin-left:30px">描述：
         <el-input style=" width:300px;  height:12px;margin-bottom:50px;" value="description" v-model=" description"></el-input>
         </p>
          <p style=" color: #000;margin-left:30px">昵称：
         <el-input style=" width:300px;  height:12px;margin-bottom:50px;" value="nickname" v-model="nickname"></el-input>
         </p>
          <p style=" color: #000;margin-left:30px">角色名称：
         <el-input style=" width:300px;  height:12px;margin-bottom:50px;" value="roleName" v-model="roleName"></el-input>
         </p> 
          
        <el-button class="btn" type="primary" native-type="submit" @click="createRole">提交</el-button>
      
  
         <!-- <jurisdiction/> -->

 


    </el-drawer> 
   
</div>
  
</template>

<script>
  import jurisdiction from "@/components/Auser/roleManagement/jurisdiction";
  import api from '@/API/api';
export default {
    components: {
   jurisdiction,
    
  },
     data() {
      return {
        drawer: false,
        direction: 'rtl',
        description:'',
        nickname:'',
        roleName:''
      };
    },


    
    methods: {
      //新增角色
      createRole(){
        api.createRoles(this.description,this.nickname,this.roleName).then(Response=>{
          alert(Response.data.message)
        })
      },

      
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    submitForm(info){
      
    }

}
</script>

<style scoped>
p>input{
 color: #000;

  
}

</style>