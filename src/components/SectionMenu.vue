<template>
  <section class="section-menu-main">
    <h3 class="section-header">{{ content.sectionMenu.header }}</h3>
    <!-- outsource starters if they are getting more complex -->
    <div class="menu-starter-container">
      <h4 class="starter-header">{{ content.sectionMenu.starters.header }}</h4>
      <p class="starter-teaser">{{ content.sectionMenu.starters.teaser }}</p>
    </div>
    <MenuSoups />
    <MenuAllergens />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import contentData from "../../public/content.json";
import MenuAllergens from "@/components/MenuAllergens.vue";
import MenuSoups from "./MenuSoups.vue";

export default defineComponent({
  name: "SectionMenu",
  components: {
    MenuAllergens,
    MenuSoups,
  },
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
