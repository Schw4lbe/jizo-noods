<template>
  <footer>
    <div class="footer-item-container">
      <a
        v-for="(item, index) in footerContent.items"
        :key="index"
        :href="item.url"
        >{{ item.label
        }}<span v-if="index < footerContent.items.length - 1"> | </span></a
      >
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../../public/content/footer.json";

export default {
  name: "FooterMain",

  data() {
    return {
      footerContent: null,
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
      this.footerContent = content[this.selectedLanguage];
    },
  },
};
</script>
