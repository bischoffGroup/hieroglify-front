import {
  FROM_SIZES,
  FROM_SIZES_COLUMNS,

} from '@/store/modules/enums/mutationTypes';
import { FROM_SIZES_GENERATE_SIZES } from '@/store/modules/enums/actionTypes';
import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';
import { getSizes } from '@/services/from/FromService';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchSizes: ''
      },
      mutations: {
        [FROM_SIZES](state, tasks) {
          state.data = tasks;
        },
        [FROM_SIZES_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [FROM_SIZES_GENERATE_SIZES]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getSizes();
          commit(FROM_SIZES, result);
          commit(FROM_SIZES_COLUMNS);
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
