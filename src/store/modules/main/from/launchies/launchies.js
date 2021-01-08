import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';
import { FROM_LAUNCHIES, FROM_LAUNCHIES_COLUMNS } from '@/store/modules/enums/mutationTypes';
import { FROM_LAUNCHIES_GENERATE_LAUNCHIES } from '@/store/modules/enums/actionTypes';
import { getLaunchies } from '@/services/from/FromService';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchLaunchies: ''
      },
      mutations: {
        [FROM_LAUNCHIES](state, launchies) {
          state.data = launchies;
        },
        [FROM_LAUNCHIES_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [FROM_LAUNCHIES_GENERATE_LAUNCHIES]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getLaunchies();
          commit(FROM_LAUNCHIES, result);
          commit(FROM_LAUNCHIES_COLUMNS);
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
