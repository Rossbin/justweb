<template>
  <div class="video-box">
    <!-- 播放器 -->
    <div class="video-left">
      <div class="section-number">
        <div class="back">
          <router-link :to="'/order/myorder/'" style="text-decoration: none"
            ><i class="fa fa-reply-all" aria-hidden="true">
              &nbsp;返回</i
            ></router-link
          >
        </div>

        <h1>正在播放的是：{{ course_info.name }}</h1>
      </div>

      <!-- <div class="play-box" style="height: 765px"> -->
      <div class="play-box" :style="autoHeight">
        <div v-if="srcvideo === ''" style="text-align:center; line-height: 388px; font-size: 80px">
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
          v-bind:class="{'video-hight':show_hight}"
          :playsinline="true"
          :options="playerOptions"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
        >
        </videoPlayer>
      </div>
    </div>

    <!-- 章节选择器 -->
    <div class="nav-bar">
      <!-- 章节显示控制按钮 -->
      <p class="nav-menu">
        <i
          class="fa fa-angle-double-right"
          aria-hidden="true"
          @click="close()"
          v-show="showIconRight"
        ></i>
        <i
          class="fa fa-angle-double-left"
          aria-hidden="true"
          v-show="showIconLeft"
          @click="close()"
        ></i>
      </p>
      <!-- <div class="column" style="display: none"> -->
      <div class="column" v-bind:style="{ display: show }">
        <div class="top-menu">
          <div class="section-name">
            <p class="name">{{ course_info.name }}</p>
            <p class="num">
              共{{ course_info.sections }}个课时
              <span>/预计学习{{ course_info.pub_sections }}小时</span>
            </p>
            <div>
              <p class="item">告别一个人孤单的学习</p>
            </div>
          </div>

          <!-- 大纲和提问切换 -->
          <div class="switch-list">
            <span class="active-tab">课程章节目录表</span>
            <!-- <span>讨论提问 </span> -->
          </div>
        </div>

        <!-- 章节列表 -->
        <div class="chapter-box" style="height: 447px">
          <ul>
            <!-- 章节名字 -->
            <li
              class="chapter"
              v-for="chapter in course_chapters"
              :key="chapter.name"
            >
              <div class="chapter-title">
                第{{ chapter.chapter }}章&nbsp;&nbsp;{{ chapter.name }}
              </div>
              <ul>
                <!-- 章节点视频 -->
                <li>
                  <div
                    class="section active"
                    v-for="section in chapter.coursesections"
                    :key="section.name"
                  >
                    <h5
                      class="section-number"
                      @click="watchVideo((src = section.section_link))"
                    >
                      {{ chapter.chapter }}-{{ section.orders }}&nbsp;&nbsp;{{
                        section.name
                      }}
                    </h5>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 加载组件
