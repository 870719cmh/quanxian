<template>
  <div id="newUser">
    <!-- Form -->
    <el-button  @click="dialogFormVisible = true" type="text" size="small">修改</el-button>

    <el-dialog title="修改用户信息 " :visible.sync="dialogFormVisible" style="margin-left:30%;">
        <P>用户名：*****</P>
      <el-form :model="form" style="margin-left:-10%;margin-right:10%" >
        <!-- <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item> -->
      
         <el-form-item label="手机" :label-width="formLabelWidth" style="margin-left: 0px;margin-bottom: 25px">
          <el-input v-model="form.phone" autocomplete="off" style="width: 350px;margin-left: -20px;"></el-input>
        </el-form-item>
         <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off" style="width: 350px;margin-left: -20px;"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择用户角色" style="width: 200px;margin-left: -20px;">
            <el-option label="角色1" value="管理员"></el-option>
            <el-option label="角色2" value="老板"></el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="组织机构" :label-width="formLabelWidth">
          <el-select v-model="form.organization" placeholder="请选择机构" style="width: 200px;margin-left: -20px;">
            <el-option label="机构1" value="重庆****公司"></el-option>
            <el-option label="机构2" value="永川***公司"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        organization: "",
        phone: "",
        delivery: false,
        email: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>

<style scoped>
.el-input{
  margin-left: 0px;

}



</style>