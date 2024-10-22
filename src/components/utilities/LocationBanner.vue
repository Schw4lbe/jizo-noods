<template>
  <section class="section-location-banner-main">
    <div class="location-banner-container">
      <img
        src="../../../public/img/paint-stroke.png"
        alt="dummy"
        class="background-img"
      />
      <div @click="scrollToLocation" class="banner-content">
        <p class="banner-text">
          Craving delicious noodles? <br />Join us at our
          <span class="highlight">PopUp</span> in
          <span class="highlight">Trekanten</span> every
          <span class="highlight">Thursday</span> and
          <span class="highlight">Friday</span> from
          <span class="highlight">13:00</span> to
          <span class="highlight">20:00</span>! <br />Dive into Jizo’s weekly
          mind-blowing flavors that are sure to tantalize your taste buds.
        </p>

        <!-- <span class="location-name">
          {{ bannerContent.name }}
        </span>
        <span class="location-address">{{ bannerContent.address }}</span>
        <span class="location-business-hours">{{
          bannerContent.businessHours
        }}</span> -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../../public/content/locationBanner.json";

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
      this.bannerContent = content[this.selectedLanguage];
    },

    scrollToLocation() {
      const section = document.querySelector("#location");
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>
