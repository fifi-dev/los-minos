import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from 'jquery';
import $ from 'jquery'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

global.jQuery = jQuery
global.$ = jQuery
window.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
