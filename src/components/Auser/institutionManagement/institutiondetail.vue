<template>
  <div id="institutiondetail">
       <div id="d1">
        <el-table :data="tableData" border style="width: 100%" 
        header-cell-style="background:#c0d6dbb3">
        <el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="displayname" label="机构名称"></el-table-column>
        <el-table-column prop="code" label="机构代码"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
         <el-table-column prop="parentId" label="父级ID"></el-table-column>
          <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column prop="location" label="机构地址"></el-table-column>
        <el-table-column prop="principal" label="负责人"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
       
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <div class="s2">
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              <!-- <changeorganization/> -->
              <el-button  @click="dialogFormVisible = true" type="text" size="small">修改</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
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
  </div>
</template>

<script>
import api from '@/API/api';
import changeorganization from "@/components/Auser/institutionManagement/changeorganization";
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
      formLabelWidth: "120px",
      
      tableData: [],
    };
  },

 mounted(){
      this.getUnits();
     },
  methods:{
    //获取所有的组织机构
    getUnits(){
      api.getUnits().then(Response=>{
        this.tableData = Response.data.data;
        for(var i=0;i<this.tableData.length;i++){
          this.tableData[i].createTime = this.tableData[i].createTime.replace("T"," ");
          this.tableData[i].index = i+1;
        }
      })
    },

    handleClick() {
        this.$confirm('此操作将永久删除该机构, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    components:{
      changeorganization
    }

}
</script>

<style  scoped>
#detail {
  width: 100%;
}

#s1{
  height:40px;
  width: 100%;
   font-size: 25px;
   color:darkgrey;
   background:#B0E0E6;
   text-align:center;
   /* padding:20px; */

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
.s2{
  display:flex;
}
.s2 :first-child{
  margin:0 5%;
}
</style>