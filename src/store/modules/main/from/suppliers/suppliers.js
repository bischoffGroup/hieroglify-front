import { FROM_SUPPLIERS, FROM_SUPPLIERS_COLUMNS } from '@/store/modules/enums/mutationTypes';
import { FROM_SUPPLIERS_GENERATE_SUPPLIERS } from '@/store/modules/enums/actionTypes';
import { getSuppliers } from '@/services';
import { mergeArray } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import TextFieldStoreAbstract from '@hieroglify/lib-hieroglify-abstracts/src/store/textfields/TextfieldStoreAbstract';
import DataStoreGeneric from '@hieroglify/lib-commons/src/store/data/DataStoreGeneric';

export default {
  use: () => {
    const store = {
      state: {
        data: [],
        columnNames: [],
        searchSuppliers: ''
      },
      mutations: {
        [FROM_SUPPLIERS](state, tasks) {
          state.data = tasks;
        },
        [FROM_SUPPLIERS_COLUMNS](state) {
          state.columnNames = state.data.length === 0 ? [] : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e,
            filterable: true
          }));
        }
      },
      actions: {
        async [FROM_SUPPLIERS_GENERATE_SUPPLIERS]({ commit }) {
          commit('LOADING', true, { root: true });
          const result = await getSuppliers();
          commit(FROM_SUPPLIERS, result);
          commit(FROM_SUPPLIERS_COLUMNS);
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
