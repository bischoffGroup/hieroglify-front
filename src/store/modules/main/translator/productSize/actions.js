import { getProductsSize } from "@/services";
export default {
  generateProductsSize(context, products) {
    context.commit("LOADING", true, { root: true });
    getProductsSize(products)
      .then(response => {
        context.commit("PRODUCTS_SIZE", response);
        context.commit("PRODUCTS_SIZE_COLUMNS");
      })
      .catch()
      .finally(() => {
        context.commit("LOADING", false, { root: true });
      });
  }
};
