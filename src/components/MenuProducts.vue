<template>
  <div class="menu-product-group-container">
    <div class="product-group-header">{{ productConten.header }}</div>
    <div class="product-group-header">{{ productConten.teaser }}</div>
    <div class="group-items-container">
      <div
        v-for="(item, index) in productConten.items"
        :key="index"
        class="product-item"
      >
        <p class="item-name">{{ item.name }}</p>
        <div class="item-ingredients">
          <span
            v-for="(ingItem, ingIndex) in item.ingredients"
            :key="ingIndex"
            class="ingredient"
            >{{ ingItem }}</span
          >
        </div>
        <div class="item-allergens">
          <span class="item-allergen-label">{{
            productConten.allergenLabel
          }}</span>
          <span
            v-for="(allItem, allIndex) in item.allergens"
            :key="allIndex"
            class="item-allergen-id"
            >{{ allItem }}</span
          >
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
    productConten: Object,
  },
};
</script>
