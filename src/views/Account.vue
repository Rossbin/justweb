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
        <!-- <el-menu-item index="3"> -->
        <!-- <router-link to="/order/shopcart" tag="li">购物车</router-link> -->
        <!-- </el-menu-item> -->
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
      activeIndex: "1",
      activeIndex2: "1",
    };
  },

  // 以下触发的时间早，组件都还没加载出来
  beforeRouteEnter(to, from, next) {
    // console.log("局部盘查");
    next((vm) => {
      if (!vm.$cookies.get("token")) {
        vm.$message({
          message: "您还没有登录，请先登录",

        });
        next("/home");
      } else {
        next();
      }
    });
  },

  // 在渲染该组件的对应路由被confirm前调用
  // 不！能！获取组件实例`this`
  // 因为当守卫执行前，组件实例还没被创建
  created() {},
  mounted() {},

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
.box > ul {
  display: flex;
  justify-content: center;
}
</style>