<template>
  <div id="index">
    <div class="top">
      
      <h1>卓 开 用 户 权 限 管 理 系 统</h1>
      <i class="el-icon-s-data"></i>
      <div class="right">
        <button>
          <i class="el-icon-user-solid"></i>admin
        </button>
        <button>
          <i class="el-icon-switch-button"></i>退出
        </button>
      </div>
    </div>
    <router-view
      style="height: 100%; position: relative; display: flex;color:#000000;overflow: hidden;"
    />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      data: null
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
    }
  },
  methods: {
    handleSelect(index) {
      if (index == "Auser") {
        const { href } = this.$router.resolve({
          name: "Auser",
        });
        window.open(href, "_blank");
      }
      else
      this.$router.push({ name: index });
    }
  }
};
</script>

<style scoped>
#index {
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border:3px solid #000; */
}

.top {
  width: 100%;
  color: #ffffff;
  
  background :#1d7cd4c0;
    /* background-image: linear-gradient(to right,#0f51cc78 ,#0f313878); */
    /* background-image: url(../../assets/images/sky.jpg); */
    /* background: #fff; */
  z-index: 1999;
  box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
}

.top > * {
  float: left;
}

.top > h1 {
  font-size: 30px;
  height: 25px;
  padding: 20px 5px 20px 30px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
 font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
 font-weight:bold;
}

.top > div {
  position: absolute;
  top: 20px;
  right: 0;
  color: #ffffff;
}

.top > div > a {
  color: #ffffff;
}

.top > .el-menu-demo {
  margin-left: 20px;
  border: none;
}

button {
  background: #00000000;
  border: none;
  color: #48576a;
  cursor: pointer;
  margin-right: 20px;
      
}


</style>