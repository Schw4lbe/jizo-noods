<template>
  <div class="menu-product-group-container">
    <div class="product-group-header">{{ productHeader }}</div>
    <div class="product-group-teaser">{{ productTeaser }}</div>
    <div class="items-container">
      <div v-for="(item, index) in productContent" :key="index" class="item">
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
          <span class="item-allergen-label">{{
            productContent.allergenLabel + ": "
          }}</span>
          <span
            v-for="(allItem, allIndex) in Object.values(item.allergens)"
            :key="allIndex"
            class="item-allergen-id"
          >
            <span v-if="allItem">{{ allIndex + 1 }}</span>
            <!-- need replacement for actuall number of allergens in object while iteration to propperly represent setting comma -->
            <span
              v-if="
                allItem && allIndex < Object.values(item.allergens).length - 1
              "
            >
              ,
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
  },

  data() {
    return {
      contentData: this.productContent,
    };
  },

  created() {
    this.setAllergenIndicators(this.contentData);
  },

  methods: {
    setAllergenIndicators(data) {
      // maybe later on usefull to create count for objects set to true in item to define comma placement
      console.log(data);
    },
  },
};
</script>
