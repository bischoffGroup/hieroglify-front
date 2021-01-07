export default {
  use: () => ({
    state: {
      loading: false
    },
    mutations: {
      LOADING(state, loading) {
        state.loading = loading;
      }
    },
    actions: {}
    // namespaced: true
  })

};
