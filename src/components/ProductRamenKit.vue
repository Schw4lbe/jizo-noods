<template>
  <section class="prod-ramen-kit-container">
    <h3 class="section-header">header</h3>
    <div class="prod-ramen-kit-teaser">
      <p class="teaser">teaser</p>
    </div>
    <div class="prod-ramen-kit-contact">
      <!-- take phone and email out of different content area then ramenkit -->
      <p class="phone">phone</p>
      <p class="email">email</p>
    </div>
    <div class="prod-ramen-kit-instructions">
      <h4 class="subheader">subheader</h4>
      <div class="instruction-container">
        <ul>
          <li class="instruction">step 1</li>
          <li class="instruction">step 2</li>
          <li class="instruction">step 3</li>
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

    console.log(content.value.companyContact);

    return { content };
  },
});
</script>
