<template>
  <div>
      <userSidebar style="width:200px"/>
      <div class="d1">
          <div class="d2">
            <searchUser style="width:20%"/>
            <date  style="margin-left:5%"/>
            <el-button type="warning" plain style="margin-left:3%;height:30%;width:100px;">异常日志</el-button>
          </div>
        <logdetail/>
      </div>
  </div>
</template>

<script>
import userSidebar from "@/components/Auser/userSidebar";
import searchUser from "@/components/Auser/searchUser";
import date from "@/components/Auser/date";
import logdetail from "@/components/Auser/log/logdetail";
export default {
    components:{
        userSidebar,
        date,
        searchUser,
        logdetail
    }
}
</script>

<style scoped>
.d1{
    width:85%;
}
.d2{
    display:flex;
    margin-left:6%;
    margin-top:2%;
    margin-bottom: 1%;
    
}


</style>