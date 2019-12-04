<template>
  <div id="detail">
    <div id="d1"> 
        <el-table :data="tableData" border style="width: 100%" 
        header-cell-style="background:#c0d6dbb3">
        <el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column prop="createTime" label="创建日期"></el-table-column>
        <el-table-column prop="organization" label="机构名称"></el-table-column>
        <el-table-column prop="mobile" label="手机"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="accountNonExpired" label="账号是否过期"></el-table-column>
       <el-table-column prop="enabled" label="账号是否启用"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope" >
            <div id="t1">
                 <el-button @click="handleClick(scope.row.id)" type="text" size="small" >删除</el-button>
                 <el-button  @click="modification(scope.row.id)" type="text" size="small">修改</el-button> 
                 <!-- <el-button  @click="resetpasswords = true" type="text" size="small">重置密码</el-button>  -->
            </div>
          </template>
        </el-table-column>
      </el-table>
     
      <el-dialog title="修改用户信息 " :visible.sync="dialogFormVisible"  >
      <el-form :model="form" style="margin-right:10%" > 
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" style="width: 350px;"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off" style="width: 350px;"></el-input>
        </el-form-item>
         <el-form-item label="手机" :label-width="formLabelWidth" style="margin-left: 0px;margin-bottom: 25px">
          <el-input v-model="form.mobile" autocomplete="off" style="width: 350px;"></el-input>
        </el-form-item>
         <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off" style="width: 350px;"></el-input>
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
        
         <el-form-item label="账号不过期" :label-width="formLabelWidth">
                 <el-radio v-model="form.accountNonExpired" label="1">是</el-radio>
                 <el-radio v-model="form.accountNonExpired" label="2">否</el-radio>
        </el-form-item>
         <el-form-item label="激活状态" :label-width="formLabelWidth">
             <el-radio v-model="form.enabled" label="1">是</el-radio>
             <el-radio v-model="form.enabled" label="2">否</el-radio>
        </el-form-item>
         <el-form-item label="手机号码确认" :label-width="formLabelWidth">
            <el-radio v-model="form.mobileNumberConfirmed" label="1">是</el-radio>
            <el-radio v-model="form.mobileNumberConfirmed" label="2">否</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
         
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm()">确 定</el-button>
  
      </div>
    </el-dialog>
    <el-pagination
        class="page"
        small
        background
        :page-size="page_size"
        :current-page="current+1"
        layout="prev, pager, next"
        :total="total"
        @current-change="currentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import changeuser from "@/components/Auser/changeuser"
import api from '@/API/api';
export default {
  name:"",
   components:{
      changeuser
    },

  data() {
    return {
       key: "",
       current: 0,
       page_size: 10,
     
   
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
       tableData: [],
      
    };
  },

   mounted(){
      this.getUser();
     },

  methods:{
    //获取全部用户
    getUser(){
      api.getUser(this.current,this.page_size,this.key).then(Response=>{
          this.tableData = Response.data.data.content;
          for(var i=0;i<this.tableData.length;i++){
            this.tableData[i].createTime = this.tableData[i].createTime.replace("T"," ");
           this.tableData[i].index = i+1;
            if( this.tableData[i].accountNonExpired){
              this.tableData[i].accountNonExpired="否"
            }else{
              this.tableData[i].accountNonExpired="是"
            }
            if( this.tableData[i].enabled){
              this.tableData[i].enabled="否"
            }else{
              this.tableData[i].enabled="是"
            }
          }
      })
    },
    //根据id查询用户信息
     findUser(id){
       api.findUser(id).then(Response=>{
         this.form.id=id;
         this.form.username = Response.data.data.userModel.username;
         this.form.email = Response.data.data.userModel.email;
         this.form.mobile = Response.data.data.userModel.mobile;
       })
     },
     modification(id){
       this.dialogFormVisible = true;
       this.findUser(id);
     },
     //修改用户信息
      updateUser(){
        api.updateUser(this.form.id,this.form.email,this.form.mobile,this.form.username).then(Response=>{
          alert(Response.data.message)
        })
      },
      confirm(){
        this.updateUser();
      },
      //删除用户信息
      deleteUser(id){
        api.deleteUser(id).then(Response=>{
         alert(Response.data.message)
        })
      },
      
    handleClick(id) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteUser(id);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
     //当前页改变
    currentChange(val) {
      this.current = val - 1;
      this.getProjectList();
    },

}
</script>

<style scoped >
#detail {
  width: 100%;
}
#d1{
  margin-left: 2%;
  margin-right: 2%;
  margin-top:0;
}

#pagination a {
  border: 1px solid #000000;
  width: 50px;
  height: 20px;
  float: left;
  margin-left: 10px;
  cursor: pointer;
}
.el-pagination {
  text-align: center;
}
#t1{
  display:flex;
}
#t1 :first-child {
  margin:0 4%;
}
.el-dialog__wrapper{
  margin-left: 10%;
  margin-right: 15%;
}

</style>