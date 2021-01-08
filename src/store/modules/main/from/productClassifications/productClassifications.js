import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';
import { FROM_PRODUCT_CLASSIFICATIONS, FROM_PRODUCT_CLASSIFICATIONS_COLUMNS } from '@/store/modules/enums/mutationTypes';
import { FROM_PRODUCT_CLASSIFICATIONS_GENERATE_PRODUCT_CLASSIFICATIONS } from '@/store/modules/enums/actionTypes';
import { getProductClassifications } from '@/services/from/FromService';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchProductClassifications: ''
      },
      mutations: {
        [FROM_PRODUCT_CLASSIFICATIONS](state, tasks) {
          state.data = tasks;
        },
        [FROM_PRODUCT_CLASSIFICATIONS_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [FROM_PRODUCT_CLASSIFICATIONS_GENERATE_PRODUCT_CLASSIFICATIONS]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getProductClassifications();
          commit(FROM_PRODUCT_CLASSIFICATIONS, result);
          commit(FROM_PRODUCT_CLASSIFICATIONS_COLUMNS);
          commit('LOADING', false, { root: true });
        }
      },
      namespaced: true
    };
    return mergeArray([
      store,
      TextFieldStoreAbstract.use({}),
      DataStoreGeneric.use({})
    ]);
  }
};
