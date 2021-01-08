import {
  FROM_GRIDS, FROM_GRIDS_COLUMNS,

} from '@/store/modules/enums/mutationTypes';
import { FROM_GRIDS_GENERATE_GRIDS } from '@/store/modules/enums/actionTypes';
import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';
import { getGrids } from '@/services/from/FromService';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchGrids: ''
      },
      mutations: {
        [FROM_GRIDS](state, grids) {
          console.log(state, grids);
          state.data = grids;
        },
        [FROM_GRIDS_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [FROM_GRIDS_GENERATE_GRIDS]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getGrids();
          commit(FROM_GRIDS, result);
          commit(FROM_GRIDS_COLUMNS);
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
