export default {
  MATERIALS_GROUPINGS(state, groupings) {
    state.data = groupings;
  },
  MATERIALS_GROUPINGS_COLUMNS(state) {
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
