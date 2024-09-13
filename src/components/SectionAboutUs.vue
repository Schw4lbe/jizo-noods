<template>
  <section class="section-about-main">
    <h3 class="section-header">{{ content.sectionAboutUs.header }}</h3>
    <p class="about-description">{{ content.sectionAboutUs.description }}</p>
    <div class="about-content-container">
      <div v-for="(item, index) in items" :key="index" class="about-item">
        <h4 class="content-header">{{ item.header }}</h4>
        <p class="description">{{ item.description }}</p>
        <!-- tbd video / image in about us possible? -->
        <div class="media">could place media in here...</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import contentData from "../../public/content.json";

interface AboutItem {
  header: string;
  description: string;
}

export default defineComponent({
  name: "SectionAboutUs",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    const items = computed(
      () => content.value.sectionAboutUs.items as AboutItem
    );

    return { content, items };
  },
});
</script>
