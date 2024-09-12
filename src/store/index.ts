import { createStore } from "vuex";

export default createStore({
  state: {
    language: "en",
  },

  getters: {
    selectedLanguage: (state) => state.language,
  },

  mutations: {
    updateLanguage(state, newLanguage) {
      state.language = newLanguage;
      console.log(state.language);
    },
  },

  actions: {
    isLanguageSet({ commit }) {
      const selectedLanguage = localStorage.getItem("selectedLanguage");

      // set default language to english
      if (!selectedLanguage) {
        localStorage.setItem("selectedLanguage", "en");
        commit("updateLanguage", "en");
      }
    },

    setLanguage({ commit }, language) {
      localStorage.setItem("selectedLanguage", language);
      commit("updateLanguage", language);
    },
  },
  modules: {},
});
