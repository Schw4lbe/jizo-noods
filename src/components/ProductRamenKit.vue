<template>
  <section class="prod-ramen-kit-container">
    <h3 class="section-header">{{ content.productRamenKit.header }}</h3>
    <div class="prod-ramen-kit-teaser">
      <p class="teaser">{{ content.productRamenKit.teaser }}</p>
    </div>
    <div class="prod-ramen-kit-contact">
      <!-- take phone and email out of different content area then ramenkit -->
      <p class="phone">{{ content.companyContact.phone }}</p>
      <p class="email">{{ content.companyContact.email }}</p>
    </div>
    <div class="prod-ramen-kit-instructions">
      <h4 class="subheader">{{ content.productRamenKit.subHeader }}</h4>
      <div class="instruction-container">
        <ul>
          <li
            v-for="(step, index) in content.productRamenKit.instructions"
            :key="index"
            class="instruction"
          >
            {{ step }}
          </li>
        </ul>
        <div class="image">replace with image tag later</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import contentData from "../../public/content.json";

export default defineComponent({
  name: "ProductRamenKit",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    return { content };
  },
});
</script>
