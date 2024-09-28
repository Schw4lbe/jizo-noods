<template>
  <section class="section-location-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <div class="location-map-container">
      <a :href="sectionContent.googleMapsUrl" class="map-link" target="blank">
        <img
          src="../../public/img/location/gmaps-dummy-screenshot.jpg"
          alt="dummy"
        />
      </a>
    </div>
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
    <div class="social-media-container">
      <h4 class="social-media-header">
        {{ sectionContent.socialMediaHeader }}
      </h4>
      <div class="social-media-wrapper">
        <div
          v-for="(item, index) in sectionContent.socialMedia"
          :key="index"
          class="social-media-item"
        >
          <a :href="item.url" class="url"
            ><i :class="item.icon"></i>{{ item.name }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../public/content.json";

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

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setContent() {
      this.sectionContent = content[this.selectedLanguage].sectionLocation;
    },
  },
};
</script>
