<template>
  <div id="neworganization">
    <!-- Form -->
    <el-button plain @click="dialogFormVisible = true" type="primary"><i class="el-icon-plus" style=" margin-left:-10px"></i><span>新增机构</span></el-button>

    <el-dialog title="新增组织机构" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="机构名称" :label-width="formLabelWidth">
          <el-input v-model="form.displayname" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="机构编号" :label-width="formLabelWidth">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父级ID" :label-width="formLabelWidth">
          <el-input v-model="form.parentId" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.site" autocomplete="off"></el-input>
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
        <el-button type="primary" @click="cancelReport(form)">确 定</el-button>
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
        displayname: "",
        code: "",
        description: "",
        parentId: "",
        site:"",
        principal: "",
        phone:""
      },
      formLabelWidth: "120px"
    };
  },
  methods:{
    //新建组织机构
    cancelReport(){
      api.addUnits(this.form.code,this.form.description,this.form.displayname,this.form.parentId).then(Response=>{
        alert(Response.data.message);
        if(Response.data.message=="成功"){
           this.dialogFormVisible = false;
           
        }
      })
    },
    
  }
  
};

</script>

<style scoped>

</style>