<template>
  <div id="app">
    <div class="home-view-conditional" v-if="!isPrint">
      <NetlifyIdentity v-if="!isUserLoggedIn" />
      <PrivacyPopup />
      <div class="navbar-wrapper">
        <img
          src="../public/img/paint-stroke-variant-a.png"
          alt="dummy"
          class="background-img"
        />
        <NavbarMain />
      </div>
      <router-view />
      <FooterMain />
    </div>

    <div class="print-view-conditional" v-if="isPrint">
      <router-view />
    </div>
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

  data() {
    return {
      isUserLoggedIn: false,
    };
  },

  computed: {
    isPrint() {
      return this.$route.name === "print";
    },
  },

  created() {
    this.checkUserStatus();
    this.isPrivacyAccepted();
    this.isLanguageSet();
  },

  methods: {
    ...mapActions(["isPrivacyAccepted", "isLanguageSet"]),
    checkUserStatus() {
      const user = localStorage.getItem("gotrue.user");
      // double !! converts value to bool
      this.isUserLoggedIn = !!user;
    },
  },
};
</script>
