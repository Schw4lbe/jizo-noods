<template>
  <section class="prod-menu-main">
    <h3 class="section-header">{{ content.productMenu.header }}</h3>
    <!-- outsource starters if they are getting more complex -->
    <div class="menu-starter-container">
      <h4 class="starter-header">{{ content.productMenu.starters.header }}</h4>
      <p class="starter-teaser">{{ content.productMenu.starters.teaser }}</p>
    </div>
    <ProductMenuSoups />
    <ProductMenuAllergens />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import contentData from "../../public/content.json";
import ProductMenuAllergens from "@/components/ProductMenuAllergens.vue";
import ProductMenuSoups from "./ProductMenuSoups.vue";

export default defineComponent({
  name: "ProductMenu",
  components: {
    ProductMenuAllergens,
    ProductMenuSoups,
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
