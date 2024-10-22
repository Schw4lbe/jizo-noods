<template>
  <section class="section-menu-main" id="section-menu">
    <h3 class="section-header">{{ sectionHeader }}</h3>
    <p class="section-description"></p>
    <MenuProducts
      :productContent="startersContent"
      :productHeader="startersHeader"
      :productTeaser="startersTeaser"
    />
    <MenuProducts
      :productContent="mainsContent"
      :productHeader="mainsHeader"
      :productTeaser="mainsTeaser"
    />
    <MenuAllergens :allergenContent="allergenContent" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MenuProducts from "./MenuProducts.vue";
import MenuAllergens from "@/components/MenuAllergens.vue";

import productContent from "../../public/content/products.json";
import allergenContent from "../../public/content/allergens.json";
import content from "../../public/content/content.json";

export default {
  name: "SectionMenu",
  components: {
    MenuProducts,
    MenuAllergens,
  },

  data() {
    return {
      sectionHeader: null,

      startersContent: null,
      startersHeader: null,
      startersTeaser: null,

      mainsContent: null,
      mainsHeader: null,
      mainsTeaser: null,

      allergenContent: null,
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
      this.setContentByCategory(productContent[this.selectedLanguage].items);
      this.sectionHeader = content[this.selectedLanguage].sectionMenu.header;
      this.startersHeader = productContent[this.selectedLanguage].header01;
      this.startersTeaser = productContent[this.selectedLanguage].teaser01;
      this.mainsHeader = productContent[this.selectedLanguage].header02;
      this.mainsTeaser = productContent[this.selectedLanguage].teaser02;
      this.allergenContent = allergenContent[this.selectedLanguage];
    },

    setContentByCategory(content) {
      let starters = [];
      let mains = [];

      content.forEach((item) => {
        if (item.cat === "starter") {
          starters.push(item);
        } else if (item.cat === "main") {
          mains.push(item);
        }
      });
      this.startersContent = starters;
      this.mainsContent = mains;
    },
  },
};
</script>
