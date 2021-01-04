export default {
  PRODUCTS(state, products) {
    state.data = products;
  },
  PRODUCTS_COLUMNS(state) {
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
