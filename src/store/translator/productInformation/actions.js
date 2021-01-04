import {
  getProductsInformation,
  downloadProductsInformationXlsx
} from "@/services";
export default {
  generateProductsInformation(context, products) {
    context.commit("LOADING", true, { root: true });
    getProductsInformation(products)
      .then(response => {
        context.commit("PRODUCTS_INFORMATION", response);
        context.commit("PRODUCTS_INFORMATION_COLUMNS");
      })
      .catch()
      .finally(() => {
        context.commit("LOADING", false, { root: true });
      });
  },
  productsInformationXlsx(context, products) {
    context.commit("LOADING", true, { root: true });
    downloadProductsInformationXlsx(products);
    context.commit("LOADING", false, { root: true });
  }
};
