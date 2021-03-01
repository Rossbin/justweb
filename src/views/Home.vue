<template>
    <div class="home">
        <Head  />
        <Banner />
        <mBody/>


        <Footer/>
    </div>
</template>

<script>
    //导入头部组件
    import Head from '../components/Head'
    import Footer from '../components/Footer'
    import Banner from '../components/Banner'
    import mBody from "../components/mBody"

    export default {
        name: 'Home',
        data() {
            return {
              
            }
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

    }
</script>