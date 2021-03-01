<template>
  <div>
    <h1>我是个人资料</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form action="" method="post">
            <p>
              username:<input
                type="text"
                name="username"
                class="form-control"
              />
            </p>
            <p>
              password:<input
                type="text"
                name="password"
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
</style>