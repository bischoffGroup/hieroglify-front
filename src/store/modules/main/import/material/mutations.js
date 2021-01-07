export default {
  CLEAR_STATE(state) {
    state.columnNames = [];
    state.data = [];
    state.categories = [];
  },
  NOT_IMPORTED_MATERIALS_COLUMNS(state) {
    const properties = Object.getOwnPropertyNames({ ...state.data });
    properties.forEach(e => {
      if (state.data[e].length > 0) {
        state.columnNames = Object.getOwnPropertyNames({
          ...state.data[e][0]
        }).map(e => {
          return {
            text: e,
            value: e
          };
        });
      }
    });
  },
  NOT_IMPORTED_MATERIALS(state, materials) {
    state.data = materials;
  },
  NOT_IMPORTED_MATERIALS_CATEGORIES(state) {
    state.categories =
      state.data.length === 0
        ? []
        : Object.getOwnPropertyNames({ ...state.data }).map(e => {
            return {
              text: e,
              value: e
            };
          });
  },
  IMPORT_MATERIALS(state, materials) {
    state.data = materials;
  },
  IMPORT_MATERIALS_COLUMNS(state) {
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
