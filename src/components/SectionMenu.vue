<template>
  <section class="section-menu-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <div class="menu-starter-container">
      <h4 class="starter-header">{{ sectionContent.starters.header }}</h4>
      <p class="starter-teaser">{{ sectionContent.starters.teaser }}</p>
    </div>
    <MenuSoups :soupsContent="soupsContent" />
    <MenuAllergens :allergenContent="allergenContent" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MenuSoups from "./MenuSoups.vue";
import MenuAllergens from "@/components/MenuAllergens.vue";
import content from "../../public/content.json";

export default {
  name: "SectionMenu",
  components: {
    MenuSoups,
    MenuAllergens,
  },

  data() {
    return {
      sectionContent: null,
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
      this.soupsContent = content[this.selectedLanguage].sectionMenu.soups;
      this.allergenContent =
        content[this.selectedLanguage].sectionMenu.allergens;
    },
  },
};
</script>
