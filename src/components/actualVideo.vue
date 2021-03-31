<template>
  <div>
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>企业级项目课程</h2>
          <p>企业级项目让你学习最新的，能够真正使用到的项目</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li
                v-for="(cell, index) in category_list"
                :key="index"
                v-bind:class="{ 'filter-active': cell.button }"
                v-on:click="choose(index)"
                @click="filter.course_category = cell.id"
              >
                {{ cell.name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">
          <div
            class="col-lg-4 col-md-6 portfolio-item"
            v-for="(item, index) in course_list.results"
            :key="index"
          >
            <img :src="item.course_img" class="img-fluid" alt="" />
            <div class="portfolio-info">
              <h4>{{ item.name }}</h4>
              <p>{{ item.brief }}</p>
              <p
                
                data-vbtype="iframe"
                class="preview-link"
                title="学习人数"
                ><i class="fa fa-user-o" aria-hidden="true">&nbsp;{{ item.students }}</i
              ></p>
              <router-link
              :to="'/base-course/detail/' + item.id"
              style="text-decoration: none"
              ><i class="fa fa-link  details-link" aria-hidden="true" title="详情页面"></i
              ></router-link
            >
              
              
            </div>
          </div>
        </div>

        <div class="row course_pagination block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="filter.page"
            :page-sizes="[12]"
            :page-size="filter.page_size"
            layout="total, prev, pager, next"
            :total="course_total"
          >
          </el-pagination>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "actualVideo",
  data() {
    return {
      course_list: [],
      category_list: [],
      course_total: 0, // 当前课程的总数量
      filter: {
        course_category: 0, // 当前用户选择的课程分类，刚进入页面默认为全部，值为0
        ordering: "id", // 数据的排序方式，默认值是-id，表示对于id进行降序排列
        page_size: 9, // 单页数据量
        page: 1,
      },
    };
  },

  watch: {
    //当你监听的数据发生变化，就会执行函数
    "filter.course_category": function () {
      this.get_course();
    },
    // "filter.ordering": function () {
    //   this.get_course();
    // },
    "filter.page_size": function () {
      this.get_course();
    },
    "filter.page": function () {
      this.get_course();
    },
  },

  methods: {
    choose: function (index) {
      this.category_list.forEach(function (c) {
        c.button = false;
      });
      this.category_list[index].button = true;
      // console.log(this.cells[index].selected);
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

    get_category() {
      // 获取课程分类信息
      this.$axios
        .get(`${this.$settings.base_url}/course/categories/`)
        .then((response) => {
          console.log("课程分类", response.data);
          this.category_list = response.data;
        })
        .catch(() => {
          this.$message({
            message: "获取课程分类信息有误，请联系客服工作人员",
          });
        });
    },

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
        .get(`${this.$settings.base_url}/course/project/`, {
          params: filters,
        })
        .then((response) => {
          // console.log(response.data);
          this.course_list = response.data;
          this.course_total = response.data.count;
          console.log("返回的课程", this.course_list);
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
    this.get_category();
  },
};
</script>

<style scoped>
section {
  padding: 60px 0;
}

.section-bg {
  background-color: #f7f8fa;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #ffc107;
  bottom: 0;
  left: calc(50% - 25px);
}

.section-title p {
  margin-bottom: 0;
  font-size: 14px;
  color: #aab3c7;
}

/* 项目实战样式 */
.portfolio {
  margin-top: 80px;
  background-color: #f6f6f6;
}

.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 25px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 18px 10px 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #444444;
  margin: 0 3px 10px 3px;
  transition: all ease-in-out 0.3s;
  background: #fafafc;
  border-radius: 50px;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
  color: #414c64;
  background: #ffc107;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-item {
  margin-bottom: 30px;
  overflow: hidden;
}

.portfolio .portfolio-item img {
  position: relative;
  top: 0;
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: -50px;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: #4d4c4b;
  padding: 4px 20px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  margin-top: 6px;
  margin-bottom: 4px;
}

.portfolio .portfolio-item .portfolio-info p {
  color: #fff;
  font-size: 14px;
  margin-bottom: 2px;
}


.portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 50px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: rgba(255, 255, 255, 0.7);
  transition: ease-in-out 0.3s;
  margin-top: 10px;
}

.portfolio .portfolio-item .portfolio-info .preview-link{
  position: absolute;
  right: 55px;
  font-size: 20px;
  top: calc(50% - 18px);
  color: rgba(255, 255, 255, 0.7);
  transition: ease-in-out 0.3s;
  margin-top: 9px;

}

.portfolio .portfolio-item .portfolio-info .preview-link:hover,
.portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: rgb(230, 87, 87);
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 15px;
}

.portfolio .portfolio-item:hover img {
  top: -30px;
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 0;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}

.course_pagination {
  text-align: center;

  padding: 30px;
}

.el-pagination {
  size: 20px !important;
}
</style>
