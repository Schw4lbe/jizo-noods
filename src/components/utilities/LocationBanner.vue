<template>
  <section class="section-location-banner-main">
    <div class="location-banner-container">
      <img
        src="../../../public/img/paint-stroke.png"
        alt="dummy"
        class="background-img"
      />
      <div class="banner-content">
        <p class="banner-text">
          Craving delicious noodles? <br />Join us at our
          <span @click="scrollToLocation" class="highlight">PopUp</span> in
          <span @click="scrollToLocation" class="highlight">Trekanten</span>
          every
          <span @click="scrollToLocation" class="highlight">Thursday</span>,
          <span @click="scrollToLocation" class="highlight">Friday</span> and
          <span @click="scrollToLocation" class="highlight">Saturday</span> from
          <span @click="scrollToLocation" class="highlight">13:00</span> to
          <span @click="scrollToLocation" class="highlight">20:00</span>!
          <br />Dive into Jizo’s weekly mind-blowing flavors that are sure to
          tantalize your taste buds.
        </p>
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
