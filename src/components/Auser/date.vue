<template>
  <div id="date">
   <span class="demonstration" style="width:20%;">选择时间：
    <el-date-picker  id="el-date" style="width:80%;"
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期" format="yyyy-MM-dd HH:mm">
    </el-date-picker>
    </span>
  </div>
</template>

<script>
export default {
    data() {
      return {
        pickerOptions: {
         
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      }
    }
  };
</script>

<style scoped >


</style>