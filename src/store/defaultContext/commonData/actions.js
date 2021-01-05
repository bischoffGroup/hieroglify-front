import { GENERIC_VALUE_FROM_PATH_SET } from '@/store/types/defaultContext/actionTypes';

export default {
  async [GENERIC_VALUE_FROM_PATH_SET](
    { commit, rootState },
    payload = { path: undefined, value: undefined },
  ) {
    // eslint-disable-next-line no-param-reassign
    payload.state = rootState;
    commit('setValueFromPath', payload);
  },
};
