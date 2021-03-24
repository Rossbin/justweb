<template>
  <div>
    <Header></Header>
    <!-- <h1>关于我们</h1> -->
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


</style>