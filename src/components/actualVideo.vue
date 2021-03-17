<template>
  <div>
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>企业级项目课程</h2>
          <p>企业级项目让你学习最新的，能够真正使用到的项目</p>
        </div>

         <div class="row">
            <div class="col-lg-12 d-flex justify-content-center" >
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">最新企业使用的项目库</li>
                <!-- <li data-filter=".filter-app" >Python项目</li>
                <li data-filter=".filter-card">Java项目</li>
                <li data-filter=".filter-web">Golang项目</li> -->
              </ul>
            </div>
          </div>


          <div class="row portfolio-container">

            <div class="col-lg-4 col-md-6 portfolio-item " v-for="(item,index) in item_list" :key="index">
              <img :src="item.course_img" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>{{ item.name }}</h4>
                <p>{{ item.brief }}</p>
                <a
                  href="#"
                  
                  class=" preview-link"
                  title="watch"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="#"
                  
                  data-vbtype="iframe"
                  class=" details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>




            <!-- <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="App 1"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Web 3"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="App 2"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Card 2"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Web 2"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div> -->

            <!-- <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="App 3"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Card 1"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Card 3"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Web 3"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Web 3"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Web 3"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Web 3"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="../assets/img/Loginbg.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../assets/img/Loginbg.jpg"
                  data-gall="portfolioGallery"
                  class="venobox preview-link"
                  title="Web 3"
                  ><i class="fa fa-search-plus" aria-hidden="true"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  data-gall="portfolioDetailsGallery"
                  data-vbtype="iframe"
                  class="venobox details-link"
                  title="Portfolio Details"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div> -->

          </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "actualVideo",
  data() {
    return {
        item_list: [],
    };
  },
  created() {
    //当项目组件一创建，就向后台发请求，拿回项目数据
      this.$axios
      .get(this.$settings.base_url + "/course/project/item_course/")
      .then((response) => {
        // console.log(response.data);
        this.item_list = response.data;
      })
      .catch((error) => {});
  },
};
</script>

<style scoped>

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



/* 项目实战样式 */
.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 25px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 18px 10px 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #444444;
  margin: 0 3px 10px 3px;
  transition: all ease-in-out 0.3s;
  background: #fafafc;
  border-radius: 50px;
}

.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
  color: #414c64;
  background: #ffc107;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}


.portfolio .portfolio-item {
  margin-bottom: 30px;
  overflow: hidden;
}

.portfolio .portfolio-item img {
  position: relative;
  top: 0;
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: -50px;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: #4d4c4b;
  padding: 4px 20px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  margin-top: 6px;
  margin-bottom: 4px;
}

.portfolio .portfolio-item .portfolio-info p {
  color: #fff;
  font-size: 14px;
  margin-bottom: 2px;
}

.portfolio .portfolio-item .portfolio-info .preview-link, .portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 50px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: rgba(255, 255, 255, 0.7);
  transition: ease-in-out 0.3s;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover, .portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #fff;
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 15px;
}

.portfolio .portfolio-item:hover img {
  top: -30px;
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 0;
}



.img-fluid {
  max-width: 100%;
  height: auto;
}

</style>
