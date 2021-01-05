import { setDeepValueByPath } from '@/utils/objUtils';

export default {
  setValueFromPath(state, payload = { path: undefined, value: undefined }) {
    let newPath = '';
    if (Array.isArray(payload.path)) {
      newPath = payload.path.join('.');
    }
    setDeepValueByPath(state, newPath, payload.value);
  },
};
