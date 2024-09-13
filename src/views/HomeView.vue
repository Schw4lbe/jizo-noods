<template>
  <div class="home-view-wrapper">
    <SectionRamenKit />
    <hr />
    <SectionMenu />
    <hr />
    <SectionGallery />
    <hr />
    <SectionAboutUs />
    <hr />
    <SectionFeedback />
    <hr />
    <SectionQandA />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionRamenKit from "@/components/SectionRamenKit.vue";
import SectionMenu from "@/components/SectionMenu.vue";
import SectionGallery from "@/components/SectionGallery.vue";
import SectionAboutUs from "@/components/SectionAboutUs.vue";
import SectionFeedback from "@/components/SectionFeedback.vue";
import SectionQandA from "@/components/SectionQandA.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    SectionRamenKit,
    SectionMenu,
    SectionGallery,
    SectionAboutUs,
    SectionFeedback,
    SectionQandA,
  },
});
</script>
