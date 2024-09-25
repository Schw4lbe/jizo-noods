<template>
  <div id="app">
    <NavbarMain />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import NavbarMain from "./components/utilities/NavbarMain.vue";

export default defineComponent({
  name: "App",

  components: {
    NavbarMain,
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
