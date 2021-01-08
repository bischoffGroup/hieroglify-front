import {
  FROM_COLORS, FROM_COLORS_COLUMNS,

} from '@/store/modules/enums/mutationTypes';
import { FROM_COLORS_GENERATE_COLORS } from '@/store/modules/enums/actionTypes';
import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';
import { getColors } from '@/services/from/FromService';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchColors: ''
      },
      mutations: {
        [FROM_COLORS](state, tasks) {
          state.data = tasks;
        },
        [FROM_COLORS_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [FROM_COLORS_GENERATE_COLORS]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getColors();
          commit(FROM_COLORS, result);
          commit(FROM_COLORS_COLUMNS);
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
