<template>
  <section class="prod-menu-container">
    <h3 class="section-header">header</h3>
    <div class="starter-container">
      <h4 class="header">starters</h4>
      <p class="teaser">teaser</p>
    </div>
    <div class="menu-container">
      <h4 class="header">soups</h4>
      <p class="teaser">teaser</p>
      <div class="menu-item-container">
        <p class="name">name</p>
        <!-- placeholder for fontawesome icons -->
        <span>(i)</span>
        <div class="ingredients">
          <span>Ingredient 1</span>
          <span>Ingredient 2</span>
          <span>Ingredient 3</span>
          <span>Ingredient 4</span>
          <span>Ingredient 5</span>
        </div>
        <div class="allergens">
          <span class="allergen-label">Allergens: </span>
          <span class="allergen-id">a</span>
          <span class="allergen-id">b</span>
          <span class="allergen-id">c</span>
          <span class="allergen-id">d</span>
          <span class="allergen-id">e</span>
        </div>
        <div class="price">
          <!-- currency in locationData -->
          <span class="currency">kr </span><span class="price">395</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductMenu",
});
</script>
