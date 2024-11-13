<template>
  <div class="menu-allergen-container">
    <h4 class="allergen-header">{{ allergenData.header }}</h4>
    <div class="accordion-wrapper">
      <div class="accordion" id="allergensAccordion">
        <div class="accordion-item">
          <h5 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-allergens"
              aria-expanded="false"
              aria-controls="#collapse-allergens"
            >
              <span class="allergen-description">{{
                allergenData.description
              }}</span>
            </button>
          </h5>
          <div
            id="collapse-allergens"
            class="accordion-collapse collapse"
            data-bs-parent="#allergensAccordion"
          >
            <div class="accordion-body">
              <p class="allergen-info">{{ allergenData.description2 }}</p>
              <ul class="allergens-list">
                <li
                  v-for="item in allergenData.items"
                  :key="item.id"
                  class="allergen-item"
                >
                  <span class="item-id">{{ item.id + ") " }}</span>
                  <span class="item-label">{{ item.label + ": " }}</span>
                  <span class="item-description">{{ item.description }}</span>
                </li>
              </ul>
            </div>
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
    allergenData: Object,
  },
};
</script>
