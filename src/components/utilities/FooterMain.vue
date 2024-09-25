<template>
  <footer>
    <div class="footer-item-container">
      <a v-for="(item, index) in footerItems" :key="index" :href="item.url">{{
        item.lable
      }}</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import contentData from "../../../public/content.json";

interface FooterItem {
  lable: string;
  url: string;
}

export default defineComponent({
  name: "FooterMain",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    const footerItems = computed(
      () => content.value.footerMain.items as FooterItem[]
    );

    return { content, footerItems };
  },
});
</script>
