<template>
  <IntroScene />
  <LocationBanner />
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
  <!-- <div class="section-wrapper">
    <SectionRamenKit />
  </div> -->
  <!-- <div class="section-wrapper">
    <SectionFeedback />
  </div> -->
  <!-- <div class="section-wrapper">
    <SectionQandA />
  </div> -->
</template>

<script>
import IntroScene from "@/components/IntroScene.vue";
import LocationBanner from "@/components/utilities/LocationBanner.vue";
import SectionMenu from "@/components/SectionMenu.vue";
import SectionGallery from "@/components/SectionGallery.vue";
import SectionAboutUs from "@/components/SectionAboutUs.vue";
import SectionLocation from "@/components/SectionLocation.vue";
// import SectionRamenKit from "@/components/SectionRamenKit.vue";
// import SectionFeedback from "@/components/SectionFeedback.vue";
// import SectionQandA from "@/components/SectionQandA.vue";

export default {
  name: "HomeView",
  components: {
    IntroScene,
    LocationBanner,
    SectionMenu,
    SectionGallery,
    SectionAboutUs,
    SectionLocation,
    // SectionRamenKit,
    // SectionFeedback,
    // SectionQandA,
  },
};
</script>
