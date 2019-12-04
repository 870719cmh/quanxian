<template>
  <div id="createRole">
    <el-button @click="drawer = true" plain style="margin-left: 16px;" type="primary">
      <i class="el-icon-plus" style=" margin-left:-10px"></i>
      <span>新增角色</span>
    </el-button>
    <el-dialog
      title="新增角色"
      :visible.sync="drawer"
      :direction="direction"
      style="margin-top:5%"
    >
      <el-tabs v-model="activeName">
        <el-tab-pane label="基本信息" name="info">
          <p style=" color: #000;margin-left:30px">
            描述：
            <el-input
              style=" width:300px;  height:12px;margin-bottom:50px;"
              value="description"
              v-model=" description"
            ></el-input>
          </p>
          <p style=" color: #000;margin-left:30px">
            昵称：
            <el-input
              style=" width:300px;  height:12px;margin-bottom:50px;"
              value="nickname"
              v-model="nickname"
            ></el-input>
          </p>
          <p style=" color: #000;margin-left:30px">
            角色名称：
            <el-input
              style=" width:300px;  height:12px;margin-bottom:50px;"
              value="roleName"
              v-model="roleName"
            ></el-input>
          </p>
        </el-tab-pane>
        <el-tab-pane label="用户权限" name="jurisdiction">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
          ></el-tree>
        </el-tab-pane>
      </el-tabs>

      <el-button class="btn" type="primary" native-type="submit" @click="createRole">提交</el-button>

      <!-- <jurisdiction/> -->
    </el-dialog>
  </div>
</template>

<script>
import jurisdiction from "@/components/Auser/roleManagement/jurisdiction";
import api from "@/API/api";
export default {
  components: {
    jurisdiction
  },
  data() {
    return {
      activeName: "info",
      drawer: false,
      direction: "rtl",
      description: "",
      nickname: "",
      roleName: "",
      data: [
        {
          id: 1,
          label: "一级 2",
          children: [
            {
              id: 3,
              label: "二级 2-1",
              children: [
                {
                  id: 4,
                  label: "三级 3-1-1"
                },
                {
                  id: 5,
                  label: "三级 3-1-2"
                }
              ]
            },
            {
              id: 2,
              label: "二级 2-2",
              children: [
                {
                  id: 6,
                  label: "三级 3-2-1"
                },
                {
                  id: 7,
                  label: "三级 3-2-2"
                }
              ]
            }
          ]
        },
        {
          id: 1,
          label: "一级 2",
          children: [
            {
              id: 3,
              label: "二级 2-1",
              children: [
                {
                  id: 4,
                  label: "三级 3-1-1"
                },
                {
                  id: 5,
                  label: "三级 3-1-2"
                }
              ]
            },
            {
              id: 2,
              label: "二级 2-2",
              children: [
                {
                  id: 6,
                  label: "三级 3-2-1"
                },
                {
                  id: 7,
                  label: "三级 3-2-2"
                }
              ]
            }
          ]
        }
      ]
    };
  },

  methods: {
    //新增角色
    createRole() {
      api
        .createRoles(this.description, this.nickname, this.roleName)
        .then(Response => {
          alert(Response.data.message);
        });
    },
  },
  submitForm(info) {}
};
</script>

<style scoped>
p > input {
  color: #000;
}
</style>