<template>
  <section class="section-location-banner-main">
    <div class="location-banner-container">
      <img
        src="../../../public/img/paint-stroke.png"
        alt="dummy"
        class="background-img"
      />
      <div class="banner-content">
        <span class="location-name">{{ bannerContent.name }}</span>
        <span class="location-address">{{ bannerContent.address }}</span>
        <span class="location-business-hours">{{
          bannerContent.businessHours
        }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../../public/content.json";

export default {
  name: "LocationBanner",

  data() {
    return {
      bannerContent: null,
    };
  },

  created() {
    this.setContent();
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setContent() {
      this.bannerContent = content[this.selectedLanguage].locationBanner;
    },
  },
};
</script>
