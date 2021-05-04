<template>

    <div id="banner">

        <el-carousel height="382px"  >
            <el-carousel-item v-for="(item,index) in banner_list" :key="index">
                <!--<img src="../assets/img/banner1.png" alt="">-->
                <router-link :to="'/base-course/detail/' + item.link">
                    <img :src="item.img" :alt="item.name">
                </router-link>

            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script>
    export default {
        name: "Banner",
        // data:function(){},
        data() {
            return {
                banner_list: []
            }
        },
        created() {
            //当banner组件一创建，就向后台发请求，拿回轮播图数据
            this.$axios.get(this.$settings.base_url + '/home/banner/').then(response => {
                console.log("banner",response.data)
                this.banner_list=response.data
            }).catch(error => {
            })
        },

    }
</script>

<style scoped>
    .el-carousel__item {
        height: 382px;
        min-width: 896px;
    }

    .el-carousel__item img {
        /* height: 400px; */
        /* margin-left: 20px; */
        /* margin-left: calc(50% - 1920px / 2); */
        
        width: auto;  
        height: auto;  
        max-width: 100%;  
        max-height: 100%; 
    }

</style>