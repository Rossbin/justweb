<template>
  <div class="detail">
    <div class="head_sticky">
      <Header />
    </div>
    <div class="main">
      <div class="course-info">
        <!--                 视频黑框尺寸，已经写死了-->

        <div class="wrap-left">
          <div
            v-if="srcvideo === ''"
            style="text-align: center; line-height: 388px; font-size: 80px"
          >
            <el-button
              type="info"
              icon="el-icon-loading"
              circle
              @click="playUrl()"
            >
            </el-button>
          </div>
          <videoPlayer
            v-else
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
          >
          </videoPlayer>
        </div>
        <div class="wrap-right">
          <h3 class="course-name">{{ course_info.name }}</h3>
          
          <p class="data">
            课程总时长：{{ course_info.sections }}课时/{{
              course_info.pub_sections
            }}小时
          </p>
          
          <p class="data">课程类型：{{ course_info.project_name }}课</p>
          <p class="data">难度：{{ course_info.level_name }}</p>
          <p class="data">{{ course_info.students }}人在学</p>
          <div class="sale-time">
            <p class="sale-type">
              优惠价: <span class="original_price">¥{{ course_info.price }}</span>
            </p>
            <p class="expire"></p>
          </div>
          <div class="buy">
            <div class="buy-btn">
              <button class="buy-now" @click="buy_now(course_info)">
                立即购买
              </button>
              <el-button
                class="praise"
                circle
                :class="{ praise_model: praiseShow }"
                @click="praiseUpdate()"
                ><i
                  class="fa fa-heart"
                  style="margin-bottom: -2px; display: block"
                  aria-hidden="true"
                ></i
              ></el-button>
            </div>
            <!-- <div class="add-cart" @click="add_cart(course_info.id)"> -->
            <!-- <img src="@/assets/img/cart-yellow.svg" alt="">加入购物车 -->
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div class="course-tab">
        <ul class="tab-list">
          <li :class="tabIndex == 1 ? 'active' : ''" @click="tabIndex = 1">
            详情介绍
          </li>
          <li :class="tabIndex == 2 ? 'active' : ''" @click="tabIndex = 2">
            课程章节 <span :class="tabIndex != 2 ? 'free' : ''"></span>
          </li>
          <li :class="tabIndex == 3 ? 'active' : ''" @click="get_comment()">
            用户评论
          </li>
          <!-- <li :class="tabIndex == 4 ? 'active' : ''" @click="tabIndex = 4">
            常见问题
          </li> -->
        </ul>
      </div>
      <div class="course-content">
        <div class="course-tab-list">
          <div class="tab-item" v-if="tabIndex == 1">
            <div class="tab-item-title">
              <p class="chapter">详情介绍</p>
            </div>
            <div
              class="chapter-item"
              style="
                height: 400px;
                overflow-y: scroll;
                overflow-x: hidden;
                overflow-y: auto;
              "
            >
              <div class="course-brief" v-text="course_info.brief"></div>
            </div>
          </div>
          <div class="tab-item" v-if="tabIndex == 2">
            <div class="tab-item-title">
              <p class="chapter">课程章节</p>
              <p class="chapter-length">
                共{{ course_chapters.length }}章
                {{ course_info.sections }}个课时
              </p>
            </div>
            <div
              style="
                height: 400px;
                overflow-y: scroll;
                overflow-x: hidden;
                overflow-y: auto;
              "
            >
              <div
                class="chapter-item"
                v-for="chapter in course_chapters"
                :key="chapter.name"
              >
                <p class="chapter-title">
                  <img src="@/assets/img/enum.svg" alt="" />第{{
                    chapter.chapter
                  }}章·{{ chapter.name }}
                </p>
                <ul class="section-list">
                  <li
                    class="section-item"
                    v-for="section in chapter.coursesections"
                    :key="section.name"
                  >
                    <p class="name">
                      <span class="index"
                        >{{ chapter.chapter }}-{{ section.orders }}</span
                      >
                      {{ section.name
                      }}<span class="free" v-if="section.free_trail">免费</span>
                    </p>
                    <p class="time">
                      {{ section.duration }}
                      <img src="@/assets/img/chapter-player.svg" />
                    </p>

                    <button class="try" v-if="section.free_trail">
                      立即试学
                    </button>
                    <button class="try" v-else @click="buy_now(course_info)">
                      立即购买
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-item" v-if="tabIndex == 3">
            <div class="tab-item-title">
              <p class="chapter">用户评论</p>
            </div>
            <div
              class="chapter-item"
              style="
                height: 400px;
                overflow-y: scroll;
                overflow-x: hidden;
                overflow-y: auto;
              "
            >
              <el-row
                :gutter="20"
                style="margin-bottom: 20px"
                v-for="(item, index) in comment_port"
                :key="index"
              >
                <div v-if="!item.comment"></div>
                <el-col v-else :span="20" :offset="2">
                  <el-card
                    class="box-card"
                    shadow="hover"
                    style="color: #66686b"
                  >
                    <div slot="header" class="clearfix">
                      <el-col :span="2">
                        <div class="demo-basic--circle">
                          <div class="block">
                            <el-avatar
                              :size="50"
                              :src="$settings.base_url + '/media/' + item.icon"
                            ></el-avatar>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="6" :offset="1" style="">
                        <span>{{ item.first_name }}</span>
                        <div class="row">
                          <span
                            class="col-md-8"
                            style="display: block; padding-top: 6px"
                            >{{ item.updated_time }}</span
                          >
                        </div>
                      </el-col>
                    </div>
                    <div class="text item">
                      {{ item.comment }}
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2" style="margin-top: 20px"
                  ><p class="chapter">评论内容</p></el-col
                >
              </el-row>
              <el-row :gutter="20">
                <el-col :span="20" :offset="2">
                  <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="textarea"
                    maxlength="60"
                    show-word-limit
                  >
                  </el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-button
                    type="primary"
                    style="margin-top: 10px"
                    @click="comment_put()"
                    >发表评论</el-button
                  >
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="tab-item" v-if="tabIndex == 4">常见问题</div>
        </div>
        <div class="course-side">
          <div class="teacher-info">
            <h4 class="side-title"><span>授课老师</span></h4>
            <div class="teacher-content">
              <div class="cont1">
                <img :src="course_info.teacher.image" />
                <div class="name">
                  <p class="teacher-name">
                    {{ course_info.teacher.name }}
                    {{ course_info.teacher.title }}
                  </p>
                  <p class="teacher-title">
                    {{ course_info.teacher.signature }}
                  </p>
                </div>
              </div>
              <p class="narrative">{{ course_info.teacher.brief }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Head";
import Footer from "@/components/Footer";

// 加载组件
import { videoPlayer } from "vue-video-player";

export default {
  name: "Detail",
  data() {
    return {
      // 点赞功能实现
      praise: false,
      // 点赞模块绑定样式
      praiseShow: false,
      // 用户id
      id: 0,
      // 评论接口获取
      comment_port: [],
      // 评论数据
      textarea: "",
      srcvideo: "",
      tabIndex: 2, // 当前选项卡显示的下标
      course_id: 0, // 当前课程信息的ID
      course_info: {
        teacher: {},
      }, // 课程信息
      course_chapters: [], // 课程的章节课时列表
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 5.0], //播放速度
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        sources: [
          {
            // 播放资源和资源格式
            type: "video/mp4",
            src: "", //视频地址（必填）
          },
        ],
        //封面
        poster: "",
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      },
    };
  },
  created() {
    this.id = this.$cookies.get("id");
    this.get_course_id();
    this.get_course_data();
    this.get_chapter();
    // 课程视频加载
    // this.playUrl();
  },
  methods: {
    playUrl: function () {
      this.$axios
        .get(`${this.$settings.base_url}/course/free/${this.course_id}/`)
        .then((response) => {
          // window.console.log(response.data);
          this.playerOptions["sources"][0]["src"] =
            response.data.attachment_path;
          this.playerOptions["poster"] = response.data.course_img;
          this.srcvideo = true;
        })
        .catch(() => {
          this.$message({
            message: "对不起，访问页面出错！请联系客服工作人员！",
          });
        });
    },

    // 点赞功能初始获取数据
    praiseGet: function () {
      this.$axios({
        method: "post",
        url: `${this.$settings.base_url}/user/praise/`,
        data: {
          course: this.course_id,
          user: this.id,
        },
      })
        .then((response) => {
          if (response.data.code == 1) {
            // console.log(response.data);
            this.praiseShow = response.data.data.praise;
          } else {
            this.praiseShow = false;
          }
        })
        .catch((error) => {
          // window.console.log(error.response);
        });
    },

    onPlayerPlay() {
      // 当视频播放时，执行的方法
      console.log("视频开始播放");
      //加广告
    },
    onPlayerPause() {
      // 当视频暂停播放时，执行的方法
      console.log("视频暂停，可以打开广告了");
      //盖张图片
    },
    get_course_id() {
      // 获取地址栏上面的课程ID
      this.course_id = this.$route.params.pk || this.$route.query.pk;
      if (this.course_id < 1) {
        let _this = this;
        _this.$alert("对不起，当前视频不存在！", "警告", {
          callback() {
            _this.$router.go(-1);
          },
        });
      }
    },
    get_course_data() {
      // ajax请求课程信息
      this.$axios
        .get(`${this.$settings.base_url}/course/free/${this.course_id}/`)
        .then((response) => {
          // window.console.log(response.data);
          this.course_info = response.data;
          console.log(this.course_info);
        })
        .catch(() => {
          this.$message({
            message: "对不起，访问页面出错！请联系客服工作人员！",
          });
        });
    },

    get_chapter() {
      // 获取当前课程对应的章节课时信息
      // http://127.0.0.1:8000/course/chapters/?course=(pk)
      this.$axios
        .get(`${this.$settings.base_url}/course/chapters/`, {
          params: {
            course: this.course_id,
          },
        })
        .then((response) => {
          this.course_chapters = response.data;
        })
        .catch((error) => {
          window.console.log(error.response);
        });
    },
    buy_now(course_info) {
      let token = this.$cookies.get("token"); // let定义一个变量，取浏览器的cookies,token为登录后的标识
      if (!token) {
        this.$message({
          message: "您还没有登录，请先登录",
        });
        return false;
      }
      // 如果登录了，就开始发Ajax请求给后端
      this.$axios({
        method: "post",
        url: this.$settings.base_url + "/order/pay/",
        data: {
          // 课程数据
          total_amount: course_info.price,
          subject: course_info.name,
          pay_type: 1,
          course: [course_info.id],
        },
        headers: { Authorization: "jwt " + token }, // 头部携带jwt+token登录后的信息
      })
        .then((response) => {
          console.log(response.data);
          let pay_url = response.data; // 将拿取到的响应支付宝跳转数据赋值给pay_url
          //前端发送get请求
          open(pay_url, "_self"); // _self在当前页面跳转支付
        })
        .catch((error) => {});
    },

    // 获取评论
    get_comment() {
      // http://127.0.0.1:8000/user/comment/
      this.tabIndex = 3;
      let formData = new FormData();
      formData.append("course", this.course_id);
      this.$axios({
        method: "post",
        url: `${this.$settings.base_url}/user/comment/`,
        data: formData,
      })
        .then((response) => {
          if (response.data.code == "1") {
            // console.log(response.data);
            this.comment_port = response.data.data;
          } else {
            this.$message({
              message: "该课程暂时还没有人评论哦！ 赶紧来占1楼吧",
            });
          }
        })
        .catch((error) => {});
    },

    // 发表评论
    comment_put() {
      if (this.id) {
      } else {
        this.id = "0";
      }
      let formData = new FormData();
      formData.append("course", this.course_id);
      formData.append("user", this.id);
      formData.append("comment", this.textarea);
      // 加载
      const loading = this.$loading({
        lock: true,
        text: "正在向后端努力的提交信息。。。",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 3000);
      this.$axios({
        method: "patch",
        url: `${this.$settings.base_url}/user/comment/`,
        data: formData,
      })
        .then((response) => {
          if (response.data.code == 1) {
            console.log("修改后返回的", response);
            var that = this;
            setTimeout(function () {
              that.$notify({
                title: "成功",
                message: "发表成功，请刷新后查看",
                type: "success",
              });
            }, 3000);
          } else {
            this.$message({
              message: "抱歉，请先购买课程再评论！",
            });
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    // 点赞功能更新
    praiseUpdate() {
      let token = this.$cookies.get("token"); // let定义一个变量，取浏览器的cookies,token为登录后的标识
      if (!token) {
        this.userShow = true;
        this.$message({
          message: "您还没有登录，请先登录",
        });
        return false;
      }
      this.praise = !this.praiseShow;
      // console.log(this.praise);
      const loading = this.$loading({
        lock: true,
        text: "正在向后端努力的提交信息。。。",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$axios({
        method: "patch",
        url: `${this.$settings.base_url}/user/praise/`,
        data: {
          course: this.course_id,
          user: this.id,
          praise: this.praise,
        },
      })
        .then((response) => {
          if (response.data.code == 1) {
            console.log(response.data);
            this.praiseShow = response.data.data.praise;
          } else {
            this.praiseShow = false;
            this.$message({
              message: "请购买该课程后再操作！",
            });
          }
        })
        .catch((error) => {
          // window.console.log(error.response);
        });
    },
  },
  components: {
    Header,
    Footer,
    videoPlayer, // 注册组件
  },

  // 页面渲染完成后自动挂载
  mounted() {
    this.playUrl();
    this.praiseGet();
  },
};
</script>

<style scoped>
/* 导航栏吸顶 */
.head_sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 5;
}

.main {
  background: #fff;
  padding-top: 30px;
  margin-top: 5px;
}

.course-info {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.wrap-left {
  float: left;
  width: 690px;
  height: 388px;
  background-color: #000;
  border: 1px solid #f40;
  border-radius: 8px !important;
  overflow: hidden;
}

.wrap-right {
  float: left;
  position: relative;
  height: 388px;
  margin-left: 25px;
}

.course-name {
  font-size: 2.4rem;
  color: #333;
  padding: 10px 0px;
  letter-spacing: 0.45px;
  display: block;
  width: 480px;
}

.data {
  padding-left: 10px;
  padding-right: 23px;
  /* padding-bottom: 16px; */
  margin-bottom: 5px;
  font-size: 16px;
  color: #777171;
  text-align: left;
}

/* 价格 */
.original_price {
  font-family: verdana, arial;
  font-style: normal;
  color: #f40;
  font-size: 50px;
  padding-left: 15px;
}

.sale-time {
  width: 464px;
  /* background: rgba(248, 247, 246, 0.5); */
  font-size: 14px;
  color: #f30e0e;
  padding: 10px 23px;
  overflow: hidden;
  /* margin-left: 10px; */
  /* padding-left: ; */
}

.sale-type {
  font-size: 16px;
  color: rgb(199, 27, 27);
  letter-spacing: 0.36px;
  float: left;
  padding-left: -6px;
}

.sale-time .expire {
  font-size: 14px;
  color: #fff;
  float: right;
}

.sale-time .expire .second {
  width: 24px;
  display: inline-block;
  background: #fafafa;
  color: #5e5e5e;
  padding: 6px 0;
  text-align: center;
}

.course-price {
  background: #fff;
  font-size: 14px;
  color: #4a4a4a;
  padding: 5px 23px;
}

.discount {
  font-size: 26px;
  color: #fa6240;
  margin-left: 10px;
  display: inline-block;
  margin-bottom: -5px;
}

.original {
  font-size: 14px;
  color: #9b9b9b;
  margin-left: 10px;
  text-decoration: line-through;
}

.buy {
  width: 464px;
  padding: 0px 23px;
  position: absolute;
  left: 0;
  bottom: 20px;
  overflow: hidden;
  margin-bottom: -15px;
}

.buy .buy-btn {
  float: left;
}

.buy .buy-now {
  width: 125px;
  height: 40px;
  border: 0;
  background: #ffc210;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  margin-right: 15px;
  outline: none;
}

.buy .free {
  width: 125px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 15px;
  background: #fff;
  color: #ffc210;
  border: 1px solid #ffc210;
}

.add-cart {
  float: right;
  font-size: 14px;
  color: #ffc210;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
}

.add-cart img {
  width: 20px;
  height: 18px;
  margin-right: 7px;
  vertical-align: middle;
}

.course-tab {
  width: 100%;
  background: #fff;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px 0 #f0f0f0;
}

.course-tab .tab-list {
  width: 1200px;
  margin: auto;
  color: #4a4a4a;
  overflow: hidden;
}

.tab-list li {
  float: left;
  margin-right: 15px;
  padding: 26px 20px 16px;
  font-size: 17px;
  cursor: pointer;
}

.tab-list .active {
  color: #ffc210;
  border-bottom: 2px solid #ffc210;
}

.tab-list .free {
  color: #fb7c55;
}

.course-content {
  width: 1200px;
  margin: 0 auto;
  background: #fafafa;
  overflow: hidden;
  padding-bottom: 40px;
}

.course-tab-list {
  width: 880px;
  height: auto;
  padding: 20px;
  background: #fff;
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 4px 0 #f0f0f0;
}

.tab-item {
  width: 880px;
  background: #fff;
  padding-bottom: 20px;
  box-shadow: 0 2px 4px 0 #f0f0f0;
}

.tab-item-title {
  justify-content: space-between;
  padding: 25px 20px 11px;
  border-radius: 4px;
  margin-bottom: 20px;
  border-bottom: 1px solid #333;
  border-bottom-color: rgba(51, 51, 51, 0.05);
  overflow: hidden;
}

.chapter {
  font-size: 17px;
  color: #4a4a4a;
  float: left;
}

.chapter-length {
  float: right;
  font-size: 14px;
  color: #9b9b9b;
  letter-spacing: 0.19px;
}

.chapter-title {
  font-size: 16px;
  color: #4a4a4a;
  letter-spacing: 0.26px;
  padding: 12px;
  background: #eee;
  border-radius: 2px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.chapter-title img {
  width: 18px;
  height: 18px;
  margin-right: 7px;
  vertical-align: middle;
}

.section-list {
  padding: 0 20px;
}

.section-list .section-item {
  padding: 15px 20px 15px 36px;
  cursor: pointer;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.section-item .name {
  font-size: 14px;
  color: #666;
  float: left;
}

.section-item .index {
  margin-right: 5px;
}

.section-item .free {
  font-size: 12px;
  color: #fff;
  letter-spacing: 0.19px;
  background: #ffc210;
  border-radius: 100px;
  padding: 1px 9px;
  margin-left: 10px;
}

.section-item .time {
  font-size: 14px;
  color: #666;
  letter-spacing: 0.23px;
  opacity: 1;
  transition: all 0.15s ease-in-out;
  float: right;
}

.section-item .time img {
  width: 18px;
  height: 18px;
  margin-left: 15px;
  vertical-align: text-bottom;
}

.section-item .try {
  width: 86px;
  height: 28px;
  background: #ffc210;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 20px;
  top: 10px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  border: none;
}

.section-item:hover {
  background: #fcf7ef;
  box-shadow: 0 0 0 0 #f3f3f3;
}

.section-item:hover .name {
  color: #333;
}

.section-item:hover .try {
  opacity: 1;
}

.course-side {
  width: 300px;
  height: auto;
  margin-left: 20px;
  float: right;
}

.teacher-info {
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px 0 #f0f0f0;
}

.side-title {
  font-weight: normal;
  font-size: 17px;
  color: #4a4a4a;
  padding: 18px 14px;
  border-bottom: 1px solid #333;
  border-bottom-color: rgba(51, 51, 51, 0.05);
}

.side-title span {
  display: inline-block;
  border-left: 2px solid #ffc210;
  padding-left: 12px;
}

.teacher-content {
  padding: 30px 20px;
  box-sizing: border-box;
}

.teacher-content .cont1 {
  margin-bottom: 12px;
  overflow: hidden;
}

.teacher-content .cont1 img {
  width: 54px;
  height: 54px;
  margin-right: 12px;
  float: left;
}

.teacher-content .cont1 .name {
  float: right;
}

.teacher-content .cont1 .teacher-name {
  width: 188px;
  font-size: 16px;
  color: #4a4a4a;
  padding-bottom: 4px;
}

.teacher-content .cont1 .teacher-title {
  width: 188px;
  font-size: 13px;
  color: #9b9b9b;
  white-space: nowrap;
}

.teacher-content .narrative {
  font-size: 14px;
  color: #666;
  line-height: 24px;
}

/* 购物车css */
.add-cart {
  margin-right: 80px;
}

.praise {
  font-size: 40px;
  margin-left: 45px;
  color: #fafafa;
  background-color: red;
  
}

.praise:hover {
  background-color: rgb(253, 249, 249);
  border: 1px solid rgb(250, 247, 247);
  color: rgb(226, 32, 32);
}

.praise_model {
  background-color: rgb(253, 249, 249);
  border: 1px solid rgb(250, 247, 247);
  color: rgb(226, 32, 32);
}

/* 课程详情介绍 */
.course-brief{
  text-align:justify;
  font-size: 26px;
  font-weight: bold;
  color: #9b9b9b;
  width: 700px;
  text-indent:50px;
  letter-spacing:2px;
  line-height:200%;
  text-shadow:1px 0px #131212
}
</style>