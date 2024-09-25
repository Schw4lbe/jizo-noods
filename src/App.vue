<template>
  <div id="app">
    <NavbarMain />
    <router-view />
    <FooterMain />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import NavbarMain from "./components/utilities/NavbarMain.vue";
import FooterMain from "./components/utilities/FooterMain.vue";

export default defineComponent({
  name: "App",

  components: {
    NavbarMain,
    FooterMain,
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
