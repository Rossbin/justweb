<template>
  <section>
    <div class="top-wrap">
      <div class="shizhan-header">
        <div class="shizhan-header-wrap w1430">
          <div class="banner">
            <div class="title">
              <img src="../assets/img/shizhan-title.png" alt="" class="h100" />
            </div>

            <div id="codingIndexBanner">
              <span class="sologen">行业顶尖人才实战教学</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 目录 -->
      <div class="type">
        <div class="type-wrap w1430">
          <div
            class="one warp"
            style="
              box-shadow: rgba(95, 101, 105, 0) 0px 12px 20px 0px;
              height: 54px;
              background: transparent;
            "
          >
            <span class="name">方向：</span>
            <ul class="items clearfix">
              <li
                :class="filter.general_category == 0 ? 'cur' : ''"
                @click="filter.general_category = 0"
              >
                全部
              </li>
              <li
                :class="filter.general_category == category.id ? 'cur' : ''"
                v-for="category in general_list"
                @click="filter.general_category = category.id"
                :key="category.id"
              >
                {{ category.name }}
              </li>
            </ul>
          </div>

          <el-row :gutter="20" class="two warp" :style="styleObject">
            <span class="name">分类：</span>

            <ul
              class="items clearfix"
              @mouseenter="enter()"
              @mouseleave="leave()"
            >
              <el-col :span="25" style="padding-left: 0px" class="el-col">
                <li
                  :class="filter.course_category == 0 ? 'cur' : ''"
                  @click="filter.course_category = 0"
                >
                  不限
                </li>

                <li
                  :class="filter.course_category == category.id ? 'cur' : ''"
                  v-for="category in category_list"
                  @click="filter.course_category = category.id"
                  :key="category.id"
                >
                  {{ category.name }}
                </li>
              </el-col>
            </ul>
          </el-row>
        </div>
      </div>
    </div>

    <!-- 过滤课程 -->
    <div class="main">
      <div class="w1430">
        <div class="filter clearfix">
          <div class="ordering">
            <ul>
              <li
                class="default"
                :class="
                  filter.ordering == 'id' || filter.ordering == '-id'
                    ? 'this'
                    : ''
                "
                @click="filter.ordering = '-id'"
              >
                默认
              </li>
              <li
                class="hot"
                :class="
                  filter.ordering == 'students' ||
                  filter.ordering == '-students'
                    ? 'this'
                    : ''
                "
                @click="
                  filter.ordering =
                    filter.ordering == '-students' ? 'students' : '-students'
                "
              >
                人气
              </li>
              <li
                class="price"
                :class="
                  filter.ordering == 'price'
                    ? 'price_up this'
                    : filter.ordering == '-price'
                    ? 'price_down this'
                    : ''
                "
                @click="
                  filter.ordering =
                    filter.ordering == '-price' ? 'price' : '-price'
                "
              >
                价格
              </li>
            </ul>
            <p class="condition-result">共{{ course_total }}个课程</p>
          </div>
        </div>
        <div class="list">
          <el-row>
            <el-col
              class="el-card-col"
              :span="6"
              v-for="popular in course_list"
              :key="popular.id"
              style="padding-left: 0px"
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
                  <p class="difficulty">{{ popular.students }}人已学</p>
                  <p class="difficulty">金牌讲师：{{ popular.teacher.name }}</p>
                  <div class="bottom">
                    <span class="l blod" style="color: red"
                      >￥{{ popular.price }}</span
                    >
                    <span class="l" style="float: right"
                      >{{ popular.project_name }}课</span
                    >
                  </div>
                </el-card>
              </router-link>
            </el-col>
          </el-row>
        </div>

        <!-- 分页 -->
        <div class="course_pagination block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="filter.page"
            :page-sizes="[10,20]"
            :page-size="filter.page_size"
            layout="sizes, prev, pager, next"
            :total="course_total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ActualBody",
  data() {
    return {
      styleObject: {
        "box-shadow": "rgba(95, 101, 105, 0) 0px 12px 20px 0px",
        height: "54px",
        background: "transparent",
      },
      general_list: [],
      category_list: [],
      course_list: [], // 课程列表
      course_total: 0, // 当前课程的总数量
      filter: {
        general_category: 0, // 当前用户选择总目录，刚进入是0
        course_category: 0, // 当前用户选择的课程分类，刚进入页面默认为全部，值为0
        ordering: "id", // 数据的排序方式，默认值是-id，表示对于id进行降序排列
        page_size: 10, // 单页数据量
        page: 1,
      },
    };
  },
  created() {
    this.get_general();
    this.get_category();
    this.get_course();
  },
  watch: {
    //当你监听的数据发生变化，就会执行函数
    "filter.general_category": function () {
      this.filter.page = 1;
      this.get_category();
    },
    "filter.course_category": function () {
      this.filter.page = 1;
      this.get_course();
    },
    "filter.ordering": function () {
      this.get_course();
    },
    "filter.page_size": function () {
      this.get_course();
    },
    "filter.page": function () {
      this.get_course();
    },
  },
  methods: {
    // 课程分类hidden方法
    enter() {
      if (this.category_list.length > 14) {
        this.styleObject.height = "250px";
        this.styleObject.background = "rgb(255,255,255)";
        this.styleObject["box-shadow"] =
          "rgb(95 101 105 / 0%) 0px 12px 20px 0px";
      }
    },
    leave() {
      this.styleObject.height = "54px";
      this.styleObject.background = "transparent";
    },
    handleSizeChange(val) {
      // 每页数据量发生变化时执行的方法
      this.filter.page = 1;
      this.filter.page_size = val;
    },
    handleCurrentChange(val) {
      // 页码发生变化时执行的方法
      this.filter.page = val;
    },
    // 总目录
    get_general() {
      // 获取课程分类信息
      this.$axios
        .get(`${this.$settings.base_url}/course/actualgeneralcategor/`)
        .then((response) => {
          this.general_list = response.data;
        })
        .catch(() => {
          this.$message({
            message: "获取总目录分类信息有误，请联系客服工作人员",
          });
        });
    },
    // 分类
    get_category() {
      let filters = {
        ordering: this.filter.ordering, // 排序
      };
      if (this.filter.general_category > 0) {
        filters.general_category = this.filter.general_category;
      }

      // 获取课程分类信息
      this.$axios
        .get(`${this.$settings.base_url}/course/actualcategories/`, {
          params: filters,
        })
        .then((response) => {
          this.category_list = response.data;
        })
        .catch(() => {
          this.$message({
            message: "获取课程分类信息有误，请联系客服工作人员",
          });
        });
    },

    // 课程
    get_course() {
      // 排序
      let filters = {
        ordering: this.filter.ordering, // 排序
      };
      // 判决是否进行分类课程的展示
      if (this.filter.course_category > 0) {
        filters.course_category = this.filter.course_category;
      }

      // 设置单页数据量
      if (this.filter.page_size > 0) {
        filters.page_size = this.filter.page_size;
      } else {
        filters.page_size = 5;
      }

      // 设置当前页码
      if (this.filter.page > 1) {
        filters.page = this.filter.page;
      } else {
        filters.page = 1;
      }

      // 获取课程列表信息
      this.$axios
        .get(`${this.$settings.base_url}/course/actualcourse/`, {
          params: filters,
        })
        .then((response) => {
          // console.log(response.data);
          this.course_list = response.data.results;
          this.course_total = response.data.count;
          // console.log(this.course_list);
        })
        .catch(() => {
          this.$message({
            message: "获取课程信息有误，请联系客服工作人员",
          });
        });
    },
  },
  components: {},
};
</script>

