<template>
  <section class="section-location-banner-main">
    <div class="location-banner-container">
      <img
        src="../../../public/img/paint-stroke.webp"
        alt="dummy"
        class="background-img"
      />
      <div class="banner-content">
        <p class="banner-text">
          <span
            v-for="item in bannerTextElements"
            :key="item.order"
            :class="item.isHighlighted ? 'highlight' : 'text'"
            >{{ item.text }}</span
          >
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
      bannerTextElements: [],
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
      const bannerContent = content[this.selectedLanguage].text;
      const splitArr = [];
      let orderCounter = 0;

      // Use a regular expression to capture highlighted and non-highlighted text, preserving whitespace
      const regex = /\*\*(.*?)\*\*|([^*]+)/g;
      let match;

      while ((match = regex.exec(bannerContent)) !== null) {
        if (match[1]) {
          // Text inside ** (highlighted)
          splitArr.push({
            order: orderCounter++,
            isHighlighted: true,
            text: match[1], // Preserve whitespace as-is
          });
        } else if (match[2]) {
          // Text outside ** (regular text)
          splitArr.push({
            order: orderCounter++,
            isHighlighted: false,
            text: match[2], // Preserve whitespace as-is
          });
        }
      }
      this.bannerTextElements = splitArr;
    },

    scrollToLocation() {
      const section = document.querySelector("#location");
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>
