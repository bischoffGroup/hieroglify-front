export default {
  state: {
    notify: false,
    message: "",
    type: "",
    title: ""
  },
  actions: {
    DISPATCH_NOTIFY(context, notification) {
      context.commit("NOTIFY", notification);
      setTimeout(() => {
        context.commit("UNNOTIFY");
      }, 5000);
    }
  },
  mutations: {
    NOTIFY(state, notification) {
      state.notify = true;
      state.message = notification.message;
      state.type = notification.type;
      state.title = notification.title;
    },
    UNNOTIFY(state) {
      state.notify = false;
      state.message = "";
      state.type = "";
      state.title = "";
    }
  }
};
