<template>
  <section class="section-menu-main" id="section-menu">
    <div class="section-menu-intro-container">
      <h3 class="section-header">
        {{ sectionContent.header }}
      </h3>

      <p class="section-teaser to-slide-in-bottom">
        {{ sectionContent.text01 }}
      </p>
      <img
        src="../../public/img/soup.png"
        alt="menu manga art background"
        class="menu-image"
      />
      <p class="section-description to-slide-in-bottom">
        {{ sectionContent.text02 }}
        <span @click="onClickShowSocialMedia" class="highlight to-rubberband"
          >{{ sectionContent.highlight }}
        </span>
        {{ sectionContent.text03 }}
      </p>
    </div>
    <MenuProducts
      :productContent="startersContent"
      :productHeader="startersHeader"
      :allergenData="allergenData.items"
    />
    <MenuProducts
      :productContent="mainsContent"
      :productHeader="mainsHeader"
      :allergenData="allergenData.items"
    />
    <MenuProducts
      :productContent="dessertsContent"
      :productHeader="dessertsHeader"
      :allergenData="allergenData.items"
    />
    <MenuAllergens :allergenData="allergenData" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MenuProducts from "./MenuProducts.vue";
import MenuAllergens from "@/components/MenuAllergens.vue";
import content from "../../public/content/menu.json";
import productContent from "../../public/content/products.json";
import allergenData from "../../public/content/allergens.json";

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
      mainsContent: null,
      mainsHeader: null,
      dessertsContent: null,
      dessertsHeader: null,

      allergenData: null,
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
      this.mainsHeader = productContent[this.selectedLanguage].header02;
      this.dessertsHeader = productContent[this.selectedLanguage].header03;

      this.allergenData = allergenData[this.selectedLanguage];
    },

    setContentByCategory(content) {
      let starters = [];
      let mains = [];
      let desserts = [];

      content.forEach((item) => {
        if (item.cat === "starter") {
          starters.push(item);
        } else if (item.cat === "main") {
          mains.push(item);
        } else if (item.cat === "dessert") {
          desserts.push(item);
        }
      });
      this.startersContent = starters;
      this.mainsContent = mains;
      this.dessertsContent = desserts;
    },

    onClickShowSocialMedia() {
      const target = document.querySelector("#social-media");
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>
