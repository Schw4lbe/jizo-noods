<template>
  <div class="menu-starters-container">
    <h4 class="starters-header">{{ startersContent.header }}</h4>
    <p class="starters-teaser">{{ startersContent.teaser }}</p>
    <div
      v-for="(item, index) in startersContent.items"
      :key="index"
      class="starter-item"
    >
      <div class="item-name-container">
        <p class="item-name">
          {{ item.name }}
        </p>
        <!-- <span v-if="item.indicator.hasIcons === true" class="item-icon"
          ><i class="fa-solid fa-pepper-hot"></i
        ></span> -->
      </div>
      <div class="item-ingredients">
        <span
          v-for="(ing, ingIndex) in item.ingredients"
          :key="ingIndex"
          class="ingredient"
          >{{ ing
          }}<span v-if="ingIndex < item.ingredients.length - 1">, </span></span
        >
      </div>
      <div class="item-allergens">
        <span class="item-allergen-label">{{ item.allergenLabel }}: </span>
        <span
          v-for="(allergen, allIndex) in item.allergens"
          :key="allIndex"
          class="item-allergen-id"
          >{{ allergen
          }}<span v-if="allIndex < item.allergens.length - 1"> , </span></span
        >
      </div>
      <div class="item-price">
        <span class="currency">kr </span
        ><span class="price">{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuStarters",
  props: {
    startersContent: Object,
  },
};
</script>
