<template>
  <div id="app">
    <NetlifyIdentity />
    <div class="render-on-login-dev">
      <div class="navbar-wrapper">
        <NavbarMain />
      </div>
      <div class="page-wrapper">
        <div class="background-filler"></div>
        <div class="content-wrapper">
          <router-view />
        </div>
      </div>
      <FooterMain />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import NavbarMain from "./components/utilities/NavbarMain.vue";
import FooterMain from "./components/utilities/FooterMain.vue";
import NetlifyIdentity from "./components/utilities/NetlifyIdentity.vue";

export default defineComponent({
  name: "App",

  components: {
    NavbarMain,
    FooterMain,
    NetlifyIdentity,
  },

  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("isLanguageSet");
    });

    return {};
  },
});
</script>
