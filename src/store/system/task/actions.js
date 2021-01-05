import {
  DEFAULT_CHECKBOX,
  SYSTEM_TASK_GENERATE_TASKS
} from "@/store/types/actionTypes";

import { changeTaskStatus, getTasks } from "@/services";
import {
  SYSTEM_TASKS,
  SYSTEM_TASKS_COLUMNS
} from "@/store/types/mutationTypes";

export default {
  [DEFAULT_CHECKBOX]: async function(
    { commit, dispatch },
    payload = { value: undefined, dto: undefined }
  ) {
    await changeTaskStatus(payload.dto._ID, payload.value);
    await dispatch(SYSTEM_TASK_GENERATE_TASKS, { root: true });
  },
  [SYSTEM_TASK_GENERATE_TASKS]: async function({ commit }) {
    commit("LOADING", true, { root: true });
    const result = await getTasks();
    commit(SYSTEM_TASKS, result);
    commit(SYSTEM_TASKS_COLUMNS);
    commit("LOADING", false, { root: true });
  }
};
