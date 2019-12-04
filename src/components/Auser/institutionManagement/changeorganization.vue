<template>
  <div id="neworganization">
    <!-- Form -->
    <el-button  @click="dialogFormVisible = true" type="text" size="small">修改</el-button>

    <el-dialog title="修改" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="机构名称" :label-width="formLabelWidth">
          <el-input v-model="form.organizationName" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="机构代码" :label-width="formLabelWidth">
          <el-input v-model="form.organizationCode" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.location" autocomplete="off"></el-input>
        </el-form-item>

         <el-form-item label="负责人" :label-width="formLabelWidth">
          <el-input v-model="form.principal" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
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
        organizationName: "",
        organizationCode: "",
        organization: "",
        location: "",
        principal: "",
        phone:""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>

<style scoped>

</style>