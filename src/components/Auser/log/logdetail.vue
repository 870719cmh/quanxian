<template>
  <div id="detail">
    <div id="d1">
        <el-table :data="tableData" border style="width: 100%" 
        header-cell-style="background:#c0d6dbb3">
        <el-table-column prop="ordinal" label="序号"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="role" label="时间"></el-table-column>
        <el-table-column prop="createDate" label="IP"></el-table-column>
        <el-table-column prop="organization" label="操作记录"></el-table-column>
        <el-table-column prop="phone" label="浏览器信息"></el-table-column>
        <el-table-column prop="mailbox" label="参数"></el-table-column>
       
        
      </el-table>
      <!-- <el-pagination
        @size-change="changeSizeHandle"
        @current-change="currentChangeHandle"
        :current-page="currentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination> -->
    </div>
  </div>
</template>

<script>
import changeuser from "@/components/Auser/changeuser"
export default {
  data() {
    return {
      tableData: [
        {
          ordinal: 1,
          username: "王大大",
          role: "管理者",
          createDate: "2018-09-11",
          organization: "***污水处理厂",
          phone: "1862319****",
         mailbox: "10029***.com",     
        },
      ]
    };
  },

    components:{
      changeuser
    }
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
</style>