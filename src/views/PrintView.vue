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
          <label :for="item.name">{{ item.name }}</label>
          <input
            :id="item.name"
            type="checkbox"
            v-model="selectedStarterNames"
            :value="item.name"
          />
        </div>
      </div>

      <!-- Main Dishes Section -->
      <div id="main-dishes-container">
        <h5>Main Dishes</h5>
        <div v-for="(item, index) in mains" :key="index" class="main-item">
          <label :for="item.name">{{ item.name }}</label>
          <input
            :id="item.name"
            type="checkbox"
            v-model="selectedMainNames"
            :value="item.name"
          />
        </div>
      </div>
    </div>

    <!-- Button to create menu -->
    <button @click="createMenu">Create Menu</button>
  </div>

  <!-- Display selected menu products -->
  <div class="print-view-menu" id="a4-page">
    <MenuProducts
      :product-content="selectedStarters"
      :productHeader="startersHeader"
    />
    <MenuProducts
      :product-content="selectedMains"
      :productHeader="mainsHeader"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import productData from "../../public/content/products.json";
import MenuProducts from "../components/MenuProducts.vue";

export default {
  name: "PrintView",
  components: {
    MenuProducts,
  },

  data() {
    return {
      productData: [],
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

      console.log(this.selectedStarters, this.selectedMains);
    },

    setContent() {
      this.startersHeader = productData[this.selectedLanguage].header01;
      this.mainsHeader = productData[this.selectedLanguage].header02;
    },
  },
};
</script>

<style scoped>
#a4-page {
  width: 210mm; /* Equivalent width of an A4 page */
  height: 297mm; /* Equivalent height of an A4 page */
  margin: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
  overflow: hidden; /* Hide anything that exceeds the boundaries */
}

@media screen {
  /* Optional: Ensure A4 page size is enforced for screens */
  #a4-page {
    max-width: 100vw; /* Ensure it does not exceed the viewport */
    max-height: 100vh; /* Ensure it does not exceed the viewport */
    margin: 20px auto; /* Center it within the viewport */
  }

  #control-panel {
    background: #333;
    color: beige;
    padding: 2rem;
  }
}

@media print {
  /* Ensure it prints exactly like an A4 page */
  body {
    margin: 0;
    padding: 0;
  }
  #a4-page {
    page-break-after: always;
    margin: 0;
    box-shadow: none;
    overflow: visible;
  }

  #control-panel {
    display: none;
  }
}
</style>
