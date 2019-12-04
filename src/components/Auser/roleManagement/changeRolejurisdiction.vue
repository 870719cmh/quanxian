<template>
<div id="changeRolejurisdiction">
    <el-button @click="drawer = true" type="text" size="small" style="margin-left: 16px;"> 修改</el-button>
    <el-drawer title="修改角色" :visible.sync="drawer" :direction="direction" :before-close="handleClose" style="margin-top:5%">
    <p style=" color: #000;margin-left:30px">描  述 ：
         <el-input style=" width:300px;  height:12px;margin-bottom:50px;" value="description" v-model=" description"></el-input>
         </p>
          <p style=" color: #000;margin-left:30px">昵  称 ：
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
import jurisdiction from '@/components/Auser/roleManagement/jurisdiction'
export default {
     components: {
   jurisdiction,
  },
     data() {
      return {
        drawer: false,
        direction: 'rtl',
    
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>

<style>


</style>