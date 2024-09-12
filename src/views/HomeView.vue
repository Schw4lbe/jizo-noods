<template>
  <div class="home-view-wrapper">
    <ProductRamenKit />
    <hr />
    <ProductMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductRamenKit from "@/components/ProductRamenKit.vue";
import ProductMenu from "@/components/ProductMenu.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ProductRamenKit,
    ProductMenu,
  },
});
</script>
