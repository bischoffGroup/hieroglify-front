import {
  IMPORT_MATERIALS_COLUMNS_IMPORTABLE,
  IMPORT_MATERIALS_COLUMNS_NOT_IMPORTABLE,
  IMPORT_MATERIALS_IMPORTABLE,
  IMPORT_MATERIALS_NOT_IMPORTABLE,
} from '@/store/modules/enums/mutationTypes';
import { IMPORT_MATERIALS_GENERATE } from '@/store/modules/enums/actionTypes';
import { getImportableMaterials } from '@/services/import/ProductService';

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
      [IMPORT_MATERIALS_IMPORTABLE](state, importMaterials) {
        state.importable.data = importMaterials;
      },
      [IMPORT_MATERIALS_COLUMNS_IMPORTABLE](state) {
        state.importable.columnNames = state.importable.data.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.importable.data[0] }).map(e => ({
            text: e,
            value: e
          }));
      },
      [IMPORT_MATERIALS_NOT_IMPORTABLE](state, importMaterials) {
        state.notImportable.data = importMaterials;
      },
      [IMPORT_MATERIALS_COLUMNS_NOT_IMPORTABLE](state) {
        state.notImportable.columnNames = state.notImportable.data.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.notImportable.data[0] }).map(e => ({
            text: e,
            value: e
          }));
      }
    },
    actions: {
      async [IMPORT_MATERIALS_GENERATE]({ commit }, payload = { valid: undefined }) {
        await commit('LOADING', true, { root: true });
        if (payload.valid) {
          commit(IMPORT_MATERIALS_IMPORTABLE, await getImportableMaterials(payload.valid));
          commit(IMPORT_MATERIALS_COLUMNS_IMPORTABLE);
        } else {
          commit(IMPORT_MATERIALS_NOT_IMPORTABLE, await getImportableMaterials(payload.valid));
          commit(IMPORT_MATERIALS_COLUMNS_NOT_IMPORTABLE);
        }
        commit('LOADING', false, { root: true });
      }
    },
    getters: { },
    namespaced: true
  })
};
