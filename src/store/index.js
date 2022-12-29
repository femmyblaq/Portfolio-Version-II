import { createStore } from "vuex";

export default createStore({
  state: {
    showMessageModal: false,
  },
  mutations: {
    MODAL(state) {
      state.showMessageModal = !state.showMessageModal;
      console.log("I got clicked");
    },
  },
  actions: {},
  getters: {
    getState(state) {
      return state.showMessageModal;
    },
  },
  modules: {},
});
