import Vue from 'vue';
import Vuex from 'vuex';
import inputs from '@/store/abstractContext/inputs/inputs';
import depara from '@/store/depara/depara';
import productInformation from '@/store/translator/productInformation/productInformation';
import commonData from '@/store/defaultContext/commonData/commonData';
import product from '@/store/translator/product/product';
import productSize from '@/store/translator/productSize/productSize';
import supplier from '@/store/from/supplier/supplier';
import importProduct from '@/store/import/product/product';
import importMaterial from '@/store/import/material/material';
import notifications from '@/store/notifications/notifications';
import systemTasks from '@/store/system/task/task';
import utils from '@/store/utils/utils';
import script from './scripts/script';
import log from './log/log';
import version from './version/version';
import auth from './auth/auth';
import artigo from './artigo/artigo';
import preloader from './preloader/preloader';

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
        product,
      },
    },
    from: {
      namespaced: true,
      modules: {
        supplier,
      },
    },
    import: {
      namespaced: true,
      modules: {
        importProduct,
        importMaterial,
      },
    },
    system: {
      namespaced: true,
      modules: {
        systemTasks,
      },
    },
    defaultContext: {
      namespaced: true,
      modules: {
        commonData,
      },
    },
    abstractContext: {
      namespaced: true,
      modules: {
        inputs,
      },
    },
  },
});
export default store;
