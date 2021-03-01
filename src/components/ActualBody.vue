<template>
  <div class="mbody">
    <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img
              src="../assets/img/Loginbg.jpg"
              class="img-fluid"
              alt="actual"
            />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>我们拥有现如今最新最常用的庞大项目库</h3>
            <p>
              每个人并不是生来就是天才，什么都懂什么都会，都是后天经过不断学习、练习，才成就了现在。我们海量的项目库定会让你对所学的知识学以致用，加强印象，收获经验！
            </p>
            <div class="row">
              <div class="col-md-6">
                <i class="fa fa-file-text-o" aria-hidden="true"></i>
                <h4>文档</h4>
                <p>提供在线项目开发文档</p>
              </div>
              <div class="col-md-6">
                <i class="fa fa-cubes" aria-hidden="true"></i>
                <h4>应用</h4>
                <p>提供多种在线项目使用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="counts" class="counts section-bg" >
      <div class="container">
        <div class="row counters">
          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">232</span>
            <p>特约企业大牛</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">521</span>
            <p>最新企业项目</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,463</span>
            <p>从起步到现在</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">15</span>
            <p>高级架构师</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <div class="container">
        <div class="section-title">
          <h2>企业级实战项目</h2>
          <p>提供的诸多项目的服务模块，以及服务的详细信息.</p>
        </div>

        <div class="row">
          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="icon-box iconbox-blue">
              <div class="icon">
                <i class="fa fa-object-ungroup" aria-hidden="true"></i>
              </div>
              <h4><a href="">框架搭建</a></h4>
              <p>快速前端框架的搭建</p>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box iconbox-orange">
              <div class="icon">
                <i class="fa fa-file-text-o" aria-hidden="true"></i>
              </div>
              <h4><a href="">静态文件上传</a></h4>
              <p>使用cdn加速上传静态文件</p>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="icon-box iconbox-pink">
              <div class="icon">
                <i class="fa fa-exchange" aria-hidden="true"></i>
              </div>
              <h4><a href="">后端交互开发</a></h4>
              <p>可基于前端功能快速设计并开发后端</p>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="icon-box iconbox-yellow">
              <div class="icon">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
              </div>
              <h4><a href="">高并发优化</a></h4>
              <p>实现对网站的高并发优化，提高用户的访问速度</p>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box iconbox-red">
              <div class="icon">
                <i class="fa fa-refresh" aria-hidden="true"></i>
              </div>
              <h4><a href="">灾备</a></h4>
              <p>提供灾难异地备份数据的功能</p>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="icon-box iconbox-teal">
              <div class="icon">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </div>
              <h4><a href="">项目指导</a></h4>
              <p>提供项目开发的意见</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
export default {
  name: "ActualBody",
  data () {
      return {
          
      }
  },
  components: {

  },
}
</script>

<style scoped>
.mbody {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

.mbody a {
  color: #ffc107;
}

.mbody a:hover {
  color: #ffce3a;
  text-decoration: none;
}

.mbody h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

/* section */
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

/* About */
.about h3 {
  font-weight: 700;
  font-size: 32px;
  margin-top: 5px;
  margin-bottom: 20px;
  color: #414c64;
}

.about h4 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
}

.about i {
  font-size: 45px;
  margin-top: 16px;
  color: #8b97b3;
}

.about p {
  font-size: 15px;
  color: #848484;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

/* counts */
.counts {
  padding: 40px 0;
}

.counts .counters span {
  font-size: 45px;
  display: block;
  color: #414c64;
}

.counts .counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
}

/* services */
.services .icon-box {
  text-align: center;
  padding: 70px 20px 80px 20px;
  transition: all ease-in-out 0.3s;
  background: #fff;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.05);
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
  position: relative;
  background: #f5f5f5;
  border-radius: 50px;
}

.services .icon-box .icon i {
  font-size: 32px;
  transition: 0.5s;
  line-height: 1;
  position: relative;
}

.services .icon-box h4 {
  font-weight: 600;
  margin: 10px 0 15px 0;
  font-size: 22px;
}

.services .icon-box h4 a {
  color: #414c64;
  transition: ease-in-out 0.3s;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  border-color: #fff;
  box-shadow: 0px 0 35px 0 rgba(0, 0, 0, 0.08);
}

.services .iconbox-blue i {
  color: #47aeff;
}

.services .iconbox-blue:hover .icon {
  background: #47aeff;
}

.services .iconbox-blue:hover .icon i {
  color: #fff;
}

.services .iconbox-orange i {
  color: #ffa76e;
}

.services .iconbox-orange:hover .icon {
  background: #ffa76e;
}

.services .iconbox-orange:hover .icon i {
  color: #fff;
}

.services .iconbox-pink i {
  color: #e80368;
}

.services .iconbox-pink:hover .icon {
  background: #e80368;
}

.services .iconbox-pink:hover .icon i {
  color: #fff;
}

.services .iconbox-yellow i {
  color: #ffbb2c;
}

.services .iconbox-yellow:hover .icon {
  background: #ffbb2c;
}

.services .iconbox-yellow:hover .icon i {
  color: #fff;
}

.services .iconbox-red i {
  color: #ff5828;
}

.services .iconbox-red:hover .icon {
  background: #ff5828;
}

.services .iconbox-red:hover .icon i {
  color: #fff;
}

.services .iconbox-teal i {
  color: #11dbcf;
}

.services .iconbox-teal:hover .icon {
  background: #11dbcf;
}

.services .iconbox-teal:hover .icon i {
  color: #fff;
}





</style>