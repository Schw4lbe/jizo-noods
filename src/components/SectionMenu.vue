<template>
  <section class="section-menu-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
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
import content from "../../public/content.json";
import allergenContent from "../../public/content/allergens.json";
import productContent from "../../public/content/products.json";

export default {
  name: "SectionMenu",
  components: {
    MenuProducts,
    MenuAllergens,
  },

  data() {
    return {
      sectionContent: null,

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
      this.sectionContent = content[this.selectedLanguage];
      this.setContentByCategory(productContent[this.selectedLanguage].items);
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
