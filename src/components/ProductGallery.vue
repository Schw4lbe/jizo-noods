<template>
  <section class="prod-gallery-main">
    <h3 class="section-header">{{ content.productGallery.header }}</h3>
    <p class="gallery-description">{{ content.productGallery.description }}</p>
    <div class="prod-gallery-container">
      <!-- bootstrap gallery here later on -->
      images here soon...
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import contentData from "../../public/content.json";

export default defineComponent({
  name: "ProductGallery",
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
