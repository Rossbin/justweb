<template>
  <div class="mbody">
    <section
      class="site-hero site-hero-innerpage overlay top1"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div
          class="row align-items-center site-hero-inner justify-content-center"
        >
          <div class="col-md-8 text-center">
            <div class="mb-5 element-animate fadeInUp element-animated">
              <h1>读书不会给予你就业，但会给你创造就业的机会</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center">
            <h2>分布式的在线教育系统</h2>
            <p class="lead">
              Just-edu 江苏科技大学在线教育平台，面向全国在校大学生的在线学习平台。我们将为您提供一整套的学习方案和学习流程，以及教学课程等.
            </p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-5">
            <h2 class="mb-4">开发背景</h2>
            <p>
               现如今随着互联网+不断的发展，我国的在线教育市场也随之被打开，并且不断地发展壮大，许多的线上教育行业也崭露头角。            
            </p>
            <p>
              按照市场领域进行一定的分类为：学前教育、K12教育、高等教育、留学教育、职业教育、语言教育、兴趣教育以及综合平台，其中，职业教育和语言教育的市场优势突出
            </p>
            <p>
              据Analysys易观发布的数据显示，未来几年互联网教育市场规模保持高速增长。尤其是今年疫情期间，在线教育发挥出来至关重要的作用，让我们做到了停课不停学，使疫情对于教育行业的影响降到最低，在疫情过后也较为快速的恢复正常情况。
            </p>
            <br>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-6 overflow">
            <img src="../assets/img/Loginbg.jpg" alt="" class="img-fluid" />
          </div>
        </div>

        <div class="row mb-5 align-items-center">
          <div class="col-md-6 overflow order-1">
            <img src="../assets/img/Loginbg.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-md-1 order-2"></div>
          <div class="col-md-5 order-3">
            <h2 class="mb-4">人员介绍</h2>
            <p>
               现如今随着互联网+不断的发展，我国的在线教育市场也随之被打开，并且不断地发展壮大，许多的线上教育行业也崭露头角。            
            </p>
            <p>
              按照市场领域进行一定的分类为：学前教育、K12教育、高等教育、留学教育、职业教育、语言教育、兴趣教育以及综合平台，其中，职业教育和语言教育的市场优势突出
            </p>
            <p>
              据Analysys易观发布的数据显示，未来几年互联网教育市场规模保持高速增长。尤其是今年疫情期间，在线教育发挥出来至关重要的作用，让我们做到了停课不停学，使疫情对于教育行业的影响降到最低，在疫情过后也较为快速的恢复正常情况。
            </p>
          </div>
        </div>

        <div class="row align-items-center">
          
          
          <div class="col-md-5 order-1">
            <h2 class="mb-4">今天、明天和未来</h2>
            <p>
               现如今随着互联网+不断的发展，我国的在线教育市场也随之被打开，并且不断地发展壮大，许多的线上教育行业也崭露头角。            
            </p>
            <p>
              按照市场领域进行一定的分类为：学前教育、K12教育、高等教育、留学教育、职业教育、语言教育、兴趣教育以及综合平台，其中，职业教育和语言教育的市场优势突出
            </p>
            <p>
              据Analysys易观发布的数据显示，未来几年互联网教育市场规模保持高速增长。尤其是今年疫情期间，在线教育发挥出来至关重要的作用，让我们做到了停课不停学，使疫情对于教育行业的影响降到最低，在疫情过后也较为快速的恢复正常情况。
            </p>
          </div>
          <div class="col-md-1 order-2"></div>
          <div class="col-md-6 overflow order-3">
            <img src="../assets/img/Loginbg.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style scoped>
.mbody{
    font-family: "Source Sans Pro", arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.8;
    color: #6c757d;
}
a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5 {
  color: #000;
  font-family: "Source Sans Pro", arial, sans-serif;

}

.top1 {
  background-image: url("../assets/img/Loginbg.jpg");
}

/* 背景图和字 */
.text-center {
  text-align: center !important;
}
/* .align-items-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
}
.justify-content-center {
    -webkit-box-align: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
} */
.justify-content-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .site-hero .container .row {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.site-hero {
  background-size: cover;
  background-position: center center;
  min-height: 750px;
  height: 100vh;
}

.site-hero a {
  color: #fff;
  opacity: 0.5;
}

.site-hero a:hover {
  opacity: 1;
}
.tlinks {
  text-indent: -9999px;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}
.site-hero .post-meta {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.site-hero h1,
.site-hero p {
  color: #fff;
  line-height: 1.5;
}

.site-hero h1 {
  text-transform: uppercase;
  font-size: 60px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 30px;
  font-family:FangSong;
}

.site-hero .lead {
  font-size: 30px;
  color: #fff;
  opacity: 0.8;
  margin-bottom: 30px;
  font-weight: 300;
}

.site-hero > .container {
  position: relative;
  z-index: 2;
}

.site-hero.overlay {
  position: relative;
}

.site-hero.overlay:before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.site-hero .site-hero-inner {
  min-height: 750px;
  height: 100vh;
}

.site-hero-innerpage,
.site-hero-innerpage .site-hero-inner {
  min-height: 550px;
  height: 50vh;
}



/* 文图部分css */
.site-section {
  padding: 7em 0;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}

.bg-light {
    background-color: #f8f9fa!important;
}

.site-section h2 {
      font-size: 3.2rem;
      margin-top: 0px;
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.mb-5 {
    margin-bottom: 4.8rem!important;
}
.mb-4 {
    font-size: 1.6rem;
}

.site-section .lead {
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300;
  line-height: 1.8;
}






</style>