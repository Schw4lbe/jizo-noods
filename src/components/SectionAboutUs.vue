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
          <p class="content-text to-slide-in-bottom">
            <span class="highlight">{{ sectionContent.highlight01 }}</span>
            {{ sectionContent.text01 }}
            <span class="highlight">{{ sectionContent.highlight02 }}</span>
            {{ sectionContent.text02 }}
          </p>
        </div>

        <div class="grid-item">
          <p class="content-text to-slide-in-bottom">
            {{ sectionContent.text03 }}

            <span class="highlight">{{ sectionContent.highlight03 }}</span>
            {{ sectionContent.text04 }}
          </p>
          <img
            src="../../public/img/about-us/500x1000_1.png"
            alt="Jizu Manga Art"
            class="content-image to-slide-in-bottom"
          />
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
