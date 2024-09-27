<template>
  <div class="home-view-wrapper">
    <IntroScene />
    <SectionMenu />
    <!-- <SectionRamenKit /> -->
    <SectionGallery />
    <SectionAboutUs />
    <!-- <SectionFeedback /> -->
    <!-- <SectionQandA /> -->
    <SectionLocation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IntroScene from "@/components/IntroScene.vue";
// import SectionRamenKit from "@/components/SectionRamenKit.vue";
import SectionMenu from "@/components/SectionMenu.vue";
import SectionGallery from "@/components/SectionGallery.vue";
import SectionAboutUs from "@/components/SectionAboutUs.vue";
// import SectionFeedback from "@/components/SectionFeedback.vue";
// import SectionQandA from "@/components/SectionQandA.vue";
import SectionLocation from "@/components/SectionLocation.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    IntroScene,
    // SectionRamenKit,
    SectionMenu,
    SectionGallery,
    SectionAboutUs,
    // SectionFeedback,
    // SectionQandA,
    SectionLocation,
  },
});
</script>
