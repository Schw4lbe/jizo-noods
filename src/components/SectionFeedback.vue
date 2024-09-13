<template>
  <section class="section-feedback-main">
    <h3 class="section-header">{{ content.sectionFeedback.header }}</h3>
    <p class="feedback-description">
      {{ content.sectionFeedback.description }}
    </p>
    <div class="feedback-redirect">
      <a :href="content.sectionFeedback.url" class="feedback-url">
        <span class="url-text">{{ content.sectionFeedback.urlText }}</span>
      </a>
      <div class="feedback-qr">QR Code here...</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import contentData from "../../public/content.json";

export default defineComponent({
  name: "SectionFeedback",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    return { content };
  },
});
</script>
