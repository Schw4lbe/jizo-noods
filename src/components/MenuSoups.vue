<template>
  <div class="menu-soup-container">
    <h4 class="soup-header">{{ soupsContent.header }}</h4>
    <p class="soup-teaser">{{ soupsContent.teaser }}</p>
    <div
      v-for="(item, index) in soupsContent.items"
      :key="index"
      class="soup-item"
    >
      <div class="item-name-container">
        <p class="item-name">
          {{ item.name }}
        </p>
        <span v-if="item.indicator.hasIcons === true" class="item-icon"
          ><i class="fa-solid fa-pepper-hot"></i
        ></span>
      </div>
      <div class="item-ingredients">
        <span
          v-for="(ing, ingIndex) in item.ingredients"
          :key="ingIndex"
          class="ingredient"
          >{{ ing
          }}<span v-if="ingIndex < item.ingredients.length - 1"> | </span></span
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
  name: "MenuSoups",
  props: {
    soupsContent: Object,
  },
};
</script>
