<template>
  <section class="section-about-main" id="section-about-us">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <div class="about-content-container">
      <h4 class="content-subheader to-slide-in-bottom">
        {{ sectionContent.subheader }}
      </h4>
      <div class="content-grid">
        <div class="grid-item">
          <img
            src="../../public/img/about-us/500x1000_2.png"
            alt="Jizu Manga Art"
            class="content-image to-slide-in-bottom"
          />
        </div>
        <div class="grid-item">
          <a href="/about-us" class="text-on-image-container to-slide-in-left">
            <img
              src="../../public/img/about-us/dialogue-bubble.png"
              alt="dialogue bubble"
              class="teaser-graphic"
            />
            <p
              class="teaser-text animate__pulse animate__animated animate__infinite"
            >
              {{ sectionContent.teaser }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../public/content/about-us.json";

export default {
  name: "SectionAboutUs",

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
      this.sectionContent = content[this.selectedLanguage];
    },
  },
};
</script>
