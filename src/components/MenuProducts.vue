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
          <span
            v-for="(allItem, allIndex) in Object.values(item.allergens)"
            :key="allIndex"
            class="item-allergen-id"
          >
            <span v-if="allItem">{{ allIndex + 1 }}</span>
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
  },

  data() {
    return {
      contentData: this.productContent,
    };
  },
};
</script>
