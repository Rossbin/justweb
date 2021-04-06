<template>
  <div>
    <div class="head_sticky">
      <Header ref="mheader" />
    </div>       

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
    <ActualBody ref="mbody"></ActualBody>
    <actualVideo></actualVideo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Head";
import Footer from "@/components/Footer";
import ActualBody from "@/components/ActualBody";
import actualVideo from "@/components/actualVideo";
export default {
  name: "ActualCourse",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    ActualBody,
    actualVideo,
  },
  //   mounted() {
  //     window.onscroll = this.handleScroll;
  //   },

  //   beforeDestroy() {
  //     window.onscroll = null;
  //   },

  methods: {
    // handleScroll() {
    //   var a =
    //     this.$refs.mheader.$el.offsetHeight +
    //     this.$refs.mbody.$el.offsetHeight;
    //   console.log(a);
    //   if (document.documentElement.scrollTop >= this.a) {
    //     this.isFixed = true;
    //   } else {
    //     this.isFixed = false;
    //   }
    // },
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