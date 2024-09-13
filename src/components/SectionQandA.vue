<template>
  <section class="section-qa-main">
    <h3 class="section-header">{{ content.sectionQandA.header }}</h3>
    <p class="qa-description">{{ content.sectionQandA.description }}</p>
    <div class="qa-content-container">Content and build tbd...</div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import contentData from "../../public/content.json";

export default defineComponent({
  name: "SectionQandA",
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
