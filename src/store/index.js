import Vue from 'vue';
import Vuex from 'vuex';

import {
  STORE_CORE_AUTH_MODULE,
  STORE_CORE_NOTIFICATIONS_MODULE,
  STORE_CORE_PRELOADER_MODULE,
  STORE_MAIN_FROM_MODULE, STORE_MAIN_SYSTEM_MODULE
} from '@/store/StoreNamesEnum';
import {
  storeCoreAuthModule,
  storeCoreNotificationsModule,
  storeCorePreloaderModule,
  storeMainFromModule, storeMainSystemModule
} from '@/store/config';

Vue.use(Vuex);
export const store = () => new Vuex.Store({
  modules: {
    [STORE_MAIN_FROM_MODULE]: { ...storeMainFromModule },
    [STORE_MAIN_SYSTEM_MODULE]: { ...storeMainSystemModule },
    [STORE_CORE_AUTH_MODULE]: { ...storeCoreAuthModule },
    [STORE_CORE_NOTIFICATIONS_MODULE]: { ...storeCoreNotificationsModule },
    [STORE_CORE_PRELOADER_MODULE]: { ...storeCorePreloaderModule }
  },
  // strict: true
});
