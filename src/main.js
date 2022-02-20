import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import vueDebounce from "vue-debounce";

import "./filters";

// CSS 가져오기
import "./styles/index.scss";

Vue.config.productionTip = false;
Vue.use(vueDebounce);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
