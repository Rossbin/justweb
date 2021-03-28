<template>
  <div class="box">
    <div class="container order_info">
      <ul class="row order_tab">
        <li class="col-md-6">订单信息</li>
        <li class="col-md-2">购买日期</li>
        <li class="col-md-1">单价 (元)</li>
        <li class="col-md-1">实付金额</li>
        <li class="col-md-1">交易状态</li>
        <li class="col-md-1">交易操作</li>
      </ul>
      <ul
        class="row order_list"
        v-for="(item, index) in myOrderList"
        :key="index"
      >
        <li class="col-md-6">
          <div class="order_li">
            <div class="order_div">
              <img :src="item.order_courses[0].course.course_img" alt="" />

              <span>{{ item.order_courses[0].course.name }}</span>
              <span class="span_p">订单号：{{ item.out_trade_no }}</span>
            </div>
          </div>
        </li>
        <li class="col-md-2">{{ item.updated_time }}</li>
        <li class="col-md-1">{{ item.order_courses[0].price }}</li>
        <li class="col-md-1">{{ item.order_courses[0].real_price }}</li>
        <li class="col-md-1">{{ item.order_status }}</li>
        <li class="col-md-1">
          <div class="study">
            <router-link
              :to="'/plays/' + item.order_courses[0].course.id"
              style="text-decoration: none"
              ><span>立即学习</span></router-link
            >
          </div>
        </li>
      </ul>
      <ul class="row last-row">
        <li>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="filter.page"
            :page-sizes="[2, 3, 5, 10]"
            :page-size="filter.page_size"
            layout="sizes, prev, pager, next"
            :total="course_total"
          >
          </el-pagination>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyOrder",
  data() {
    return {
      token: "1",
      id: "1",
      url: this.$settings.base_url,
      myOrderList: [],
      filter: {
        page_size: 2, // 单页数据量
        page: 1,
      },
      course_total: 0,   // 当前课程的总数量
    };
  },
  created() {
    this.token = this.$cookies.get("token");
    this.id = this.$cookies.get("id");
    //当项目组件一创建，就向后台发请求，拿回项目数据
    this.get_course();
  },

  watch: {
    "filter.page_size": function () {
      this.get_course();
    },
    "filter.page": function () {
      this.get_course();
    },
  },

  methods: {
    handleSizeChange(val) {
      // 每页数据量发生变化时执行的方法
      this.filter.page = 1;
      this.filter.page_size = val;
    },
    handleCurrentChange(val) {
      // 页码发生变化时执行的方法
      this.filter.page = val;
    },

    get_course() {
      let filters = {
        ordering: this.filter.ordering, // 排序
      };
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

      this.$axios({
        params: filters,
        method: "get",
        url: this.$settings.base_url + "/order/buys/" + this.id + "/",
        data: {},
        headers: { Authorization: "jwt " + this.token }, // 头部携带jwt+token登录后的信息
      })
        .then((response) => {
          // console.log(response.data.data);
          this.myOrderList = response.data.data;
          this.course_total = response.data.count;
        })
        .catch((error) => {
          this.$message({
            message: "获取课程信息有误，请联系客服工作人员",
          });
        });
    },
  },
};
</script>

<style scoped>
.box {
  background: #f9f9f9;
  align-items: center;
}

.box > ul {
  display: flex;
  justify-content: center;
}

.order_num p {
  font-size: 16px;
  font-weight: 200;
  color: #7f7f7f;
}

.order_info > ul {
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px 1px hsl(0deg 0% 95% / 50%);
  border-radius: 6px;
}

.order_info {
  width: 1200px;
  margin: 0 auto;
}

.order_info > .order_tab {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  font-size: 14px;
  /* color: #909399; */
  color: #000;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 0px;
}

.order_info > ul > li:first-child {
  width: 400px;
}

.order_info > .order_list {
  border-top: 1px solid #909399;
  background: #fff;
  width: 100%;
  height: 160px;
  line-height: 160px;
  justify-content: space-between;
  font-weight: 550;
  font-size: 14px;
  color: #909399;
  border-radius: 2px;
  margin-bottom: 0px;
}

.order_div > span {
  float: right;
  font-size: 14px;
  font-weight: 200;

  margin-right: 15px;
  font-size: 20px;
  font-weight: 800;
  color: #000;
}

.order_div > .span_p {
  font-size: 12.7px;
  font-weight: 200;
  margin-top: -26px;
  margin-left: 20px;
  display: block;
  line-height: 20px;
  clear: both;
  width: 100%;
  color: #5a5b5e;
}

.order_div > img {
  margin-top: -20px;
  margin-left: -28px;
  max-width: 180px !important;
  height: auto !important;
  border-radius: 6px;
}

.last-row {
  margin-bottom: 20px;
  margin-top: 40px;
}

.study {
  padding-top: 60px;
  margin-left: -12px;
}

.study span {
  display: block;
  width: 100px;
  height: 42px;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  background: #fdfdfd;
  border-radius: 6px;
  font-size: 15.5px;
  color: rgb(250, 11, 11);
  border: 1px solid red;
}

.study span:hover {
  color: #fdfdfc;
  background: #ffc210;
  border: 1px solid #ffc210;
}
</style>