<template>
  <div>
    <div class="head_sticky">
      <Header  />
    </div>    

    <!-- <h1>关于我们</h1> -->
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
    <About></About>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Head";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default {
  name: "LightCourse",
  components: {
    Header,
    About,
    Footer,
  },
};
</script>

<style scoped>
/* 导航栏吸顶 */
.head_sticky{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 5;
}

</style>