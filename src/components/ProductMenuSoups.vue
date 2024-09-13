<template>
  <div class="soups-container">
    <h4 class="soups-header">{{ content.productMenu.soups.header }}</h4>
    <p class="soups-teaser">{{ content.productMenu.soups.teaser }}</p>
    <div
      v-for="(item, index) in soupItems"
      :key="index"
      class="menu-item-container"
    >
      <p class="name">
        {{ item.name }}
      </p>
      <!-- placeholder for fontawesome icons -->
      <span>(i)</span>
      <div class="ingredients">
        <span
          v-for="(ing, ingIndex) in item.ingredients"
          :key="ingIndex"
          class="ingredient"
          >{{ ing }}</span
        >
      </div>
      <div class="allergens">
        <span class="allergen-label">{{ item.allergenLabel }}: </span>
        <span
          v-for="(allergen, allIndex) in item.allergens"
          :key="allIndex"
          class="allergen-id"
          >{{ allergen }}</span
        >
      </div>
      <div class="price">
        <span class="currency">kr </span
        ><span class="price">{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import contentData from "../../public/content.json";

interface SoupItem {
  name: string;
  indicator: {
    hasIcons: boolean;
    icons: number[];
  };
  ingredients: string[];
  allergenLabel: string;
  allergens: string[];
  price: string;
}

export default defineComponent({
  name: "ProductMenuSoups",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    const soupItems = computed(
      () => content.value.productMenu.soups.items as SoupItem[]
    );

    return { content, soupItems };
  },
});
</script>
