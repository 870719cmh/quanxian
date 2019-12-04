<template>
  <div id="newUser">
    <!-- Form -->
    <el-button plain @click="dialogFormVisible = true" type="primary"  > <i class="el-icon-plus" style=" margin-left:-10px"></i><span>新增用户</span></el-button>
    <el-dialog title="新增用户信息" :visible.sync="dialogFormVisible" style="margin-left:30%;">
      <el-form :model="form" style="margin-left:-10%;margin-right:10%" >
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off" style="width: 350px;" prop='username'></el-input>
        </el-form-item>
         <el-form-item class="c1" label="手  机 " :label-width="formLabelWidth">
          <el-input v-model="form.mobile" autocomplete="off" style="width: 350px;margin-left: 20px;" prop='mobile'></el-input>
        </el-form-item>
         <!-- <el-form-item class="c1" label="邮  箱 " :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off" style="width: 350px;margin-left: 20px;" prop='email'></el-input>
        </el-form-item> -->
         <el-form-item class="c1" label="密  码 " :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" style="width: 350px;margin-left: 20px;"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择用户角色"  style="width: 200px;">
            <el-option label="角色1" value="管理员"></el-option>
            <el-option label="角色2" value="老板"></el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="组织机构" :label-width="formLabelWidth">
          <el-select v-model="form.organization" placeholder="请选择机构"  style="width: 200px;">
            <el-option label="机构1" value="重庆****公司"></el-option>
            <el-option label="机构2" value="永川***公司"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"  @click="cancelReport(form)">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import api from '@/API/api.js';
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
   
      form: {
        username: "",
        mobile: "",
        organization: "",
        password:"",
        // delivery: false,
        email: [],
        region: "",
        organization: ""
      },
      formLabelWidth: "120px"
    };
  },
  rules: {
    email:[{ required: true,message: '请输入邮箱地址', trigger: 'blur'}],
    mobile:[{required: true,message: '请输入电话', trigger: 'blur'}],
    username:[{required: true,message: '请输入电话', trigger: 'blur'}]
  },

methods:{
 test(){
   api.test().then(response=>{
     response.data
   })
 },
 //提交
 cancelReport(){
    api.createUser(this.form.mobile,this.form.password,this.form.username).then(response=>{
      alert(response.data.message);
      if(response.data.message=="成功"){
       this.dialogFormVisible = false;
      //自动刷新
      this.$router.go(0);
   
      };
   })

 }
}

};
</script>

<style scoped>
.el-form-item{
  width:10%;
}

.c1{
  margin-right: 50px;
}
.el-icon-plus{
  margin-left: 200px;
}


</style>