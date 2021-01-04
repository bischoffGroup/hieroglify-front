import { replaceValue } from "@/helpers/collections";

export default {
  ADD_ITEM_TO_SEARCH_LIST(state, item) {
    state.search.list.push(item.toUpperCase());
  },
  REMOVE_ITEM_TO_SEARCH_LIST(state, item) {
    state.search.list = state.search.list.filter(e => {
      return e !== item;
    });
  },
  CLEAR_ARRAY(state, pathToObject) {
    replaceValue(state, pathToObject, []);
  }
};
