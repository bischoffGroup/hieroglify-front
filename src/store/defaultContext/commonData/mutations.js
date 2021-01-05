export default {
  setValueFromPath(state, payload = { path: undefined, value: undefined }) {
    if (Array.isArray(payload.path)) {
      payload.path = payload.path.join(".");
    }
    state = setDeepValueByPath(state, payload.path, payload.value);
  }
};
