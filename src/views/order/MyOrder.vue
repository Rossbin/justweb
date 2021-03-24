<template>
  <div class="box">
    <div class="order_info">
      <ul>
        <li class="col-md-6">订单信息</li>
        <li class="col-md-1">购买日期</li>
        <!-- <li>优惠</li> -->
        <li class="col-md-1">单价 (元)</li>
        <!-- <li>抵扣</li> -->
        <li class="col-md-1">实付金额</li>
        <li class="col-md-1">交易状态</li>
        <li class="col-md-1">交易操作</li>
      </ul>
    </div>
    <div class="container">
      <el-table
      :data="myOrderList"
      border
      style="width: 100%">
        <!--订单信息-->
      <el-table-column
        width="420">
        <template slot-scope="scope">
          <div class="order_num">
            <p>{{scope.row.date}} 订单号：{{ scope.row.order_number }}</p>

          </div>
          <div class="item" id="first">
            <ul>
              <li v-for='(item,index) in scope.row.orderdetail_list' :key='index'>
                {{item.course_name}}
              </li>
            </ul>
          </div>
        </template>
      </el-table-column>
        <!--有效期-->
      <el-table-column
        width="150">
        <template slot-scope="scope">
          <div class="order_num" style="visibility: hidden;">
            <p>111</p>

          </div>
          <div class="item">
            <ul>
              <li v-for='(item,index) in scope.row.orderdetail_list' :key='index'>
                {{item.valid_period_display}}

              </li>
            </ul>
          </div>
        </template>
      </el-table-column>
        <!--单价-->
      <el-table-column  width="150">
        <template slot-scope="scope">
           <div class="order_num" style="visibility: hidden;">
            <p>111</p>

          </div>
          <div class="item">
            <ul>
              <li v-for='(item,index) in scope.row.orderdetail_list' :key='index'>
                {{item.valid_period_display}}

              </li>
            </ul>
          </div>
        </template>
      </el-table-column>
            <!-- 实付金额 -->
      <el-table-column

        width="150">
        <template slot-scope="scope">
          <div class="order_num" style="visibility: hidden;">
            <p>111</p>

          </div>
          <div class="item" >
            <ul>
              <li v-for='(item,index) in scope.row.orderdetail_list' :key='index'>
               <p v-if="item.price" class="original"> {{item.original_price}}</p>
               <p  class="price"> {{item.price}}</p>

              </li>
            </ul>
          </div>
        </template>
      </el-table-column>

      <!-- <el-table-column

        width="110">
        <template slot-scope="scope">
           <div class="order_num" style="visibility: hidden;">
            <p>111</p>

          </div>
          <div class="item">
            <ul>
              <li v-for='(item,index) in scope.row.orderdetail_list' :key='index'>
                {{item.valid_period_display}}

              </li>
            </ul>
          </div>
        </template>
      </el-table-column>

        <el-table-column
        width="100">
        <template slot-scope="scope">
          <div class="order_num" style="visibility: hidden;">
            <p>111</p>

          </div>
          <div class="item">
            {{scope.row.actual_amount}}
          </div>
        </template>
      </el-table-column> -->

      <!-- 交易状态 -->      
      <el-table-column
         width="150"
      >
       <template slot-scope="scope">
          <div class="order_num" style="visibility: hidden;">
            <p>111</p>

          </div>
          <div class="item" v-if="scope.row.status == '超时取消'" style="color: darkgrey">
            {{scope.row.status}}
          </div>
          <div class="item" v-else>
            {{scope.row.status}}
          </div>
        </template>
      </el-table-column>
      <!-- 交易操作 -->
      <el-table-column
         width="120"
      >
        <template slot-scope="scope">
          <div v-if="scope.row.status == '待支付'">

           <el-button type="success" @click.native.prevent = 'go_pay(scope.row.order_number,scope.row.actual_amount)'>去付款</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    name: "MyOrder",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        myOrderList:[]
      };
    },
    created(){
      this.get_my_order()
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      go_pay(order_number,actual_amount){
        this.$http.go_pay(order_number,actual_amount)
          .then(res=>{
          console.log(res)
           location.href = res.pay_url
        })
      },
      get_my_order(){

        this.$http.myOrderList()
          .then(res=>{
          this.myOrderList = res.data;
          console.log(this.myOrderList)
        })
      }
    }
  }
</script>
<style scoped>
  .box>ul {
    display: flex;
    justify-content: center;
  }

 
  .order_num p{
    font-size:16px;
    font-weight: 200;
    color: #7f7f7f;
  }

  .order_info>ul {
    display: flex;
    justify-content: center;
  }

  .order_info {
    width: 1200px;
    margin: 0 auto
  }

  .order_info > ul {
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    font-weight: 800;
    font-size: 14px;
    color: #909399;;
  }

  .order_info > ul > li:first-child {
    width: 400px;

  }


  .item ul li {
    margin-top: 40px;
  }
  .price{
    color: red;
  }
  .original{
    text-decoration: line-through;
  }
  .item{
    text-align: center;
  }
  #first{
    text-align: left;
  }
</style>
