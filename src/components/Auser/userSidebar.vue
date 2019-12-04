<template >
  <div class="app" >
    <div>
      <el-menu style="background:rgba(255,0,0,0);border:none">
        <el-menu-item index="1" @click="Auser">
         <i class="el-icon-s-custom"></i><span slot="title" >用户管理</span>
      </el-menu-item>
        <el-menu-item index="2"  @click="Managementuser">
        <i class='el-icon-s-check'></i><span slot="title">角色管理</span>
      </el-menu-item>
        <el-menu-item index="3"  @click="Ainstitution" >
       <i class="el-icon-s-flag"></i> <span slot="title">机构管理</span>
      </el-menu-item>
       <el-menu-item index="4" @click="Alog">
         <i class='el-icon-s-opportunity'></i><span slot="title" >日志管理</span>
      </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    Auser() {
      this.$router.push({ name: "Auser"  });
    },
    Managementuser() {
      this.$router.push({ name: "Managementuser"  });
    },
    Ainstitution(){
      this.$router.push({ name: "Ainstitution" });
    },
    Alog(){
      this.$router.push({ name: "Alog" });
    },
  }
};
</script>

<style scoped>
.app{
    height:100%;
    background-color:#c6d4d678;
    /* background-image: linear-gradient(to right,#041b2b4d , #2b3e4238,#0a141678); */
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
}
span{
    color: #48576a;
font-size:16px;
font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}

.el-menu-item:focus, .el-menu-item:hover{
    background-color:#c0d6dbb3
}
</style>