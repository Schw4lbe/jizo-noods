<template>
  <!-- later on should be a pop open area containing all infos on click when needed -->
  <div class="menu-allergen-container">
    <h4 class="allergen-header">{{ content.productMenu.allergens.header }}</h4>
    <div class="allergen-collapse-container">
      <p class="allergen-description">
        {{ content.productMenu.allergens.description }}
      </p>
      <div v-for="item in allergenItems" :key="item.id" class="allergen-info">
        <span class="allergen-id">{{ item.id }}: </span
        ><span class="allergen-label">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import contentData from "../../public/content.json";

interface AllergenItem {
  id: string;
  label: string;
}

export default defineComponent({
  name: "MenuAllergens",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    const allergenItems = computed(
      () => content.value.productMenu.allergens.items as AllergenItem[]
    );

    return { content, allergenItems };
  },
});
</script>
