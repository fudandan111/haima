import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// 引入axios
import axios from 'axios';
// 安装axios
Vue.prototype.$http = axios;
// 引入element
import Element from 'element-ui';
// 引入样式
Vue.use(Element);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
