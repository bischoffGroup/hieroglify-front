import {
  IMPORT_PRODUCTS_COLUMNS_IMPORTABLE,
  IMPORT_PRODUCTS_COLUMNS_NOT_IMPORTABLE,
  IMPORT_PRODUCTS_IMPORTABLE,
  IMPORT_PRODUCTS_NOT_IMPORTABLE,
} from '@/store/modules/enums/mutationTypes';
import { getImportableProducts } from '@/services';
import { IMPORT_PRODUCTS_GENERATE } from '@/store/modules/enums/actionTypes';

export default {
  use: () => ({
    state: {
      importable: {
        data: [],
        columnNames: []
      },
      notImportable: {
        data: [],
        columnNames: []
      }
    },
    mutations: {
      [IMPORT_PRODUCTS_IMPORTABLE](state, importProducts) {
        state.importable.data = importProducts;
      },
      [IMPORT_PRODUCTS_COLUMNS_IMPORTABLE](state) {
        state.importable.columnNames = state.importable.data.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.importable.data[0] }).map(e => ({
            text: e,
            value: e
          }));
      },
      [IMPORT_PRODUCTS_NOT_IMPORTABLE](state, importProducts) {
        state.notImportable.data = importProducts;
      },
      [IMPORT_PRODUCTS_COLUMNS_NOT_IMPORTABLE](state) {
        state.notImportable.columnNames = state.notImportable.data.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.notImportable.data[0] }).map(e => ({
            text: e,
            value: e
          }));
      }
    },
    actions: {
      async [IMPORT_PRODUCTS_GENERATE]({ commit }, payload = { valid: undefined }) {
        await commit('LOADING', true, { root: true });
        if (payload.valid) {
          commit(IMPORT_PRODUCTS_IMPORTABLE, await getImportableProducts(payload.valid));
          commit(IMPORT_PRODUCTS_COLUMNS_IMPORTABLE);
        } else {
          commit(IMPORT_PRODUCTS_NOT_IMPORTABLE, await getImportableProducts(payload.valid));
          commit(IMPORT_PRODUCTS_COLUMNS_NOT_IMPORTABLE);
        }
        commit('LOADING', false, { root: true });
      }
    },
    getters: { },
    namespaced: true
  })
};
