import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";
import VueCodemirror from "vue-codemirror";
import "codemirror/lib/codemirror.css";

Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(VueCodemirror);

const socket = io("http://10.1.0.22:3001");

Vue.use(VueSocketIOExt, socket);

store
  .dispatch("checkLogin")
  .then(() => {
    new Vue({
      router,
      store,
      vuetify,
      icons: {
        iconfont: ["fa"]
      },
      render: h => h(App)
    }).$mount("#app");
  })
  .catch(() => {
    new Vue({
      router,
      store,
      vuetify,
      icons: {
        iconfont: ["fa"]
      },
      render: h => h(App)
    }).$mount("#app");
  });
