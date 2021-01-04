export default {
  PRODUCTS_GROUPINGS(state, groupings) {
    state.data = groupings;
  },
  PRODUCTS_GROUPINGS_COLUMNS(state) {
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
