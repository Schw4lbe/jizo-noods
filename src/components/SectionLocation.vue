<template>
  <section class="section-location-main" id="location">
    <h3 class="section-header">{{ sectionContent.sectionLocation.header }}</h3>
    <div class="location-map-container">
      <a :href="sectionContent.googleMapsUrl" class="map-link" target="blank">
        <img
          src="../../public/img/location/gmaps-dummy-screenshot.webp"
          alt="dummy"
        />
      </a>
    </div>

    <div class="layout-container">
      <div class="location-address-container">
        <h4 class="address-header">
          {{ sectionContent.address.header }}
        </h4>
        <div class="location-address">
          <p class="street">
            {{ sectionContent.address.street }}
            <span class="house-number">{{
              sectionContent.address.houseNumber
            }}</span>
          </p>
          <p class="zip-code">
            {{ sectionContent.address.zipCode }}
            <span class="city">{{ sectionContent.address.city }}</span>
          </p>
        </div>
      </div>
      <div class="social-media-container" id="social-media">
        <h4 class="social-media-header">
          {{ sectionContent.socialMediaHeader }}
        </h4>
        <div class="social-media-wrapper">
          <div
            v-for="(item, index) in sectionContent.socialMedia"
            :key="index"
            class="social-media-item to-rubberband"
          >
            <a :href="item.url" class="url" target="blank"
              ><i :class="item.icon"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import infoData from "../../public/content/company-info.json";

export default {
  name: "SectionLocation",

  data() {
    return {
      sectionContent: null,
    };
  },

  created() {
    this.setContent();
  },

  watch: {
    selectedLanguage: {
      handler() {
        this.setContent(); // Re-run setContent when selectedLanguage changes
      },
      immediate: true, // Ensures the watcher runs once on initialization
    },
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setContent() {
      this.sectionContent = infoData[this.selectedLanguage];
    },
  },
};
</script>
