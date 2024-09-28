<template>
  <IntroScene />
  <div class="section-wrapper">
    <SectionMenu />
  </div>
  <div class="section-wrapper">
    <SectionGallery />
  </div>
  <div class="section-wrapper">
    <SectionAboutUs />
  </div>
  <div class="section-wrapper">
    <SectionLocation />
  </div>

  <!-- commented out for later use. -->
  <!-- <SectionRamenKit /> -->
  <!-- <SectionFeedback /> -->
  <!-- <SectionQandA /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IntroScene from "@/components/IntroScene.vue";
import SectionMenu from "@/components/SectionMenu.vue";
import SectionGallery from "@/components/SectionGallery.vue";
import SectionAboutUs from "@/components/SectionAboutUs.vue";
import SectionLocation from "@/components/SectionLocation.vue";
// import SectionRamenKit from "@/components/SectionRamenKit.vue";
// import SectionFeedback from "@/components/SectionFeedback.vue";
// import SectionQandA from "@/components/SectionQandA.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    IntroScene,
    SectionMenu,
    SectionGallery,
    SectionAboutUs,
    SectionLocation,
    // SectionRamenKit,
    // SectionFeedback,
    // SectionQandA,
  },
});
</script>
