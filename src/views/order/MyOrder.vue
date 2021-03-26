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
        <li class="col-md-2 ">{{ item.updated_time }}</li>
        <li class="col-md-1 ">{{ item.order_courses[0].price }}</li>
        <li class="col-md-1"> {{ item.order_courses[0].real_price }}</li>
        <li class="col-md-1">{{ item.order_status }}</li>
        <li class="col-md-1">
          <div class="study">
            <span @click="goToL">立即学习</span>
          </div>
        </li>
      </ul>
      <ul class="row last-row"></ul>
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
    };
  },
  created() {
    this.token = this.$cookies.get("token");
    this.id = this.$cookies.get("id");
    //当项目组件一创建，就向后台发请求，拿回项目数据
    this.$axios
      .get(this.$settings.base_url + "/order/buys/" + this.id + "/")
      .then((response) => {
        console.log(response.data.data);
        this.myOrderList = response.data.data;
      })
      .catch((error) => {});
  },

  methods: {},
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