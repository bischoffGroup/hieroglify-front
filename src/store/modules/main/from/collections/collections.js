import {
  FROM_COLLECTIONS, FROM_COLLECTIONS_COLUMNS,

} from '@/store/modules/enums/mutationTypes';
import { FROM_COLLECTIONS_GENERATE_COLLECTIONS } from '@/store/modules/enums/actionTypes';
import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';
import { getCollections } from '@/services/from/FromService';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchCollections: ''
      },
      mutations: {
        [FROM_COLLECTIONS](state, tasks) {
          state.data = tasks;
        },
        [FROM_COLLECTIONS_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [FROM_COLLECTIONS_GENERATE_COLLECTIONS]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getCollections();
          commit(FROM_COLLECTIONS, result);
          commit(FROM_COLLECTIONS_COLUMNS);
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
