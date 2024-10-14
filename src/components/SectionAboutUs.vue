<template>
  <section class="section-about-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <div class="about-content-container">
      <div
        v-for="(item, index) in sectionContent.items"
        :key="index"
        class="about-item"
      >
        <h4 class="content-header">{{ item.header }}</h4>
        <div class="content-text">
          <span
            v-for="(item, index) in item.content"
            :key="index"
            class="text"
            :class="{ highlighted: item.isHighlighted }"
            >{{ item.text }}</span
          >
        </div>
        <div class="media-container">
          <img :src="item.media" alt="dummy" class="media" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../public/content.json";

export default {
  name: "SectionAboutUs",

  data() {
    return {
      sectionContent: null,
    };
  },

  created() {
    this.setContent();
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setContent() {
      this.sectionContent = content[this.selectedLanguage].sectionAboutUs;
    },
  },
};
</script>

<!-- <script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import contentData from "../../public/content.json";

interface AboutItem {
  header: string;
  description: string;
}

export default defineComponent({
  name: "SectionAboutUs",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    const items = computed(
      () => content.value.sectionAboutUs.items as AboutItem[]
    );

    return { content, items };
  },
});
</script> -->
