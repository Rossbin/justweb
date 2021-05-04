<template>
  <section class="bg000">
    <div class="container-types new-course" id="excellent">
      <div class="_1BnFd">优秀精品课</div>
      <div class="_3Vnvu">
        <span class="_2Mqyi">最新好课推荐</span>
      </div>
      <div class="list">
        <el-row>
          <el-col :span="6" v-for="popular in course_list" :key="popular.id">
            <router-link
              :to="'/base-course/detail/' + popular.id"
              target="_blank"
              style="text-decoration: none"
            >
              <el-card
                shadow="hover"
                class="el-card"
                :body-style="{ padding: '0px' }"
              >
                <img :src="popular.course_img" class="image" />
                <p class="title ellipsis2">{{ popular.name }}</p>
                <p class="difficulty">
                  {{ popular.level }} · {{ popular.popular }}人推荐
                </p>
                <div class="bottom">
                  <span class="l blod" style="color: red"
                    >￥{{ popular.price }}</span
                  >
                  <span class="l" style="float: right"
                    >{{ popular.project }}课</span
                  >
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 高校课程推荐 -->
    <div class="container-types new-course" id="computer">
      <div class="_1BnFd">计算机</div>
      <div class="_3Vnvu">
        <span class="_2Mqyi">最新好课推荐</span>
      </div>
      <div class="list">
        <el-row>
          <el-col
            :span="6"
            v-for="popular in college_computer"
            :key="popular.id"
          >
            <router-link
              :to="'/base-course/detail/' + popular.id"
              target="_blank"
              style="text-decoration: none"
            >
              <el-card
                shadow="hover"
                class="el-card"
                :body-style="{ padding: '0px' }"
              >
                <img :src="popular.course_img" class="image" />
                <p class="title ellipsis2">{{ popular.name }}</p>
                <p class="difficulty">
                  {{ popular.level }} · {{ popular.popular }}人推荐
                </p>
                <div class="bottom">
                  <span class="l blod" style="color: red"
                    >￥{{ popular.price }}</span
                  >
                  <span class="l" style="float: right"
                    >{{ popular.project }}课</span
                  >
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="container-types new-course" id="language">
      <div class="_1BnFd">外语</div>
      <div class="_3Vnvu">
        <span class="_2Mqyi">最新好课推荐</span>
      </div>
      <div class="list">
        <el-row>
          <el-col
            :span="6"
            v-for="popular in college_language"
            :key="popular.id"
          >
            <router-link
              :to="'/base-course/detail/' + popular.id"
              target="_blank"
              style="text-decoration: none"
            >
              <el-card
                shadow="hover"
                class="el-card"
                :body-style="{ padding: '0px' }"
              >
                <img :src="popular.course_img" class="image" />
                <p class="title ellipsis2">{{ popular.name }}</p>
                <p class="difficulty">
                  {{ popular.level }} · {{ popular.popular }}人推荐
                </p>
                <div class="bottom">
                  <span class="l blod" style="color: red"
                    >￥{{ popular.price }}</span
                  >
                  <span class="l" style="float: right"
                    >{{ popular.project }}课</span
                  >
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="container-types new-course" id="engineer">
      <div class="_1BnFd">工学</div>
      <div class="_3Vnvu">
        <span class="_2Mqyi">最新好课推荐</span>
      </div>
      <div class="list">
        <el-row>
          <el-col
            :span="6"
            v-for="popular in college_engineer"
            :key="popular.id"
          >
            <router-link
              :to="'/base-course/detail/' + popular.id"
              target="_blank"
              style="text-decoration: none"
            >
              <el-card
                shadow="hover"
                class="el-card"
                :body-style="{ padding: '0px' }"
              >
                <img :src="popular.course_img" class="image" />
                <p class="title ellipsis2">{{ popular.name }}</p>
                <p class="difficulty">
                  {{ popular.level }} · {{ popular.popular }}人推荐
                </p>
                <div class="bottom">
                  <span class="l blod" style="color: red"
                    >￥{{ popular.price }}</span
                  >
                  <span class="l" style="float: right"
                    >{{ popular.project }}课</span
                  >
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="container-types new-course" id="science">
      <div class="_1BnFd">理学</div>
      <div class="_3Vnvu">
        <span class="_2Mqyi">最新好课推荐</span>
      </div>
      <div class="list">
        <el-row>
          <el-col
            :span="6"
            v-for="popular in college_science"
            :key="popular.id"
          >
            <router-link
              :to="'/base-course/detail/' + popular.id"
              target="_blank"
              style="text-decoration: none"
            >
              <el-card
                shadow="hover"
                class="el-card"
                :body-style="{ padding: '0px' }"
              >
                <img :src="popular.course_img" class="image" />
                <p class="title ellipsis2">{{ popular.name }}</p>
                <p class="difficulty">
                  {{ popular.level }} · {{ popular.popular }}人推荐
                </p>
                <div class="bottom">
                  <span class="l blod" style="color: red"
                    >￥{{ popular.price }}</span
                  >
                  <span class="l" style="float: right"
                    >{{ popular.project }}课</span
                  >
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 尾部 -->
    <div class="_1U0Cy">
      <p class="_31Qws">让每一个有意愿提升自己的人，都可以获得更优质的教育</p>
      <p class="PsPHI">
        <img
          src="//edu-image.nosdn.127.net/0d4ef20d23f2493da83c26f68e9f1ce3.png?imageView&quality=100"
          alt=""
        />
      </p>
      
      <div v-if="!token" class="_2UeVQ" role="button" tabindex="0" @click="put_login">
        开启学习之旅
        <!-- <a class="_2UeVQ" href="#" style="text-decoration: none"  
          >开启学习之旅</a
        > -->
      </div>
    </div>

    <!-- 悬浮左侧栏 -->
    <div>
      <ul id="menu">
        <li
          @click="sidebarfunction(index)"
          v-for="(sidebar, index) in SideBar"
          :key="index"
        >
          <router-link
            :class="{ active: sidebar.show }"
            :to="{ hash: '#' + sidebar.anchor }"
            class="router-link"
          >
            {{ sidebar.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <Login
      v-if="is_login"
      @close="close_login"
      @go="put_register"
      @loginsuccess="login_success"
    />
    <Register v-if="is_register" @close="close_register" @go="put_login" />
  </section>
</template>


<script>
import Login from "./Login";
import Register from "./Register";

export default {
  name: "mBody",
  data() {
    return {
      // 尾部开始学习
      is_login: false,
      is_register: false,
      token: "",
      username: "",
      icon: "",

      SideBar: [
        { name: "优秀精品课", show: false, anchor: "excellent" },
        { name: "计算机", show: false, anchor: "computer" },
        { name: "外语", show: false, anchor: "language" },
        { name: "工学", show: false, anchor: "engineer" },
        { name: "理学", show: false, anchor: "science" },
      ], // 左侧边栏

      course_list: [], // 优秀推荐课程
      college_computer: [], // 大学计算机推荐学
      college_language: [],
      college_engineer: [],
      college_science: [],
      filter: {
        course_category: 0, // 当前用户选择的课程分类，刚进入页面默认为全部，值为0
        ordering: "-popular", // 数据的排序方式，默认值是-id，表示对于id进行降序排列
      },
    };
  },

  methods: {
    // 尾部的开始学习
    put_login() {
      this.is_login = true;
      this.is_register = false;
    },
    put_register() {
      this.is_login = false;
      this.is_register = true;
    },
    close_login() {
      this.is_login = false;
    },
    close_register() {
      this.is_register = false;
    },
    login_success() {
      this.username = this.$cookies.get("username");
      this.icon = this.$settings.base_url + this.$cookies.get("icon");
      this.token = this.$cookies.get("token");
    },

    // 左侧边栏
    sidebarfunction(index) {
      this.SideBar.forEach(function (c) {
        c.show = false;
      });
      this.SideBar[index].show = true;
    },
    get_course() {
      // 精品课程推荐
      let filters = {
        ordering: this.filter.ordering, // 排序按popular
      };

      // 获取课程列表信息
      this.$axios
        .get(`${this.$settings.base_url}/course/popular/`, {
          params: filters,
        })
        .then((response) => {
          // console.log(response.data);
          this.course_list = response.data.results;
          // console.log("返回的课程", this.course_list);
        })
        .catch(() => {
          this.$message({
            message: "获取课程信息有误，请联系客服工作人员",
          });
        });
    },

    get_college_computer() {
      // 精品课程推荐
      let filters = {
        ordering: this.filter.ordering, // 排序按popular
        course_category: "102",

      };

      // 获取课程列表信息
      this.$axios
        .get(`${this.$settings.base_url}/course/popular/`, {
          params: filters,
        })
        .then((response) => {
          this.college_computer = response.data.results;
          // console.log("计算机返回的课程", this.college_computer);
        })
        .catch(() => {
          this.$message({
            message: "获取课程信息有误，请联系客服工作人员",
          });
        });
    },
    get_college_language() {
      let filters = {
        ordering: this.filter.ordering, // 排序按popular
        course_category: "103",
      };

      // 获取课程列表信息
      this.$axios
        .get(`${this.$settings.base_url}/course/popular/`, {
          params: filters,
        })
        .then((response) => {
          this.college_language = response.data.results;
          // console.log("计算机返回的课程", this.college_language);
        })
        .catch(() => {
          this.$message({
            message: "获取课程信息有误，请联系客服工作人员",
          });
        });
    },
    get_college_engineer() {
      let filters = {
        ordering: this.filter.ordering, // 排序按popular
        course_category: "104",
      };

      // 获取课程列表信息
      this.$axios
        .get(`${this.$settings.base_url}/course/popular/`, {
          params: filters,
        })
        .then((response) => {
          this.college_engineer = response.data.results;
          // console.log("计算机返回的课程", this.college_engineer);
        })
        .catch(() => {
          this.$message({
            message: "获取课程信息有误，请联系客服工作人员",
          });
        });
    },
    get_college_science() {
      let filters = {
        ordering: this.filter.ordering, // 排序按popular
        course_category: "105",
      };

      // 获取课程列表信息
      this.$axios
        .get(`${this.$settings.base_url}/course/popular/`, {
          params: filters,
        })
        .then((response) => {
          this.college_science = response.data.results;
          // console.log("计算机返回的课程", this.college_science);
        })
        .catch(() => {
          this.$message({
            message: "获取课程信息有误，请联系客服工作人员",
          });
        });
    },
  },
  created() {
    this.get_course();
    this.get_college_computer();
    this.get_college_language();
    this.get_college_engineer();
    this.get_college_science();
    this.token = this.$cookies.get('token')
  },
  components: {
    Login,
    Register,
  },
};
</script>

<style scoped>
/* 新修改的样式集 */
.bg000 {
  box-shadow: 0 2px 4px 0 rgb(7 17 27 / 6%);
  background-color: #f3f6fa;
}
.bg000 > div {
  background-size: cover;
}
.container-types {
  width: 1152px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;
}
._1BnFd {
  color: #333;
  font-size: 24px;
  font-weight: 500;
}
._3Vnvu {
  line-height: 28px;
  margin-top: 15px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 30px;
}
._3Vnvu span._2Mqyi {
  color: #00c758;
  border-bottom: 2px solid #00c758;
}
._3Vnvu span {
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  margin-right: 32px;
  height: 35px;
}
.container-types.must-learn .list {
  display: block;
}
.el-card {
  width: 270px;
  border-radius: 8px;
  margin: 0 24px 24px 0;
}
.el-card:hover {
  clear: both;
  box-shadow: darkgrey 0px 0px 30px 5px !important;
}
.el-card img {
  width: 270px;
  height: 152px;
  margin-bottom: 8px;
  border-radius: 8px 8px 0 0;
}
.el-card p {
  display: block;
  font: 14px/1.5 "PingFang SC", "微软雅黑", "Microsoft YaHei", Helvetica,
    "Helvetica Neue", Tahoma, Arial, sans-serif;
}
.el-card .title {
  color: #545c63;
  line-height: 20px;
  height: 40px;
  margin-bottom: 8px;
  padding: 0 8px;
}
.el-card .title .ellipsis2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.el-card .difficulty {
  display: block;
  color: #9199a1;
  font-size: 12px;
  margin-bottom: 8px;
  padding: 0 8px;
}
.el-card .bottom {
  font-size: 12px;
  color: #9199a1;
  line-height: 18px;
  padding: 0 8px;
  margin-bottom: 18px;
}
.el-card .l {
  float: left;
}
.el-card .blod {
  font-weight: 700 !important;
}

/* 尾部 */
._1U0Cy {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 80px 0 100px 0;
}
._1U0Cy ._3lQws {
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  margin-bottom: 21px;
}
._1U0Cy .PsPHI {
  width: 222px;
  margin-bottom: 48px;
}
._1U0Cy .PsPHI img {
  width: 100%;
}
._1U0Cy ._2UeVQ {
  width: 320px;
  height: 48px;
  font-size: 20px;
  font-weight: 500;
  line-height: 48px;
  border-radius: 32px;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 199, 88);
  outline: none;
  cursor: pointer;
}

/* 悬浮侧边栏 */
#menu {
  position: fixed;
  left: 0;
  top: 50%;
  width: 120px;
  transform: translateY(-50%);
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
  border-radius: 0 8px 8px 0;
  text-align: center;
  color: #6d7278;
  z-index: 3;
  user-select: none;
}
ul {
  list-style: none;
}
#menu li {
  position: relative;
  padding: 16px 0;
  cursor: pointer;
  transition: color 0.2s;
  font-size: 14px;
}
#menu li .router-link {
  text-decoration: none;
  color: #6d7278;
}
#menu li + li:after {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -30px;
  content: "";
  width: 60px;
  border: 1px solid #f3f5f7;
}
#menu li > .router-link:hover,
#menu li > .router-link.active {
  color: #e02020;
}
</style>