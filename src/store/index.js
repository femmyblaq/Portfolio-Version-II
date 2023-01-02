import { createStore } from "vuex";

export default createStore({
  state: {
    showMessageModal: null,
  },
  mutations: {
    toggleModal: (state) => {
      state.showMessageModal = !state.showMessageModal;
      console.log("I got clicked", state.showMessageModal);
    },
  },
  actions: {
    // TOGGLE_MODAL({ commit }) {
    //   commit("toggleModal");
    // },
  },
  getters: {
    getState(state) {
      return state.showMessageModal;
    },
  },
  modules: {},
});
