import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = false;


// 配置全局样式 @ 符号，代指src路径
import '@/assets/css/global.css'

// 配置全局自定义设置
import settings from '@/assets/js/settings'
Vue.prototype.$settings = settings;
// 在所有需要与后台交互的组件中：this.$settings.base_url + '再拼接具体后台路由'

//font-awesome引入
import 'font-awesome/css/font-awesome.min.css'

import axios from 'axios'   //导入安装的axios
//相当于把axios这个对象放到了vue对象中，以后用  vue对象.$axios
Vue.prototype.$axios = axios;

//vue-cookies配置
import cookies from 'vue-cookies'
Vue.prototype.$cookies = cookies;
//ElementUI的配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//bootstrap配置
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//animate.css配置
import animate from 'animate.css';
import 'animate.css/animate.min.css'
Vue.use(animate);



// vue-video播放器
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
