<template>
  <div>
    <Header ref="mheader"></Header>
    <ActualBody ref="mbody"></ActualBody>
    <actualVideo ></actualVideo>
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
    return {
      
    };
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





</style>