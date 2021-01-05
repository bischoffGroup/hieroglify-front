import Vue from "vue";
import Vuex from "vuex";
import preloader from "./preloader/preloader";
import artigo from "./artigo/artigo";
import auth from "./auth/auth";
import version from "./version/version";
import log from "./log/log";
import script from "./scripts/script";
import depara from "@/store/depara/depara";
import productInformation from "@/store/translator/productInformation/productInformation";
import product from "@/store/translator/product/product";
import productSize from "@/store/translator/productSize/productSize";
import supplier from "@/store/from/supplier/supplier";
import importProduct from "@/store/import/product/product";
import importMaterial from "@/store/import/material/material";
import notifications from "@/store/notifications/notifications";
import systemTasks from "@/store/system/task/task";
import utils from "@/store/utils/utils";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    notifications,
    preloader,
    artigo,
    auth,
    version,
    log,
    script,
    depara,
    utils,
    translator: {
      namespaced: true,
      modules: {
        productInformation,
        productSize,
        product
      }
    },
    from: {
      namespaced: true,
      modules: {
        supplier
      }
    },
    import: {
      namespaced: true,
      modules: {
        importProduct,
        importMaterial
      }
    },
    system: {
      namespaced: true,
      modules: {
        systemTasks
      }
    }
  }
});
export default store;
