import { createStore } from "vuex";

export default createStore({
  state: {
    selectedLanguage: "en",
  },

  getters: {
    getSelectedLanguage: (state) => state.selectedLanguage,
  },

  mutations: {
    setLanguage(state, language) {
      state.selectedLanguage = language;
    },
  },

  actions: {
    // for later usecases switch to NO
    setLanguageNO({ commit }) {
      localStorage.setItem("selectedLanguage", "no");
      commit("setLanguage", "no");
    },
    loadSelectedLanguage({ commit }) {
      const language = localStorage.getItem("selectedLanguage") || "en";
      commit("setLanguage", language);
    },
  },
  modules: {},
});
