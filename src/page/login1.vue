<template>
  <div id="login">
    <div class="box">
      <h2>用 户 权 限 管 理</h2>
      <el-form :model="info" ref="info" class="demo-ruleForm" @submit.native.prevent>
        <el-form-item prop="name" :rules="[{ required: true, message: '账号不能为空！'}]">
          <el-input class="name-box" v-model="info.name" autocomplete="off" placeholder="name"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="[{ required: true, message: '密码不能为空！'}]">
          <el-input
            class="password-box"
            v-model="info.password"
            type="password"
            autocomplete="off"
            placeholder="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" native-type="submit" @click="submitForm('info')">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from "@/API/api";
import axios from 'axios'
export default {
  name: "Auser",
  data() {
    return {
      name_show: false,
      password_show: false,
      info: {
        name: "",
        password: ""
      }
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.login(this.info.name,this.info.password).then(response => {
            if (response.data.access_token) {
              localStorage.setItem('name',this.info.name)
              localStorage.setItem('access_token',response.data.access_token)
              this.$router.push({ name: "Auser" });
            }
          },
          () =>{
            this.$message({
              type: "error",
              message: "账号或密码错误！",
              duration: 1500
            });
          })
        }
      });
    },
  }
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  /* background-image: url("/assets/images/bj.jpg"); */
  background-color: beige;
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.box {
  width: 600px;
  height: 400px;
  background: #00000066;
  border-radius: 10px;
  box-shadow: 6px 6px 10px #000000;
}

h2 {
  font-size: 36px;
  text-align: center;
  margin: 24px;
}

.name-box > .el-input__inner,
 .password-box > .el-input__inner {
  background: #00000066;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 30px;
  padding: 0 24px;
  color: #ffffff;
  font-size: 20px;
}

form {
  width: 100%;
}

form > div {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  position: relative;
}

.el-form-item__content {
  width: 64%;
  margin: auto;
}

 .el-form-item__error {
  margin-left: 20px;
  font-size: 16px;
}

.btn {
  width: 150px;
  height: 48px;
  font-size: 18px;
}
</style>