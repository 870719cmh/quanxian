<template>
  <div id='jurisdiction'>
     <el-tree
  :data="data"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
</el-tree>
  </div>
</template>

<script>
export default {
  data() {
      return {
        data: [{
          id: 1,
          label: '设备相关权限',
          children: [{
            id: 4,
            label: '查看设备详情',
          },{
              id:9,
            label:'查看实时数据'
          },{
              id:10,
            label:'查看历史数据'
          },{
              id:11,
            label:'修改设备基本信息'
          }
          ]
        }, {
          id: 2,
          label: '人员相关权限',
          children: [{
            id: 5,
            label: '查看人员明细'
          }, {
            id: 6,
            label: '查看人员考勤数据'
          }, {
            id: 12,
            label: '新增人员信息'
          }
          ]
        }, {
          id: 3,
          label: '财务相关权限',
          children: [{
            id: 7,
            label: '查看月报表'
          }, {
            id: 8,
            label: '查看支出收入'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }

}
</script>

<style>
#jurisdiction{
    margin-left:15%;
}

</style>