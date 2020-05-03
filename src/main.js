import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "components/common/toast/index.js";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false
//
Vue.use(Toast);
// 事件总线
Vue.prototype.$bus = new Vue()
// 图片懒加载
Vue.use(VueLazyLoad, {
  loading: require("assets/img/common/placeholder.png")
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
