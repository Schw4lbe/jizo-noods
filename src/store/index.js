import { createStore } from "vuex";

export default createStore({
  state: {
    language: localStorage.getItem("selectedLanguage") || "en",
    privacyAccepted: localStorage.getItem("privacyIsAccepted") === "true",
  },

  getters: {
    selectedLanguage: (state) => state.language,
    privacyIsAccepted: (state) => state.privacyAccepted,
  },

  mutations: {
    updateLanguage(state, newLanguage) {
      state.language = newLanguage;
    },
    updatePrivacy(state, bool) {
      state.privacyAccepted = bool;
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

    isPrivacyAccepted({ commit }) {
      const privacyIsAccepted = localStorage.getItem("privacyIsAccepted");
      // set default privacy setting to false
      if (!privacyIsAccepted) {
        localStorage.setItem("privacyIsAccepted", "false");
        commit("updatePrivacy", false);
      }
    },

    setPrivacyAccepted({ commit }, bool) {
      localStorage.setItem("privacyIsAccepted", bool);
      commit("updatePrivacy", bool);
    },
  },
  modules: {},
});
