<template>
  <section class="section-menu-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <MenuStarters :startersContent="startersContent" />
    <MenuSoups :soupsContent="soupsContent" />
    <MenuAllergens :allergenContent="allergenContent" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MenuStarters from "./MenuStarters.vue";
import MenuSoups from "./MenuSoups.vue";
import MenuAllergens from "@/components/MenuAllergens.vue";
import content from "../../public/content.json";

export default {
  name: "SectionMenu",
  components: {
    MenuStarters,
    MenuSoups,
    MenuAllergens,
  },

  data() {
    return {
      sectionContent: null,
      startersContent: null,
      soupsContent: null,
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
      this.sectionContent = content[this.selectedLanguage].sectionMenu;
      this.startersContent =
        content[this.selectedLanguage].sectionMenu.starters;
      this.soupsContent = content[this.selectedLanguage].sectionMenu.soups;
      this.allergenContent =
        content[this.selectedLanguage].sectionMenu.allergens;
    },
  },
};
</script>
