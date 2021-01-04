import { getImportedProduct, getNotImportedMaterial } from "@/services";
import {
  IMPORT_MATERIAL_CLEAR_STATE,
  IMPORT_MATERIAL_GENERATE_IMPORTED_MATERIALS,
  IMPORT_MATERIAL_GENERATE_NOT_IMPORTED_MATERIALS
} from "@/store/types/actionTypes";

export default {
  async [IMPORT_MATERIAL_CLEAR_STATE]({ commit }) {
    commit("LOADING", true, { root: true });
    commit("CLEAR_STATE");
    commit("LOADING", false, { root: true });
  },
  async [IMPORT_MATERIAL_GENERATE_NOT_IMPORTED_MATERIALS]({ commit }) {
    commit("LOADING", true, { root: true });
    commit("CLEAR_STATE");
    getNotImportedMaterial()
      .then(response => {
        commit("NOT_IMPORTED_MATERIALS", response);
        commit("NOT_IMPORTED_MATERIALS_CATEGORIES", response);
        commit("NOT_IMPORTED_MATERIALS_COLUMNS");
      })
      .catch()
      .finally(() => {
        commit("LOADING", false, { root: true });
      });
  },
  async [IMPORT_MATERIAL_GENERATE_IMPORTED_MATERIALS]({ commit }) {
    commit("LOADING", true, { root: true });
    commit("CLEAR_STATE");
    getImportedProduct()
      .then(response => {
        commit("IMPORT_PRODUCTS", response.produtos);
        commit("IMPORT_PRODUCTS_COLUMNS");
        commit("IMPORT_MATERIALS", response.materiais);
        commit("IMPORT_MATERIALS_COLUMNS");
      })
      .catch()
      .finally(() => {
        commit("LOADING", false, { root: true });
      });
  }
};
