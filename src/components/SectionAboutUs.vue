<template>
  <section class="section-about-main" id="section-about-us">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <div class="about-content-container">
      <h4 class="content-subheader">{{ sectionContent.subheader }}</h4>
      <div class="content-grid">
        <div class="grid-item">
          <img
            src="../../public/img/about-us/500x1000_2.png"
            alt="Jizu Manga Art"
            class="content-image"
          />
          <p class="content-text">
            <span class="highlight">Jizo Noods</span> is all about celebrating
            the art of slurpin’ delicious noodle soups from Japan & South Korea.
            Since 2024 kicked off, we've been cooperating with folks across Oslo
            like,
            <span class="highlight">Trekanten Sigurd Ramen & Fuglen Cafe </span
            >for PopUps, bringing the magic of homemade dishes to the people.
          </p>
        </div>

        <div class="grid-item">
          <p class="content-text">
            And now, guess what? We’re hyped to announce that we’re taking it up
            a notch! Thanks to our friends at Trekanten, we’ll be dishing out
            our soups and tasty plates
            <span class="highlight">every Thursday and Friday</span>. So Oslo,
            get your chopsticks ready - it’s time to dive into noodle heaven.
            See ya there, slurp fam!
          </p>
          <img
            src="../../public/img/about-us/500x1000_1.png"
            alt="Jizu Manga Art"
            class="content-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../public/content/content.json";

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
