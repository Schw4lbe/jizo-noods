<template>
  <div id="app">
    <NetlifyIdentity />
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
import NetlifyIdentity from "./components/utilities/NetlifyIdentity.vue";
import NavbarMain from "@/components/utilities/NavbarMain.vue";
import FooterMain from "./components/utilities/FooterMain.vue";
import PrivacyPopup from "./components/utilities/PrivacyPopup.vue";

export default {
  name: "App",
  components: {
    NetlifyIdentity,
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
