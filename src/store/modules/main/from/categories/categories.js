import {
  FROM_CATEGORIES, FROM_CATEGORIES_COLUMNS,

} from '@/store/modules/enums/mutationTypes';
import { FROM_CATEGORIES_GENERATE_CATEGORIES } from '@/store/modules/enums/actionTypes';
import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';
import { getCategories } from '@/services/from/FromService';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchCategories: ''
      },
      mutations: {
        [FROM_CATEGORIES](state, tasks) {
          state.data = tasks;
        },
        [FROM_CATEGORIES_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [FROM_CATEGORIES_GENERATE_CATEGORIES]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getCategories();
          commit(FROM_CATEGORIES, result);
          commit(FROM_CATEGORIES_COLUMNS);
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
