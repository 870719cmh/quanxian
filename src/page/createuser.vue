<template>
  <div id="userSidebar">
    <userSidebar style="width:200px"/>
    <div style="width:85%">

      <el-row id="fu">
  <el-col :span="6"><div class="grid-content bg-purple"><searchUser id="searchUser" /></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"> <company /></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"><el-button id="el-bitton" plain type="primary" ><i class="el-icon-search"></i><span id="span">查询</span></el-button></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"> <newUser id="newUser"/></div></el-col>
</el-row>


      
      <userdetail />
    </div>
  </div>
</template>

<script>
import userSidebar from "@/components/Auser/userSidebar";
import searchUser from "@/components/Auser/searchUser";
import company from "@/components/Auser/company";
import userdetail from "@/components/Auser/userdetail";
import newUser from "@/components/Auser/newUser"
export default {
  components: {
    userSidebar,
    company,
    searchUser,
    userdetail,
    newUser
  }

   
};
</script>

<style scoped>

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
 
  .grid-content {
    border-radius: 4px;
    /* min-height:20%; */
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


#fu {
  display: flex;
  margin-top: 2%;
  margin-bottom: 1%;
   margin-left:5%;
}
#searchUser {
  padding-left: 3%;

}



</style>