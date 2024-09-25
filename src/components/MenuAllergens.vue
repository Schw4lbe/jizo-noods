<template>
  <div class="menu-allergen-container">
    <h4 class="allergen-header">{{ content.sectionMenu.allergens.header }}</h4>
    <p class="allergen-description">
      {{ content.sectionMenu.allergens.description }}
    </p>

    <div class="accordion" id="allergensAccordion">
      <div v-for="item in allergenItems" :key="item.id" class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse-allergen-${item.id}`"
            aria-expanded="false"
            :aria-controls="`#collapse-allergen-${item.id}`"
          >
            <span class="allergen-id">{{ item.id + ") " + item.label }}</span>
          </button>
        </h2>
        <div
          :id="`collapse-allergen-${item.id}`"
          class="accordion-collapse collapse"
          data-bs-parent="#allergensAccordion"
          style=""
        >
          <div class="accordion-body">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import contentData from "../../public/content.json";

interface AllergenItem {
  id: string;
  label: string;
  description: string;
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
      () => content.value.sectionMenu.allergens.items as AllergenItem[]
    );

    return { content, allergenItems };
  },
});
</script>
