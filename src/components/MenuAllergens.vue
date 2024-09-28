<template>
  <div class="menu-allergen-container">
    <h4 class="allergen-header">{{ allergenContent.header }}</h4>
    <p class="allergen-description">
      {{ allergenContent.description }}
    </p>
    <div class="accordion-wrapper">
      <div class="accordion" id="allergensAccordion">
        <div
          v-for="item in allergenContent.items"
          :key="item.id"
          class="accordion-item"
        >
          <h5 class="accordion-header">
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
          </h5>
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
  </div>
</template>

<script>
export default {
  name: "MenuAllergens",
  props: {
    allergenContent: Object,
  },
};
</script>
