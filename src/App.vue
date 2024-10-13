<template>
  <div id="app">
    <PrivacyPopup />
    <div class="navbar-wrapper">
      <img
        src="../public/img/paint-stroke.png"
        alt="dummy"
        class="background-img"
      />
      <NavbarMain />
    </div>
    <router-view />
    <FooterMain />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavbarMain from "@/components/utilities/NavbarMain.vue";
import FooterMain from "./components/utilities/FooterMain.vue";
import PrivacyPopup from "./components/utilities/PrivacyPopup.vue";

export default {
  name: "App",
  components: {
    NavbarMain,
    FooterMain,
    PrivacyPopup,
  },

  created() {
    this.isPrivacyAccepted();
    this.isLanguageSet();
  },

  methods: {
    ...mapActions(["isPrivacyAccepted", "isLanguageSet"]),
  },
};
</script>
