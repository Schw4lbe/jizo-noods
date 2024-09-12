<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("isLanguageSet");
    });

    return {};
  },
});
</script>

<style>
* {
  color: beige;
  background: #333;
}
</style>
