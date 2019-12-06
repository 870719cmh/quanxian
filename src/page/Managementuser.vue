<template>
  <div>
    <userSidebar style="width:200px;" />
    <div class="d2">
      <div id="d3">
        <searchUser style="width:400px" />
        <createRole class="d2-2" />
      </div>

      <userManagement />
    </div>
  </div>
</template>

<script>
import userSidebar from "@/components/Auser/userSidebar";
import searchUser from "@/components/Auser/searchUser";
import userManagement from "@/components/Auser/roleManagement/userManagement";
import createRole from "@/components/Auser/roleManagement/createRole";
export default {
  components: {
    userSidebar,
    userManagement,
    createRole,
    searchUser
  }
};
</script>

<style scoped>
.d2 {
  width: 75%;
  padding: 1% 5%;
}
.d2-2 {
  float: right;
  margin-bottom: 1%;
}
#d3 {
  display: flex;
  margin-left: 5%;
}
</style>