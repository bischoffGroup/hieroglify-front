import {
  REPORT_CHANGE_STATUS_PRODUCTS, REPORT_CHANGE_STATUS_PRODUCTS_COLUMNS,

} from '@/store/modules/enums/mutationTypes';
import {
  REPORT_CHANGE_STATUS_PRODUCTS_GENERATE
} from '@/store/modules/enums/actionTypes';
import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';
import { getChageStatusProducts } from '@/services/report/ReportService';
import BtnStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/btns/BtnStoreAbstract';
import DownloadStoreGeneric from '@hieroglify/lib-commons/src/store/download/DownloadStoreGeneric';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchChangeStatusProducts: ''
      },
      mutations: {
        [REPORT_CHANGE_STATUS_PRODUCTS](state, reports) {
          state.data = reports;
        },
        [REPORT_CHANGE_STATUS_PRODUCTS_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [REPORT_CHANGE_STATUS_PRODUCTS_GENERATE]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getChageStatusProducts();
          commit(REPORT_CHANGE_STATUS_PRODUCTS, result);
          commit(REPORT_CHANGE_STATUS_PRODUCTS_COLUMNS);
          commit('LOADING', false, { root: true });
        }
      },
      namespaced: true
    };
    return mergeArray([
      store,
      TextFieldStoreAbstract.use({}),
      BtnStoreAbstract.use({}),
      DownloadStoreGeneric.use({}),
      DataStoreGeneric.use({})
    ]);
  }
};
