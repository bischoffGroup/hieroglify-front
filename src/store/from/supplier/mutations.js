import {
  FROM_SUPPLIERS,
  FROM_SUPPLIERS_COLUMNS
} from "@/store/types/mutationTypes";
export default {
  [FROM_SUPPLIERS](state, tasks) {
    state.data = tasks;
  },
  [FROM_SUPPLIERS_COLUMNS](state) {
    state.columnNames =
      state.data.length === 0
        ? []
        : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => {
            return {
              text: e,
              value: e
            };
          });
  }
};
