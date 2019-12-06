<template>
  <div id="company">
    <span>机构名称：</span>
     <el-select v-model="value" placeholder="点击选择机构">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
  </div>
</template>

<script>
export default {
   data() {
      return {
        options: [{
          value: '选项1',
          label: '重庆*****公司'
        }, {
          value: '选项2',
          label: '河北*****公司'
        }, {
          value: '选项3',
          label: '开州*****公司'
        }],
        value: ''
      }
    }
 
};
</script>

<style  scoped>
span{
  color: #48576a;
 

}
#company>*{
  font-size: 16px;
  width: 50%;

}

</style>