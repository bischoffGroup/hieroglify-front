import {
  DEFAULT_CHECKBOX,
  SYSTEM_TASK_GENERATE_TASKS
} from '@/store/modules/enums/actionTypes';

import { changeTaskStatus, getTasks } from '@/services';
import {
  SYSTEM_TASKS,
  SYSTEM_TASKS_COLUMNS
} from '@/store/modules/enums/mutationTypes';

export default {
  async [DEFAULT_CHECKBOX](
    { commit, dispatch },
    payload = { value: undefined, dto: undefined }
  ) {
    await changeTaskStatus(payload.dto._ID, payload.value);
    await dispatch(SYSTEM_TASK_GENERATE_TASKS, { root: true });
  },
  async [SYSTEM_TASK_GENERATE_TASKS]({ commit }) {
    commit('LOADING', true, { root: true });
    const result = await getTasks();
    commit(SYSTEM_TASKS, result);
    commit(SYSTEM_TASKS_COLUMNS);
    commit('LOADING', false, { root: true });
  }
};
