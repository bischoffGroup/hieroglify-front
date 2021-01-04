export default {
  addItemToSearchList({ commit }, item) {
    commit("ADD_ITEM_TO_SEARCH_LIST", item);
  },
  removeItemToSearchList({ commit }, item) {
    commit("REMOVE_ITEM_TO_SEARCH_LIST", item);
  },
  clearSearchList({ commit }) {
    commit("CLEAR_ARRAY", "search.list");
  }
};
