import { SYSTEM_TASKS, SYSTEM_TASKS_COLUMNS } from '@/store/modules/enums/mutationTypes';
import { DEFAULT_CHECKBOX, SYSTEM_TASK_GENERATE_TASKS } from '@/store/modules/enums/actionTypes';
import { changeTaskStatus, getTasks } from '@/services';

export default {
  use: () => ({
    state: {
      data: [],
      columnNames: []
    },
    mutations: {
      [SYSTEM_TASKS](state, tasks) {
        state.data = tasks;
      },
      [SYSTEM_TASKS_COLUMNS](state) {
        state.columnNames = state.data.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.data[0] }).map(e => ({
            text: e,
            value: e
          }));
      }
    },
    actions: {
      async [DEFAULT_CHECKBOX]({ dispatch }, payload = { value: undefined, dto: { _ID: undefined } }) {
        await changeTaskStatus(payload.dto._ID, payload.value);
        await dispatch(SYSTEM_TASK_GENERATE_TASKS, { root: true });
      },
      async [SYSTEM_TASK_GENERATE_TASKS]({ commit }) {
        await commit('LOADING', true, { root: true });
        commit(SYSTEM_TASKS, await getTasks());
        commit(SYSTEM_TASKS_COLUMNS);
        commit('LOADING', false, { root: true });
      }
    },
    namespaced: true
  })
};
