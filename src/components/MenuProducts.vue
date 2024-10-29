<template>
  <div class="menu-product-group-container">
    <div class="product-group-header">{{ productHeader }}</div>
    <div v-if="productTeaser" class="product-group-teaser">
      {{ productTeaser }}
    </div>
    <div class="items-container">
      <div
        v-for="(item, index) in productContent"
        :key="index"
        class="item to-zoom-in"
      >
        <p class="item-name">{{ item.name }}</p>
        <div class="item-ingredients">
          <span
            v-for="(ingItem, ingIndex) in item.ingredients"
            :key="ingIndex"
            class="ingredient"
            >{{ ingItem
            }}<span v-if="ingIndex < item.ingredients.length - 1"
              >,
            </span></span
          >
        </div>
        <div class="item-allergens">
          <span
            v-if="productContent.allergenLabel"
            class="item-allergen-label"
            >{{ productContent.allergenLabel + ": " }}</span
          >
          <span v-else>Allergens: </span>

          <span v-for="allergenId in getAllergenIds(item)" :key="allergenId">
            {{ allergenId }}
            <span v-if="allergenId !== getAllergenIds(item).slice(-1)[0]"
              >,
            </span>
          </span>
        </div>
        <div class="item-price">
          <span class="currency">kr </span>
          <span class="price">{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuProducts",
  props: {
    productContent: Object,
    productHeader: String,
    productTeaser: String,
    allergenData: Array,
  },

  created() {
    this.setAllergenData();
  },

  data() {
    return {
      allergens: null,
    };
  },

  methods: {
    setAllergenData() {
      this.allergens = this.allergenData;
    },

    getAllergenIds(item) {
      // Iterate through the allergens object and collect IDs for the ones that are true
      return Object.keys(item.allergens)
        .filter((key) => item.allergens[key] === true)
        .map((key) => {
          const allergen = this.allergenData.find(
            (allergenItem) => allergenItem.key === key
          );
          return allergen ? parseInt(allergen.id, 10) : null; // Convert to integer for sorting
        })
        .filter((id) => id !== null) // Filter out any null values
        .sort((a, b) => a - b); // Sort IDs in ascending order
    },
  },
};
</script>
