<template>
  <div id="searchUser">
      <el-input placeholder="请关键字查询" v-model="params.search"></el-input>
  </div>
</template>

<script>
export default {
    data() {
  return {
    params: {
      page: '1',
      search: ''
    }
  }
},

}
</script>

<style scoped>

</style>