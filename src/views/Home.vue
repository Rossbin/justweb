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

    <section class="sider_banner">
      <div class="g-banner">
        <!-- hover后在右边显示的具体分类列表 -->
        <div
          class="submenu"
          v-show="general.show"
          v-for="(general, index) in general_category_list"
          :key="index"
          @mouseenter="enter(index)"
          @mouseleave="leave(index)"
        >
          <div class="inner-box">
            <h2 class="type">{{ general.name }}</h2>
            <div class="tag clearfix"></div>
            <div class="lore">
              <span class="title">知识点：</span>
              <p class="lores clearfix">
                <router-link
                  v-for="(category, index) in general.coursecategrories"
                  :key="index"
                  :to="'/search?word=' + category.name"
                  class="router-link-a"
                  target="_blank"
                >
                  {{ category.name }}
                </router-link>
              </p>
            </div>
          </div>

          <div class="recomment clearfix">
            <a
              v-for="(fourvids, index) in general.fourvid_list"
              :key="index"
              :title="fourvids.name"
            >
              <router-link
                v-for="(fourvid, index) in fourvids.fourvid_list"
                :key="index"
                :to="'/base-course/detail/' + fourvid.id"
                class="recomment-item"
                target="_blank"
              >
                <div class="img">
                  <img :src="$settings.base_url + fourvid.course_img" alt="" />
                </div>
                <div class="details">
                  <div class="title_box">
                    <p class="title">
                      <span class="text">{{ fourvid.name }}</span>
                      <span class="tag tixi">体系</span>
                    </p>
                  </div>
                  <div class="bottom">
                    <span class="discount-name">优惠价</span>
                    <span class="price">￥{{ fourvid.price }}</span>
                    <span class="difficulty"> {{ fourvid.level }} </span>
                    <span class="num">
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                      {{ fourvid.students }}
                    </span>
                  </div>
                </div>
              </router-link>
            </a>
          </div>
        </div>

        <!-- 左边菜单栏中的显示 -->
        <div class="menuContent">
          <div
            class="item"
            :class="{ hover_item: general.show }"
            v-for="(general, index) in general_category_list"
            :key="index"
            @mouseenter="enter(index)"
            @mouseleave="leave(index)"
          >
            <span class="title">{{ general.name }}：</span>
            <span class="sub-title">
              <span
                v-for="(sector, index) in general.coursecategrories"
                :key="index"
              >
                <span v-if="index < 4"> {{ sector.name }} / </span>
              </span>
            </span>

            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </div>
        </div>
        <div>
          <Banner />
        </div>
      </div>

      <div class="system-class-show">
        <router-link to="#" class="show-box" target="_blank">
          <div
            class="system-class-icon"
            style="
              background-image: url(//img.mukewang.com/601bd59c0001fc1800900090.jpg);
            "
          ></div>
          <div class="describe">
            <h4>Java工程师</h4>
            <p>综合就业率第一</p>
          </div>
        </router-link>

        <router-link to="#" class="show-box" target="_blank">
          <div
            class="system-class-icon"
            style="
              background-image: url(//img4.mukewang.com/601bd5b2000180bb00900090.jpg);
            "
          ></div>
          <div class="describe">
            <h4>前端工程师</h4>
            <p>入门快、就业快、岗位多</p>
          </div>
        </router-link>
        <router-link to="#" class="show-box" target="_blank">
          <div
            class="system-class-icon"
            style="
              background-image: url(//img4.mukewang.com/601bd5ba0001fbfa00900090.jpg);
            "
          ></div>
          <div class="describe">
            <h4>Python工程师</h4>
            <p>应用领域最广泛</p>
          </div>
        </router-link>
        <router-link to="#" class="show-box" target="_blank">
          <div
            class="system-class-icon"
            style="
              background-image: url(//img3.mukewang.com/601bd5c90001b1fe00900090.jpg);
            "
          ></div>
          <div class="describe">
            <h4>Web前端架构师</h4>
            <p>培养前端P7级架构师</p>
          </div>
        </router-link>
        <router-link to="#" class="show-box" target="_blank">
          <div
            class="system-class-icon"
            style="
              background-image: url(//img1.mukewang.com/601bd5d1000155d100900090.jpg);
            "
          ></div>
          <div class="describe">
            <h4>Java架构师P7</h4>
            <p>千万级电商架构0-100</p>
          </div>
        </router-link>
      </div>
    </section>

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
    return {
      general_category_list: [], // 4个课程总目录
    };
  },
  created() {
    this.get_general();
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
  methods: {
    // 菜单栏hover显示详情
    enter(index) {
      this.general_category_list.forEach(function (c) {
        c.show = false;
      });
      this.general_category_list[index].show = true;
      // console.log(this.cells[index].selected);
    },
    leave() {
      this.general_category_list.forEach(function (c) {
        c.show = false;
      });
    },

    get_general() {
      // 获取课程分类信息
      this.$axios
        .get(`${this.$settings.base_url}/course/sidercategory/`)
        .then((response) => {
          this.general_category_list = response.data;
          // console.log(this.general_category_list);
        })
        .catch(() => {
          this.$message({
            message: "获取总目录分类信息有误，请联系客服工作人员",
          });
        });
    },
  },

  components: {
    Head,
    Footer,
    Banner,
    mBody,
  },
};
</script>

<style  scoped>
.sider_banner {
  padding: 32px 0px;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgb(7 17 27 / 6%);
  font: 14px/1.5 "PingFang SC", "微软雅黑", "Microsoft YaHei", Helvetica,
    "Helvetica Neue", Tahoma, Arial, sans-serif;
  color: #1c1f21;
}

.sider_banner > div {
  display: block;
}

.g-banner {
  height: 382px;
  background-color: #93999f;
  box-shadow: 0 10px -2px 0 rgba(7, 17, 27, 0.2);
  position: relative;
  overflow: hidden;
  width: 1152px;
  margin: auto;
  border-radius: 8px 8px 0 0;
}

/* 侧边按钮栏 */
.menuContent {
  height: 382px;
  position: relative;
  float: left;
  width: 256px;
  height: 382px;
  z-index: 2;
  padding-top: 17px;
  box-sizing: border-box;
  background: #39364d;
  border-bottom-left-radius: 4px;
  font-weight: 400;
}

.menuContent .item {
  line-height: 50px;
  cursor: pointer;
  position: relative;
  color: #fff;
  padding: 0 14px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 50px;
  transition: all 0.1s;
  font-size: 14px;

  /* 以下4个为非常重要的样式参参数 */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.hover_item {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}

.menuContent .item .sub-title {
  font-size: 12px;
}

.menuContent .item i {
  position: absolute;
  right: 4px;
  top: 16px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
}

/* 菜单栏hover后显示的div中的样式 */
.submenu {
  position: absolute;
  left: 256px;
  width: 776px;
  height: 382px;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
  border-radius: 0 12px 12px 0;
  z-index: 3;
  box-sizing: border-box;
}

.submenu > div {
  background-size: cover;
}

.submenu .inner-box {
  height: 188px;
  padding: 28px 36px 0;
  box-sizing: border-box;
}

.inner-box > h2 {
  margin-top: 0px;
}

.submenu .inner-box .type {
  margin-bottom: 10px;
  font-size: 16px;
  color: #1c1f21;
  line-height: 22px;
  font-weight: bold;
}

.submenu .inner-box .tag {
  margin-bottom: 12px;
}

.clearfix:after {
  content: "\0020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.submenu .inner-box .lore {
  font-size: 12px;
  line-height: 24px;
  color: #6d7278;
  margin-bottom: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.submenu .inner-box .lore .title {
  color: #1c1f21;
  font-weight: bold;
}
.submenu .inner-box .lore .lores {
  width: 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-decoration: none;
}

.submenu .inner-box .lore .lores .router-link-a {
  text-decoration: none;
  float: left;
  color: #6d7278;
  margin-right: 24px;
  margin-bottom: 10px;
}

.submenu .recomment {
  padding: 35px 36px;
  height: 204px;
  background-color: #f3f5f6;
  box-sizing: border-box;
}
.submenu .recomment .recomment-item {
  width: 329px;
  float: left;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  text-decoration: none;
  color: #1c1f21;
}
.submenu .recomment .recomment-item:nth-child(2n) {
  margin-left: 30px;
}
.submenu .recomment .recomment-item:nth-child(-n + 2) {
  margin-bottom: 30px;
}
.submenu .recomment .recomment-item .img {
  width: 90px;
  height: 50px;
  margin-right: 11px;
  border-radius: 4px;
  background-position: center;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  box-shadow: 0 6px 10px 0 rgb(95 101 105 / 15%);
}
.submenu .recomment .recomment-item .img > img {
  width: 90px;
  height: 50px;
}
.submenu .recomment .recomment-item .details {
  width: 228px;
  height: 50px;
  font-size: 12px;
  width: 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.submenu .recomment .recomment-item .details .title-box {
  margin-bottom: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.submenu .recomment .recomment-item .details .title-box .title {
  display: flex;
  align-items: center;
  color: #1c1f21;
  width: 228px;
}
.submenu .recomment .recomment-item .details .title-box .title .text {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: calc(100% - 4em);
}
.submenu .recomment .recomment-item .details .title-box .title .tag.tixi {
  background-color: #e02020;
}
.submenu .recomment .recomment-item .details .title-box .title .tag {
  display: inline-block;
  width: 2em;
  color: #fff;
  opacity: 0.6;
  border-radius: 2px;
  line-height: 1;
  padding: 2px 4px;
  margin-left: 5px;
}

.submenu .recomment .recomment-item .details .bottom {
  color: #9199a1;
  line-height: 18px;
}
.submenu .recomment .recomment-item .details .bottom .discount-name {
  background: rgba(242, 13, 13, 0.6);
}
.submenu .recomment .recomment-item .details .bottom .discount-name,
.submenu .recomment .recomment-item .details .bottom .tag {
  display: inline-block;
  color: #fff;
  background-color: rgba(242, 13, 13, 0.6);
  border-radius: 2px;
  padding: 2px 4px;
  line-height: 1;
}
.submenu .recomment .recomment-item .details .bottom .price:not(.free) {
  font-weight: bold;
  color: #f01414;
}
.submenu .recomment .recomment-item .details .bottom {
  color: #9199a1;
  line-height: 18px;
}

/* 体系课程样式 */
.system-class-show {
  width: 1152px;
  height: 100px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 30%);
  border-radius: 0 0 8px 8px;
}
.system-class-show .show-box {
  display: block;
  width: 192px;
  height: 45px;
  float: left;
  margin-left: 16px;
  margin: 28px 0 0 16px;
  cursor: pointer;
  color: #1c1f21;
}
.system-class-show .show-box .system-class-icon {
  float: left;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 8px;
  transition: all 0.2s;
}
.system-class-show .show-box .describe {
  float: left;
}

.describe > h4 {
  margin: 0;
  padding: 0;
  width: 139px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #1c1f21;
  letter-spacing: 0.76px;
  line-height: 22px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  
}
.describe > p {
  margin: 0;
  padding: 0;
  width: 139px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #545c63;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
}


</style>