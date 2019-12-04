<template>
  <div>
      <userSidebar style="width:10%"/>
      <div class="d1">
          <div class="d2">
            <searchUser style="width:400px"/>
            <date  style="width:34%;margin-left:5%"/>
            <el-button type="warning" plain style="margin-left:3%;">异常日志</el-button>
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