import { videoPlayer } from "vue-video-player";
let windowHeight = parseInt(window.innerHeight);
export default {
  name: "Play",

  data() {
    return {
      show_hight: false,    // 网页全屏的播放样式
      srcvideo: "", //视频地址
      show: "",     // 侧边栏是否显示，display:none为不显示
      showIconLeft: false,
      showIconRight: true,
      windowHeight: windowHeight,
      autoHeight: {
        height: "",
      },

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
            src: this.srcvideo, //视频地址（必填）
          },
        ],
        //封面
        poster: "",
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      },
    };
  },

  // 以下触发的时间早，组件都还没加载出来
  beforeRouteEnter(to, from, next) {
    console.log("局部盘查");
    next((vm) => {
      if (!vm.$cookies.get("token")) {
        vm.$message({
          message: "您还没有登录，请先登录",
        });
        next("/home");
      } else {
        next();
      }
    });
  },

  // 在渲染该组件的对应路由被confirm前调用
  // 不！能！获取组件实例`this`
  // 因为当守卫执行前，组件实例还没被创建

  created() {
    this.playerOptions.sources[0].src = this.src;
    window.addEventListener("resize", this.getHeight);
    this.getHeight();

    this.get_course_id();
    this.get_course_data();
    this.get_chapter();
  },
  methods: {
    watchVideo(src) {
      //打开视频
      console.log(this.sectionss);
      this.playerOptions["sources"][0]["src"] = this.src;
      this.srcvideo = this.src;
    },

    // 播放video自适应高度
    getHeight() {
      this.autoHeight.height = windowHeight + 0  + "px";
    },

    close() {
      // console.log(this.show);
      if (this.show) {
        this.show = "";
        this.showIconRight = true;
        this.showIconLeft = false;
        this.show_hight = false;
      } else {
        this.show = "none";
        this.showIconLeft = true;
        this.showIconRight = false;
        this.show_hight = true;
      }
    },
    playUrl: function() {
      this.$axios
        .get(`${this.$settings.base_url}/course/free/${this.course_id}/`)
        .then((response) => {
          // window.console.log(response.data);
          this.playerOptions["sources"][0]["src"] = response.data.attachment_path
          this.playerOptions["poster"] = response.data.course_img;
          this.srcvideo = true;
        })
        .catch(() => {
          this.$message({
            message: "对不起，访问页面出错！请联系客服工作人员！",
          });
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
  },
  components: {
    videoPlayer, // 注册组件
  },
  mounted() {
    this.playUrl();
  },

  destroyed() {
    window.removeEventListener("resize", this.getHeight);
  },
};
</script>

<style scoped>
.video-box {
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  background: #000;
  position: relative;
}

.video-box .video-left {
  flex: 1;
  position: relative;
}

.video-box .video-left .section-number {
  width: 100%;
  height: 70px;
  margin: 0 auto;
  padding-left: 20px;
  color: #fff;
  background: #333;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-box .video-left .section-number .back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 24px;
  color: #fff;
  background: #a0a2a8;
  border-radius: 0 2px 2px 0;
  font-size: 14px;
  position: absolute;
  left: 0;
  top: 10px;
  cursor: pointer;
}

.video-box .video-left .section-number .back i {
  /* width: 8px; */
  height: auto;
  margin-right: 8px;
  color: aliceblue;
}

.video-box .video-left .section-number h1 {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
}

/* 章节选择侧边栏 */
.video-box .nav-bar {
  align-items: center;
  position: relative;
  z-index: 10;
}

.video-box .nav-bar .nav-menu {
  position: absolute;
  left: -29px;
  top: 10px;
  z-index: 10;
  width: 28px;
  height: 25px;
  cursor: pointer;
  border-radius: 2px 0px 0px 2px;
  background: #a0a2a8;

  align-items: center;
  justify-content: center;
}
.video-box .nav-bar .nav-menu i {
  color: aliceblue;
  border: 0;
  vertical-align: middle;
  margin-left: 7px;
  font-size: 25px;
}

.video-box .nav-bar .column {
  width: 359px;
  height: 100%;
  z-index: 10;
  background: #282828;
  -webkit-animation: articlemove-data-v-559c3ed2 0.12s ease;
  animation: articlemove-data-v-559c3ed2 0.12s ease;
  display: flex;
  flex-direction: column;
}

.video-box .nav-bar .column .section-name {
  width: 100%;
  padding: 30px 18px 18px;
}

.video-box .nav-bar .column .section-name .name {
  width: 100%;
  font-size: 18px;
  color: #fff;
}

.video-box .nav-bar .column .section-name .num {
  width: 100%;
  font-size: 14px;
  color: #9d9d9d;
  margin-top: 3px;
}

.video-box .nav-bar .column .section-name div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.video-box .nav-bar .column .section-name div .item {
  width: 180px;
  font-size: 14px;
  color: #d0d0d0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.video-box .nav-bar .column .switch-list {
  width: 100%;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #333;
}

.video-box .nav-bar .column .switch-list .active-tab {
  color: #e9e9e9;
  font-size: 17px;
  border-bottom: 2px solid #f5a623;
  z-index: 5;
}

.video-box .nav-bar .column .switch-list span {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #d0d0d0;
  position: relative;
}

.video-box .nav-bar .column .chapter-box {
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  list-style: none;
}
.video-box .nav-bar .column .chapter-box .chapter {
  list-style: none;
  height: auto;
  position: relative;
}
.video-box .nav-bar .column .chapter-box .chapter-title {
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 18px;
  position: relative;
  font-size: 16px;
  color: #e9e9e9;
  letter-spacing: 0.23px;
}

.video-box .nav-bar .column .chapter-box .active,
.video-box .nav-bar .column .chapter-box .section:hover {
  color: #fff !important;
  background: #333;
}

.video-box .nav-bar .column .chapter-box .section {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #9b9b9b;
  position: relative;
  cursor: pointer;
  padding: 0 18px;
}

.video-box .nav-bar .column .chapter-box .section section {
  display: flex;
  align-items: center;
}

.video-box .nav-bar .column .chapter-box .section .section-number {
  width: 200px;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 8px;
  margin-right: 30px;
  font-size: 13.4px;
  letter-spacing: 0.19px;
}

.video-box .nav-bar .column .chapter-box .section .section-number:hover {
  color: #f5a623;
}

.style {
  display: none;
}


.video-hight{
  padding-right: 120px;
  padding-left: 120px;
}
</style>