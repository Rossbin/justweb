<template>
  <div class="home">
    <Head />

    <el-backtop>
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
            border-radius: 12px;
          }
        "
      >
        <i class="fa fa-arrow-up" aria-hidden="true"></i>UP
      </div>
    </el-backtop>

    <Banner />
    <mBody />

    <Footer />
  </div>
</template>

<script>
//导入头部组件
import Head from "../components/Head";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import mBody from "../components/mBody";

export default {
  name: "Home",
  data() {
    return {};
  },
  created() {
    //向后端发请求
    //this就是vue对象
    // this.$axios.get('http://127.0.0.1:8000/home/home/').
    // then(function (response) {
    //   console.log(response)
    // }).catch(function (error) {
    //   console.log(error)
    // })
    // this.$axios.get('http://127.0.0.1:8000/home/home/').then(response => {
    //     console.log(response.data)  //response.data才是真正后台返回的数据
    // }).catch(errors => {
    //     console.log(errors)
    // })
  },

  components: {
    Head,
    Footer,
    Banner,
    mBody,
  },
};
</script>