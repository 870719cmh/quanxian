<template>
<div id='userManagement'>
    <div id="d1">
        <el-table :data="signData" border style="width: 100%" 
        header-cell-style="background:#c0d6dbb3">
        <el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="roleName" label="角色"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
         <el-table-column prop="enabled" label="是否激活"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <div class="d1">
              <el-button @click="handleClick(scope.row.id)" type="text" size="small" >删除</el-button>
               <el-button  @click="modification(scope.row.id)" type="text" size="small">修改</el-button> 
              <!-- <changeRolejurisdiction/> -->
            </div>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="修改角色信息 " :visible.sync="dialogFormVisible"  >
      <el-form :model="form" style="margin-right:10%" > 
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" style="width: 350px;"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off" style="width: 350px;"></el-input>
        </el-form-item>
         <el-form-item label="角色" :label-width="formLabelWidth" style="margin-left: 0px;margin-bottom: 25px">
          <el-input v-model="form.roleName" autocomplete="off" style="width: 350px;"></el-input>
        </el-form-item>
         <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.nickname" autocomplete="off" style="width: 350px;"></el-input>
        </el-form-item>
        
        
      </el-form>
      <div slot="footer" class="dialog-footer">
         
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm()">确 定</el-button>
  
      </div>
    </el-dialog>
    </div>
</div>
  
</template>

<script>
import api from "@/API/api"
import changeRolejurisdiction from "@/components/Auser/roleManagement/changeRolejurisdiction";
export default {
  components: {
    changeRolejurisdiction,
  },
    data() {
    return {
       dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          username: '',
          mobile: '',
          email: '',
          // delivery: false,
          // type: [],
    
        },
        formLabelWidth: '120px',
      signData:[],
    };
  },
   mounted() {
     this.getRlose();
   },
  

  methods:{
    //获取全部角色明细
     getRlose(){
     api.getRoles().then(Response=>{
        // if (response.data.data) {
            this.signData = Response.data.data;
            for(var i=0;i<this.signData.length;i++) {
              this.signData[i].createTime = this.signData[i].createTime.replace("T"," ");
              this.signData[i].index = i+1;
              if(this.signData[i].enabled){
                this.signData[i].enabled = "是";

              }else{
                this.signData[i].enabled = "否";
              }
            }
           
     })
   },
   //删除角色
   deleteRoles(id){
     api.deleteRoles(id).then(Response=>{
       alert(Response.data.message)
       this.getRlose()
     })
   },
   //根据id获取角色
   modification(id){
      this.dialogFormVisible = true;
     api.getRole(id).then(Response=>{
         this.form.id=id;
         this.form.description = Response.data.data.description;
         this.form.roleName = Response.data.data.roleName;
         this.form.nickname = Response.data.data.nickname;
     })
   },
   //修改角色
   confirm(){
     api.updateRole(this.form.id,this.form.description,this.form.roleName,this.form.nickname).then(Response=>{
       alert(Response.data.message);
     })
   },

    handleClick(id) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
          this.deleteRoles(id);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  }

</script>

<style scoped>
.d1{
  display:flex;
  
}

</style>