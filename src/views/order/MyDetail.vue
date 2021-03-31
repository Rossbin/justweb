<template>
  <div class="myinfo">
    <div class="container">
      <h1>我是个人资料</h1>
      <div class="info-content">
        <div class="row">
          <div class="col-md-4 right-part">
            <span><img :src="users.icon" alt="" /></span>
            <span class="name">昵称：{{ users.first_name }}</span>
          </div>
        </div>

        <div class="row">
          <el-switch
            v-model="value1"
            active-text="点击按钮修改"
            class="col-md-4 col-md-offset-9"
            @change="changeStatus($event)"
          >
          </el-switch>
        </div>

        <div class="info_table" v-show="display_info">
          <div class="row">
            <div class="col-md-4">
              <h1 style="font-size: 25px; font-weight: 800; color: #4a4a4a">
                基本信息
              </h1>
            </div>
          </div>
          <el-row :gutter="20" class="info-row">
            <el-col :span="6" :offset="1"
              ><div class="grid-content bg-purple">
                <span>用户名</span>{{ users.username }}
              </div></el-col
            >
            <el-col :span="7" :offset="4"
              ><div class="grid-content bg-purple">
                <span>性别</span>{{ users.gender }}
              </div></el-col
            >
          </el-row>
          <el-row :gutter="20" class="info-row">
            <el-col :span="6" :offset="1"
              ><div class="grid-content bg-purple">
                <span>昵称</span>{{ users.first_name }}
              </div></el-col
            >
            <el-col :span="7" :offset="4"
              ><div class="grid-content bg-purple">
                <span>邮箱</span>{{ users.email }}
              </div></el-col
            >
          </el-row>
          <el-row :gutter="20" class="info-row">
            <el-col :span="6" :offset="1"
              ><div class="grid-content bg-purple">
                <span>QQ号</span>{{ users.tencent }}
              </div></el-col
            >
            <el-col :span="7" :offset="3"
              ><div class="grid-content bg-purple">
                <span>电话号</span>{{ users.telephone }}
              </div></el-col
            >
          </el-row>
          <el-row :gutter="20" class="info-row">
            <el-col :span="18" :offset="1"
              ><div class="grid-content bg-purple">
                <span>个人签名</span>{{ users.signature }}
              </div></el-col
            >
          </el-row>
        </div>

        <!-- <div class="row info-row" v-show="display_info">
          <div class="col-md-4"><span>用户名</span>{{ users.username }}</div>
          <div class="col-md-4"><span>性别</span>{{ users.gender }}</div>
          <div class="col-md-4"><span>邮箱</span>{{ users.email }}</div>
          <div class="col-md-4"><span>昵称</span>{{ users.first_name }}</div>
          <div class="col-md-4"><span>QQ号</span>{{ users.tencent }}</div>
          <div class="col-md-4"><span>电话号</span>{{ users.telephone }}</div>
          <div class="col-md-4"><span>个人签名</span>{{ users.signature }}</div>
        </div> -->
        <div v-show="value1">
          <h1
            style="
              font-size: 25px;
              font-weight: 800;
              color: #4a4a4a;
              margin: 50px 0;
            "
          >
            基础信息修改
          </h1>
          <div class="row">
            <div class="col-md-4 col-md-offset-1">
              <el-form
                ref="form"
                :model="form"
                label-width="80px"
                enctype="multipart/form-data"
              >
                <el-upload
                  style="margin-bottom: 30px"
                  class="upload-demo"
                  drag
                  action="aaa"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                  <div class="el-upload__tip" slot="tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>

                <el-form-item label="昵称">
                  <el-input
                    v-model="form.first_name"
                    placeholder="请输入您的昵称"
                  ></el-input>
                </el-form-item>
                <el-form-item label="QQ号">
                  <el-input
                    v-model="form.tencent"
                    placeholder="请输入您的QQ号"
                  ></el-input>
                </el-form-item>
                <el-form-item label="性别" placeholder="请选择您的性别">
                  <el-radio-group v-model="form.gender">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="个人签名" placeholder="请输入您的个性签名">
                  <el-input type="textarea" v-model="form.signature"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" round @click="onSubmit"
                    >确定提交</el-button
                  >
                  <el-button type="danger" round @click="onCancle"
                    >放弃修改</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>

        <div class="email_info" v-show="value1">
          <h1
            style="
              font-size: 25px;
              font-weight: 800;
              color: #4a4a4a;
              margin: 50px 0;
            "
          >
            绑定邮箱修改&nbsp;&nbsp;<el-switch
              v-model="value_email"
              active-color="#13ce66"
            >
            </el-switch>
          </h1>

          <el-form
            v-show="value_email"
            :model="dynamicValidateForm"
            ref="dynamicValidateForm"
            label-width="100px"
            class="demo-dynamic"
          >
            <div class="row">
              <el-form-item
                class="col-md-4 col-md-offset-2"
                prop="email"
                label="邮箱"
                :rules="[
                  {
                    required: true,
                    message: '请输入邮箱地址',
                    trigger: 'blur',
                  },
                  {
                    type: 'email',
                    message: '请输入正确的邮箱地址',
                    trigger: ['blur', 'change'],
                  },
                ]"
              >
                <el-input v-model="dynamicValidateForm.email"></el-input>
              </el-form-item>
            </div>

            <el-form-item class="row">
              <el-button
                class="col-md-1 col-md-offset-2"
                type="primary"
                round
                @click="submitForm('dynamicValidateForm')"
                >提交</el-button
              >
              <el-button
                @click="resetForm('dynamicValidateForm')"
                class="col-md-1 col-md-offset-4"
                round
                >重置</el-button
              >
            </el-form-item>
          </el-form>
        </div>

        <div class="passwd_info" v-show="value1">
          <h1
            style="
              font-size: 25px;
              font-weight: 800;
              color: #4a4a4a;
              margin: 50px 0;
            "
          >
            用户密码修改&nbsp;&nbsp;<el-switch
              v-model="value_passwd"
              active-color="#13ce66"
            >
            </el-switch>
          </h1>

          <el-form
            v-show="value_passwd"
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <div class="row">
              <el-form-item label="原密码" class="col-md-4 col-md-offset-2">
                <el-input
                  type="password"
                  v-model="ruleForm.re_pass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </div>
            <div class="row">
              <el-form-item
                label="修改密码"
                prop="pass"
                class="col-md-4 col-md-offset-2"
              >
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </div>
            <div class="row">
              <el-form-item
                label="确认密码"
                prop="checkPass"
                class="col-md-4 col-md-offset-2"
              >
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </div>

            <div class="row">
              <el-form-item class="col-md-4 col-md-offset-2">
                <el-button type="primary" @click="submitForm('ruleForm')" round
                  >确认修改</el-button
                >
                <el-button @click="resetForm('ruleForm')" round>重置</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDetail",
  data() {
    // 密码校验
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      users: [],
      id: "",
      token: "",
      value1: false, // 开关按钮的值
      display_info: true, // 原来信息的显示值
      value_email: false, // 修改邮箱开关
      value_passwd: false, // 密码修改开关
      icon_url: this.$settings.base_url + "/user/getuser/" + this.id, // 图片上传地址
      fullscreenLoading: false, // 提交后的加载页面

      form: {
        first_name: "",
        gender: "",
        signature: "",
        icon: "",
        tencent: "",
      },
      ruleForm: {
        re_pass: "", // 原密码
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },

      // 邮箱校验
      dynamicValidateForm: {
        email: "",
      },
    };
  },

  created() {
    this.token = this.$cookies.get("token");
    this.id = this.$cookies.get("id");
    this.getUser();
  },
  methods: {
    // 密码修改
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let formData = new FormData();
          if (formName == "dynamicValidateForm") {
            formData.append("email", this.dynamicValidateForm.email);
          } else {
            formData.append("username", this.users.username);
            formData.append("truepass", this.ruleForm.re_pass);
            formData.append("password", this.ruleForm.pass);
            formData.append("re_password", this.ruleForm.checkPass);
          }

          // console.log(formData.get("email"));
          // console.log(formData.get("password"));

          // 加载
          const loading = this.$loading({
            lock: true,
            text: "后端正在火急火燎的赶来。。。",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
          setTimeout(() => {
            loading.close();
          }, 3000);

          if (formName == "dynamicValidateForm") {
            this.$axios({
              method: "patch",
              url: this.$settings.base_url + "/user/getuser/" + this.id + "/",
              data: formData,
              headers: {
                Authorization: "jwt " + this.token,
              }, // 头部携带jwt+token登录后的信息
            })
              .then((response) => {
                var that = this;
                setTimeout(function () {
                  that.$notify({
                    title: "成功",
                    message: "修改成功",
                    type: "success",
                  });
                }, 3000);

                console.log("修改后返回的数据", response.data.code);
                this.users = response.data;
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            this.$axios({
              method: "post",
              url: this.$settings.base_url + "/user/retrieve/",
              data: formData,
              headers: {
                Authorization: "jwt " + this.token,
              }, // 头部携带jwt+token登录后的信息
            })
              .then((response) => {
                var that = this;
                setTimeout(function () {
                  that.$notify({
                    title: "成功",
                    message: "修改成功",
                    type: "success",
                  });
                }, 3000);
                console.log("修改后返回的数据", response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        } else {
          alert("您的输入不正确！请重新输入");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 头像上传
    handleAvatarSuccess(res, file) {
      this.form.icon = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }

      this.form.icon = file;
      // console.log(this.form["icon"]);

      return false;
    },

    // 修改信息的form表单按钮
    onSubmit() {
      let formData = new FormData();
      for (var key in this.form) {
        if (this.form[key]) {
          formData.append(key, this.form[key]);
          console.log("修改了的数据", this.form[key]);
        }
      }

      this.$axios({
        method: "patch",
        url: this.$settings.base_url + "/user/getuser/" + this.id + "/",
        data: formData,
        headers: {
          Authorization: "jwt " + this.token,
        }, // 头部携带jwt+token登录后的信息
      })
        .then((response) => {
          var that = this;
          setTimeout(function () {
            that.$notify({
              title: "成功",
              message: "修改成功",
              type: "success",
            });
          }, 3000);
          console.log("修改后返回的数据", response.data);
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      // 加载
      const loading = this.$loading({
        lock: true,
        text: "后端正在火急火燎的赶来。。。",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
    onCancle() {
      this.display_info = true;
      this.value1 = false;
    },

    // 使form表单出现信息展示消失的按钮事件
    changeStatus: function ($event) {
      if ($event) {
        this.display_info = false;
      } else {
        this.display_info = true;
      }
    },
    getUser: function () {
      this.$axios({
        method: "get",
        url: this.$settings.base_url + "/user/getuser/" + this.id + "/",
        headers: {
          Authorization: "jwt " + this.token,
        }, // 头部携带jwt+token登录后的信息
      })
        .then((response) => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#info {
  margin: 60px;
}

.myinfo {
  background: #f9f9f9;
  align-items: center;
}

.info-content {
  width: 1200px;
  min-height: 480px;
  margin-top: 20px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px 1px hsl(0deg 0% 95% / 50%);
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 63px;
}

.right-part {
  height: 90px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}

.info-content .right-part img {
  max-width: 100%;
  max-height: 100%;
  width: 90px;
  height: 90px;
  margin-right: -9px;
  border-radius: 50px;
  border: 1px solid #ffc210;
}

.name {
  overflow: hidden;
  font-size: 20px;
  font-weight: 800;
  font-family: PingFangSC-Regular;
  padding-left: 50px;
}

.right-part {
  float: left;
}

.right-part .line {
  margin: 0 10px;
}

.right-part span {
  cursor: pointer;
  color: #080808;
  margin-right: 14px;
  margin-left: 0px;
  border-radius: 50px;
}

.info-row {
  margin: 20px 7px;
}

.info-row div {
  margin: 8px;
  font-size: 18px;
  color: #756f6f;
  text-align: justify;
  font-weight: bold;
}

.box:after {
  content: "";

  display: inline-block;

  overflow: hidden;

  width: 100%;
}

.info-row div span {
  margin-right: 30px;
  width: 80px;
  height: 50px;
  display: inline-block;
  text-align: center;
  line-height: 50px;
}

/* 头像 */

.info_table > div {
  margin: 0px;
}

.bg-purple {
  background: #eee8e8;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>