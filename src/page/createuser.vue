<template>
  <div id="userSidebar">
    <userSidebar style="width:10%;" />
    <div style="width:85%">
      <div class="fu">
        <searchUser id="searchUser" />
        <company />
        <div id="tab">
          <el-button style="margin-left:40px" plain type="primary" ><i class="el-icon-search" style=" margin-left:-12px"></i><span>查询</span></el-button>
          <newUser id="newUser"/>
        </div>
      </div>
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
.fu {
  display: flex;
  margin-top: 2%;
  margin-bottom: 1%;
   margin-left:5%;
}
#searchUser {
  padding-left: 3%;
  width:400px;
}
#tab :first-child {
  margin-left: 10px;
 
}
#tab{
   display: flex;
}

</style>