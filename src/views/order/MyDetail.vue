<template>
  <div>
    <h1>我是个人资料</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <form action="" method="post" id="info">
            <p>
              <label for="">账户名：</label>            
              <input
                type="text"
                name="username"
                class="form-control"
              />
            </p>
            <p>
              <label for="">密码：</label>
              <input
                type="text"
                name="password"
                class="form-control"
              />
            </p>
             <p>
              <label for="">邮箱号：</label>
              <input
                type="text"
                name="email"
                class="form-control"
              />
            </p>
            
            <input type="submit" class="btn btn-success btn-block" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDetail",
  data() {
    return {};
  },
};
</script>

<style scoped>

#info {
  margin: 60px;
}

</style>