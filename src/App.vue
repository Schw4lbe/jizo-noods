<template>
  <div id="app">
    <!-- <NetlifyIdentity @user-status-changed="handleUserStatusChange" /> -->
    <!-- <PrivacyPopup :loginSuccess="isUserLoggedIn" /> -->
    <PrivacyPopup />
    <!-- <div v-if="isUserLoggedIn" class="render-on-login-dev"> -->
    <div class="navbar-wrapper">
      <NavbarMain />
    </div>
    <router-view />
    <FooterMain />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import NavbarMain from "./components/utilities/NavbarMain.vue";
import FooterMain from "./components/utilities/FooterMain.vue";
import PrivacyPopup from "./components/utilities/PrivacyPopup.vue";
// import NetlifyIdentity from "./components/utilities/NetlifyIdentity.vue";

export default defineComponent({
  name: "App",

  components: {
    NavbarMain,
    FooterMain,
    // NetlifyIdentity,
    PrivacyPopup,
  },

  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("isLanguageSet");
      store.dispatch("isPrivacyAccepted");
    });

    // const isUserLoggedIn = ref(false);

    // const handleUserStatusChange = (status: boolean) => {
    //   isUserLoggedIn.value = status;
    // };

    // return { isUserLoggedIn, handleUserStatusChange };
    return {};
  },
});
</script>
