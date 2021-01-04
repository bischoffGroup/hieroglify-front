import {
  SYSTEM_TASKS,
  SYSTEM_TASKS_COLUMNS
} from "@/store/types/mutationTypes";
export default {
  [SYSTEM_TASKS](state, tasks) {
    state.data = tasks;
  },
  [SYSTEM_TASKS_COLUMNS](state) {
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
