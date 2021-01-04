export default {
  PRODUCTS_INFORMATION(state, productsInformation) {
    state.data = productsInformation;
  },
  PRODUCTS_INFORMATION_COLUMNS(state) {
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
