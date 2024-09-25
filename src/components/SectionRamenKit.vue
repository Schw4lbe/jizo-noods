<template>
  <section class="section-ramen-kit-main">
    <h3 class="section-header">{{ content.sectionRamenKit.header }}</h3>
    <div class="ramen-kit-teaser">
      {{ content.sectionRamenKit.teaser }}
    </div>
    <div class="ramen-kit-contact">
      <p class="phone">
        <i class="fa-solid fa-phone"></i>{{ content.companyContact.phone }}
      </p>
      <p class="email">
        <i class="fa-solid fa-envelope"></i>{{ content.companyContact.email }}
      </p>
    </div>
    <div class="ramen-kit-instructions">
      <h4 class="subheader">{{ content.sectionRamenKit.subHeader }}</h4>
      <div class="instruction-container">
        <ul>
          <li
            v-for="(step, index) in content.sectionRamenKit.instructions"
            :key="index"
            class="instruction"
          >
            {{ step }}
          </li>
        </ul>
        <img
          class="ramen-kit-instruction-image"
          src="https://dummyimage.com/300x200/555/fff"
          alt="dummy"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import contentData from "../../public/content.json";

export default defineComponent({
  name: "SectionRamenKit",
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
