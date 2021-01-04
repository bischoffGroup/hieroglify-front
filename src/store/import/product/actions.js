import { createProductPrice, getImportedProduct } from "@/services";
import {
  IMPORT_CREATE_PRODUCT_PRICE,
  IMPORT_PRODUCT_GENERATE_IMPORTED_PRODUCTS,
  IMPORT_PRODUCT_GENERATE_NOT_IMPORTED_PRODUCTS
} from "@/store/types/actionTypes";
import { getNotImportedProduct } from "@/services/import/products";

export default {
  async [IMPORT_PRODUCT_GENERATE_IMPORTED_PRODUCTS]({ commit }) {
    commit("LOADING", true, { root: true });
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
  },
  async [IMPORT_PRODUCT_GENERATE_NOT_IMPORTED_PRODUCTS]({ commit }) {
    commit("LOADING", true, { root: true });
    getNotImportedProduct()
      .then(response => {
        commit("NOT_IMPORTED_PRODUCTS", response);
        commit("NOT_IMPORTED_PRODUCTS_COLUMNS");
        commit("NOT_IMPORTED_PRODUCTS_CATEGORIES");
      })
      .catch()
      .finally(() => {
        commit("LOADING", false, { root: true });
      });
  },
  async [IMPORT_CREATE_PRODUCT_PRICE]({ commit }, artigos) {
    commit("LOADING", true, { root: true });
    createProductPrice(artigos)
      .then(response => {
        commit.dispatch(
          "DISPATCH_NOTIFY",
          { message: response, type: "success", title: response },
          { root: true }
        );
      })
      .catch(error => {
        commit.dispatch(
          "DISPATCH_NOTIFY",
          { message: response, type: "error", title: error },
          { root: true }
        );
      })
      .finally(() => {
        commit("LOADING", false, { root: true });
      });
  }
};
