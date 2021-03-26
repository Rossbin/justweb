<template>
  <div class="myinfo">
    <div class="container">
      <h1>我是个人资料</h1>
      <div class="info-content">
        <div class="row">
          <div class="col-md-4 right-part">
            <span><img :src="users.icon" alt="" /></span>
            <span class="name">{{ users.username }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h1 style="font-size: 25px; font-weight: 800; color: #4a4a4a">
              基本信息
            </h1>
          </div>
        </div>
        <div class="row info-row">
          <div class="col-md-4"><span>用户名</span>{{ users.username }}</div>
          <div class="col-md-4"><span>性别</span>{{ users.gender }}</div>
          <div class="col-md-4"><span>邮箱</span>{{ users.email }}</div>
          <div class="col-md-4"><span>别名</span>{{ users.first_name }}</div>
          <div class="col-md-4"><span>QQ号</span>{{ users.tencent }}</div>
          <div class="col-md-4"><span>电话号</span>{{ users.telephone }}</div>
          <div class="col-md-4"><span>个人签名</span>{{ users.signature }}</div>
        </div>
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <form action="" method="post" id="info">
              <p>
                <label for="">账户名：</label>
                <input type="text" name="username" class="form-control" />
              </p>
              <p>
                <label for="">密码：</label>
                <input type="text" name="password" class="form-control" />
              </p>
              <p>
                <label for="">邮箱号：</label>
                <input type="text" name="email" class="form-control" />
              </p>

              <input type="submit" class="btn btn-success btn-block" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDetail",
  data() {
    return {
      users: [],
      id: "",
      token: "",
    };
  },

  created() {
    this.token = this.$cookies.get("token");
    this.id = this.$cookies.get("id");
    this.getUser();
  },
  methods: {
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
  margin: 20px;
  font-size: 18px;
  color: #9b9b9b;
  text-align: justify;
}

.box:after {
  content: "";

  display: inline-block;

  overflow: hidden;

  width: 100%;
}

.info-row div span {
  margin-right: 30px;
  width:80px;
  height: 50px;
  display: inline-block;
  text-align: right;
  line-height: 50px;
}
</style>