import { FROM_SUPPLIERS_GENERATE_SUPPLIERS } from "@/store/types/actionTypes";

import { getSuppliers } from "@/services";
import {
  FROM_SUPPLIERS_COLUMNS,
  FROM_SUPPLIERS
} from "@/store/types/mutationTypes";

export default {
  async [FROM_SUPPLIERS_GENERATE_SUPPLIERS]({ commit }) {
    commit("LOADING", true, { root: true });
    const result = await getSuppliers();
    commit(FROM_SUPPLIERS, result);
    commit(FROM_SUPPLIERS_COLUMNS);
    commit("LOADING", false, { root: true });
  }
};
