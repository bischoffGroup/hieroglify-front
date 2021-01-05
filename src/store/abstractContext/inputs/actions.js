import { INPUT_TEXTFIELD_ABSTRACT } from '@/store/types/abstractContext/actionTypes';
import { GENERIC_VALUE_FROM_PATH_SET } from '@/store/types/defaultContext/actionTypes';

export default {
  async [INPUT_TEXTFIELD_ABSTRACT](
    { dispatch },
    payload = { path: undefined, value: undefined },
  ) {
    await dispatch(GENERIC_VALUE_FROM_PATH_SET, payload, { root: true });
  },
};
