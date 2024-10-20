<template>
  <section class="section-menu-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <!-- <MenuProducts :productConten="startersContent" />
    <MenuProducts :productConten="mainsContent" /> -->
    <MenuAllergens :allergenContent="allergenContent" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
// import MenuProducts from "./MenuProducts.vue";
import MenuAllergens from "@/components/MenuAllergens.vue";
import content from "../../public/content/menu.json";
import allergenContent from "../../public/content/allergens.json";

export default {
  name: "SectionMenu",
  components: {
    // MenuProducts,
    MenuAllergens,
  },

  data() {
    return {
      sectionContent: null,
      startersContent: null,
      mainsContent: null,
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
      this.startersContent = content[this.selectedLanguage].starters;
      this.mainsContent = content[this.selectedLanguage].mains;
      this.allergenContent = allergenContent[this.selectedLanguage];
    },
  },
};
</script>
