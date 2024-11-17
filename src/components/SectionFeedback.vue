<template>
  <section class="section-feedback-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <p class="feedback-description">
      {{ sectionContent.description }}
    </p>
    <div class="feedback-redirect">
      <a :href="sectionContent.url" class="feedback-url">
        <span class="url-text">{{ sectionContent.urlText }}</span>
      </a>
      <div class="qr-container">
        <img
          src="../../public/img/feedback/qr-dummy.png"
          alt="dummy"
          class="feedback-qr"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../public/content/content.json";

export default {
  name: "SectionFeedback",

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
      this.sectionContent = content[this.selectedLanguage].sectionFeedback;
    },
  },
};
</script>
