import { getGroupings } from "@/services";
export default {
  generateMaterialGroupings(context) {
    context.commit("LOADING", true, { root: true });
    getGroupings()
      .then(response => {
        context.commit("MATERIALS_GROUPINGS", response.success.materiais);
        context.commit("MATERIALS_GROUPINGS_COLUMNS");
      })
      .catch()
      .finally(() => {
        context.commit("LOADING", false, { root: true });
      });
  }
};
