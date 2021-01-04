import { getGroupings } from "@/services";
export default {
  generateProductGroupings(context) {
    context.commit("LOADING", true, { root: true });
    getGroupings()
      .then(response => {
        context.commit("PRODUCTS_GROUPINGS", response.success.produtos);
        context.commit("PRODUCTS_GROUPINGS_COLUMNS");
      })
      .catch()
      .finally(() => {
        context.commit("LOADING", false, { root: true });
      });
  }
};
