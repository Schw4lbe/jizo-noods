<template>
  <div class="print-menu-option-control" id="control-panel">
    <div class="select-products-container">
      <!-- Starters Section -->
      <div id="starters-container">
        <h5>Starters</h5>
        <div
          v-for="(item, index) in starters"
          :key="index"
          class="starter-item"
        >
          <input
            :id="item.name"
            type="checkbox"
            v-model="selectedStarterNames"
            :value="item.name"
          />
          <label :for="item.name">{{ item.name }}</label>
        </div>
      </div>

      <!-- Main Dishes Section -->
      <div id="main-dishes-container">
        <h5>Main Dishes</h5>
        <div v-for="(item, index) in mains" :key="index" class="main-item">
          <input
            :id="item.name"
            type="checkbox"
            v-model="selectedMainNames"
            :value="item.name"
          />
          <label :for="item.name">{{ item.name }}</label>
        </div>
      </div>
    </div>
    <!-- Button to create menu -->
    <div class="btn-container">
      <button @click="createMenu">Create Menu</button>
      <button @click="saveAsPDF">Save as PDF</button>
    </div>
  </div>

  <!-- Display selected menu products -->
  <div class="print-view-menu" id="a4-page">
    <img
      src="../../public/img/print/anime.png"
      alt="anime background"
      class="anime-background"
    />
    <div class="print-menu-top-container">
      <img src="../../public/img/logo.png" alt="Jizo Noods Logo" />
      <h3 class="print-menu-header">Ramen Popup Menu</h3>
    </div>

    <div class="starter-print-menu-container">
      <MenuProducts
        :product-content="selectedStarters"
        :productHeader="startersHeader"
      />
    </div>
    <div class="mains-print-menu-container">
      <MenuProducts
        :product-content="selectedMains"
        :productHeader="mainsHeader"
      />
    </div>
    <div class="allergens-print-container">
      <h5 class="allergens-print-header">
        {{ allergenData.header }}
      </h5>
      <div class="allergens-items-container">
        <span
          v-for="(item, index) in allergenData.items"
          :key="item.id"
          class="item"
        >
          <b>{{ item.id + ") " }}</b
          >{{ item.label }}
          <span class="separator" v-if="index < allergenData.items.length - 1">
            |
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import productData from "../../public/content/products.json";
import allergenData from "../../public/content/allergens.json";
import MenuProducts from "../components/MenuProducts.vue";

export default {
  name: "PrintView",
  components: {
    MenuProducts,
  },

  data() {
    return {
      productData: [],
      allergenData: null,

      starters: [],
      mains: [],
      desserts: [],

      selectedStarterNames: [], // Tracks selected starter item names
      selectedStarters: [],
      startersHeader: null,

      selectedMainNames: [], // Tracks selected main item names
      selectedMains: [],
      mainsHeader: null,
    };
  },

  created() {
    this.setProductData();
    this.setContent();
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setProductData() {
      const products = productData[this.selectedLanguage];
      this.productData = products;
      this.getProductsByCategory(products.items);
    },

    getProductsByCategory(products) {
      products.forEach((el) => {
        if (el.cat === "starter") {
          this.starters.push(el);
        } else if (el.cat === "main") {
          this.mains.push(el);
        } else if (el.cat === "dessert") {
          this.desserts.push(el);
        }
      });
    },

    createMenu() {
      // Clear previously selected
      this.selectedStarters = [];
      this.selectedMains = [];

      // Filter starters and mains by selected names
      this.starters.forEach((item) => {
        if (this.selectedStarterNames.includes(item.name)) {
          this.selectedStarters.push(item);
        }
      });

      this.mains.forEach((item) => {
        if (this.selectedMainNames.includes(item.name)) {
          this.selectedMains.push(item);
        }
      });

      // class assignment for layouting taking amount out of arrays
      this.handleClassAssignment(this.selectedStarters);
    },

    handleClassAssignment(starters) {
      const conStarters = document
        .querySelector(".starter-print-menu-container")
        .querySelector(".items-container");

      // reset layout before reassigment
      this.resetLayout(conStarters);

      if (starters.length === 1) {
        conStarters.classList.add("grid-layout-1");
      } else if (starters.length === 2) {
        conStarters.classList.add("grid-layout-2");
      } else if (starters.length === 3) {
        conStarters.classList.add("grid-layout-3");
      } else {
        return;
      }
    },

    resetLayout(conSt) {
      const classToKeep = "items-container";

      // Create an array from the class list
      const conStClasses = Array.from(conSt.classList);

      // Iterate over the classes and remove those that are not the one to keep
      conStClasses.forEach((cls) => {
        if (cls !== classToKeep) {
          conSt.classList.remove(cls);
        }
      });
    },

    setContent() {
      this.startersHeader = productData[this.selectedLanguage].header01;
      this.mainsHeader = productData[this.selectedLanguage].header02;
      this.allergenData = allergenData[this.selectedLanguage];
    },

    saveAsPDF() {
      const currentDate = new Date().toISOString().split("T")[0];
      document.title = `Jizo-Noods-Menu-${currentDate}`;
      window.print();
    },
  },
};
</script>
