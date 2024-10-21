<template>
  <section class="section-qa-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <p class="qa-description">{{ sectionContent.description }}</p>
    <div class="qa-content-container">Content and build tbd...</div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../public/content/content.json";

export default {
  name: "SectionQandA",

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
      this.sectionContent = content[this.selectedLanguage].sectionQandA;
    },
  },
};
</script>