<style scoped>
.top-wrap {
  background-color: #f5f7fa;
  background-image: url(../assets/img/top_bg.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  height: 225px;
  color: #1c1f21;
  font: 14px/1.5 "PingFang SC", "微软雅黑", "Microsoft YaHei", Helvetica,
    "Helvetica Neue", Tahoma, Arial, sans-serif;
}
div {
  margin: 0;
  padding: 0;
  display: block;
}
.shizhan-header .shizhan-header-wrap {
  /* height: 100%; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding-top: 8px;
  height: 90px;
}
.w1430 {
  width: 1430px;
  margin: 0 auto;
}
.shizhan-header .shizhan-header-wrap .banner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.shizhan-header .shizhan-header-wrap .banner .title {
  height: 46px;
  margin-right: 8px;
}
.h100 {
  height: 100%;
}
#codingIndexBanner {
  height: 46px;
  line-height: 46px;
  min-width: 48px;
  max-width: 360px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 899;
  margin-top: 0;
}

.type .type-wrap .warp.one {
  margin-bottom: 25px;
  z-index: 3;
}
.type .type-wrap .warp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  position: absolute;
  width: 1430px;
  height: 54px;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 12px 20px 0 rgb(95 101 105 / 0%);
  border-radius: 8px;
  transition: all 0.2s;
}
.type .type-wrap .warp .name {
  width: 3em;
  color: #07111b;
  line-height: 32px;
  font-weight: 700;
  margin-right: 6px;
}
.type .type-wrap .warp .items {
  width: 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
ul {
  list-style: none;
}
.type .type-wrap .warp .items li {
  float: left;
  line-height: 16px;
  padding: 8px;
  border-radius: 6px;
  margin: 0 12px 12px 0;
  cursor: pointer;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.type .type-wrap .warp .items li.cur {
  background-color: rgba(233, 142, 70, 0.2);
  color: #f37208;
}

/* 课程分类目录 */
.type .type-wrap .warp.two {
  top: 260px;
  z-index: 2;
  transition: all 0.5s ease;
}

.type .type-wrap .warp.two .name {
  width: 3em;
  color: #07111b;
  line-height: 32px;
  font-weight: 700;
  margin-right: 6px;
  margin-left: 10px;
}

.clearfix:after {
  content: "\0020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

/* 课程部分 */
.main {
  margin-bottom: 60px;
}
.main .filter {
  margin: 20px 0;
}

.main .filter .ordering::after {
  content: "";
  display: block;
  clear: both;
}

.main .filter .ordering ul {
  float: left;
}

.main .filter .ordering ul::after {
  content: "";
  display: block;
  clear: both;
}

.main .filter .ordering .condition-result {
  float: right;
  font-size: 14px;
  color: #9b9b9b;
  line-height: 28px;
}

.main .filter .ordering ul li {
  float: left;
  padding: 6px 15px;
  line-height: 16px;
  margin-left: 14px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #4a4a4a;
  margin-top: 10px;
  margin-bottom: -10px;
}

.main .filter .ordering .title {
  font-size: 16px;
  color: #888;
  letter-spacing: 0.36px;
  margin-left: 10;
  padding: 0;
  line-height: 28px;
  cursor: text;
}

.main .filter .ordering .this {
  color: #f37208;
  margin-left: 30px;
}

.main .filter .ordering .price {
  position: relative;
}

.main .filter .ordering .price::before,
.main .filter .ordering .price::after {
  cursor: pointer;
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  border: 5px solid transparent;
  position: absolute;
  right: 0;
}

.main .filter .ordering .price::before {
  border-bottom: 5px solid #aaa;
  margin-bottom: 2px;
  top: 2px;
}

.main .filter .ordering .price::after {
  border-top: 5px solid #aaa;
  bottom: 2px;
}

.main .filter .ordering .price_up::before {
  border-bottom-color: #ffc210;
}

.main .filter .ordering .price_down::after {
  border-top-color: #ffc210;
}

/* 课程 */
.main .list {
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
.el-card-col {
  width: 20%;
}
.main .course_pagination {
  margin-bottom: 60px;
  text-align: center;
}
.sologen{
  font-size: 14px;
  color: #777879;
  font-weight: bold;
  display: block;
  padding-top: 5px;
  padding-left: 10px;
}
</style>