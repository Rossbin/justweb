<template>
  <div>
    <Head></Head>
    <div class="box">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
      
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- @select="handleSelect" -->
        <el-menu-item index="1">
          <router-link to="/order/myorder" tag="li">我的订单</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/order/mydetail" tag="li">个人资料</router-link>
        </el-menu-item>
        <el-menu-item index="3">
            <router-link to="/order/shopcart" tag="li">购物车</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "../components/Head";
import Footer from "../components/Footer";

export default {
  name: "Userhome",
  data() {
    return {
        activeIndex: '1',
        activeIndex2: '1',
    };
  },

  components: {
    Head,
    Footer,
  },
};
</script>

<style scoped>

  .box {
      margin: 0.5px 0px;
  }
  .box>ul {
    display: flex;
    justify-content: center;
  }

</style>