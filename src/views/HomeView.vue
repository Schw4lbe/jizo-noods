<template>
  <div class="home-view-wrapper">
    <SectionRamenKit />
    <hr />
    <SectionMenu />
    <hr />
    <SectionGallery />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionRamenKit from "@/components/SectionRamenKit.vue";
import SectionMenu from "@/components/SectionMenu.vue";
import SectionGallery from "@/components/SectionGallery.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    SectionRamenKit,
    SectionMenu,
    SectionGallery,
  },
});
</script>
