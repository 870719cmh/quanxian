<template>
<div id="institution">
<userSidebar style="width:10%"/>
  <div class="s2">
    <div style=" display: flex; padding-left: 3%;">
      <searchUser style="width:400px"></searchUser>
      <neworganization class="s2-2"/>
    </div>
    <institutiondetail/>
  </div>
</div> 
</template>

<script>
import userSidebar from "@/components/Auser/userSidebar";
import searchUser from "@/components/Auser/searchUser";
import institutiondetail from "@/components/Auser/institutionManagement/institutiondetail";
import neworganization from "@/components/Auser/institutionManagement/neworganization"
export default {
    components: {
    userSidebar,
   institutiondetail,
   neworganization,
   searchUser,
  }

}
</script>
<style  scoped>
.s2{
  width:75%;
  margin:1% 5%;
}
.s2-2{
float:right;
margin-bottom: 1%;
margin-left:1%;

}

</style>