<template>
  <IntroScene />
  <LocationBanner />
  <div class="section-wrapper section-wrapper-variant-a">
    <SectionMenu />
  </div>
  <div class="section-wrapper section-wrapper-variant-d">
    <SectionGallery />
  </div>
  <div class="section-wrapper section-wrapper-variant-d">
    <SectionAboutUs />
  </div>
  <div class="section-wrapper section-wrapper-variant-c">
    <img
      src="../../public/img/paint-stroke-variant-b.webp"
      alt="dummy"
      class="background-img"
    />
    <SectionLocation />
  </div>
</template>

<script>
import IntroScene from "@/components/IntroScene.vue";
import LocationBanner from "@/components/utilities/LocationBanner.vue";
import SectionMenu from "@/components/SectionMenu.vue";
import SectionGallery from "@/components/SectionGallery.vue";
import SectionAboutUs from "@/components/SectionAboutUs.vue";
import SectionLocation from "@/components/SectionLocation.vue";
import animation from "@/scripts/animation";

export default {
  name: "HomeView",
  components: {
    IntroScene,
    LocationBanner,
    SectionMenu,
    SectionGallery,
    SectionAboutUs,
    SectionLocation,
  },

  mixins: [animation],
};
</script>
