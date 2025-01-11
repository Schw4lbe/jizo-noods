<template>
  <NetlifyIdentity v-if="!isUserLoggedIn" />
  <div
    v-if="isUserLoggedIn"
    class="print-menu-option-control"
    id="control-panel"
  >
    <div class="toggle-container">
      <div class="select-products-container">
        <!-- Starters Section -->
        <div id="starters-container">
          <!-- Starters Dishes Section -->
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

        <!-- Desserts Section -->
        <div id="desserts-container">
          <h5>Desserts</h5>
          <div v-for="(item, index) in desserts" :key="index" class="main-item">
            <input
              :id="item.name"
              type="checkbox"
              v-model="selectedDessertNames"
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
    <div class="panel-control-container">
      <button @click="toggleControlPanel" class="btn-toggle">
        <i class="fa-solid fa-up-down"></i>
      </button>
    </div>
  </div>

  <!-- Display selected menu products -->
  <div class="print-view-menu" id="a4-page">
    <img
      src="../../public/img/print/anime.webp"
      alt="anime background"
      class="anime-background"
    />
    <div class="print-menu-top-container">
      <img src="../../public/img/logo.webp" alt="Jizo Noods Logo" />
      <h3 class="print-menu-header">Popup Menu</h3>
    </div>

    <div class="starter-print-menu-container print-layout">
      <MenuProducts
        :product-content="selectedStarters"
        :productHeader="startersHeader"
        :allergenData="allergenData.items"
      />
    </div>
    <div class="mains-print-menu-container print-layout">
      <MenuProducts
        :product-content="selectedMains"
        :productHeader="mainsHeader"
        :allergenData="allergenData.items"
      />
    </div>
    <div class="desserts-print-menu-container print-layout">
      <MenuProducts
        :product-content="selectedDesserts"
        :productHeader="dessertHeader"
        :allergenData="allergenData.items"
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
import NetlifyIdentity from "../components/utilities/NetlifyIdentity.vue";

export default {
  name: "PrintView",
  components: {
    MenuProducts,
    NetlifyIdentity,
  },

  data() {
    return {
      isUserLoggedIn: false,

      productData: [],
      allergenData: null,

      starters: [],
      mains: [],
      desserts: [],

      selectedStarterNames: [], // Tracks selected starter item names as temp. ID
      selectedStarters: [],
      startersHeader: null,

      selectedMainNames: [], // Tracks selected main item names as temp. ID
      selectedMains: [],
      mainsHeader: null,

      selectedDessertNames: [], // Tracks selected desserts item names as temp. ID
      selectedDesserts: [],
      dessertHeader: null,
    };
  },

  created() {
    this.checkUserStatus();
    this.setProductData();
    this.setContent();
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    checkUserStatus() {
      const user = localStorage.getItem("gotrue.user");
      // double !! converts value to bool
      this.isUserLoggedIn = !!user;
    },

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
      this.selectedDesserts = [];

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

      this.desserts.forEach((item) => {
        if (this.selectedDessertNames.includes(item.name)) {
          this.selectedDesserts.push(item);
        }
      });
      // class assignment for layouting taking amount out of arrays
      this.handleClassAssignment(
        this.selectedStarters,
        this.selectedMains,
        this.selectedDesserts
      );
    },

    handleClassAssignment(starters, mains, desserts) {
      const conStarters = document
        .querySelector(".starter-print-menu-container")
        .querySelector(".items-container");

      const conMains = document
        .querySelector(".mains-print-menu-container")
        .querySelector(".items-container");

      const conDesserts = document
        .querySelector(".desserts-print-menu-container")
        .querySelector(".items-container");

      // reset layout before reassigment
      this.resetLayout(conStarters);
      this.resetLayout(conMains);
      this.resetLayout(conDesserts);

      if (starters.length === 1) {
        conStarters.classList.add("grid-layout-1");
      } else if (starters.length === 2) {
        conStarters.classList.add("grid-layout-2");
      } else if (starters.length >= 3) {
        conStarters.classList.add("grid-layout-3");
      }

      if (mains.length < 3) {
        conMains.classList.add("grid-layout-1");
      } else if (mains.length >= 3 && mains.length <= 5) {
        conMains.classList.add("grid-layout-2");
      } else if (mains.length > 5) {
        conMains.classList.add("grid-layout-3");
      }

      if (desserts.length === 1) {
        conDesserts.classList.add("grid-layout-1");
      } else if (desserts.length === 2) {
        conDesserts.classList.add("grid-layout-2");
      } else if (desserts.length === 3) {
        conDesserts.classList.add("grid-layout-3");
      }
    },

    resetLayout(container) {
      const classToKeep = "items-container";

      // Create an array from the class list
      const containerClasses = Array.from(container.classList);

      // Iterate over the classes and remove those that are not the one to keep
      containerClasses.forEach((cls) => {
        if (cls !== classToKeep) {
          container.classList.remove(cls);
        }
      });
    },

    toggleControlPanel() {
      const panel = document.querySelector(".toggle-container");
      panel.classList.toggle("closed");
    },

    setContent() {
      this.startersHeader = productData[this.selectedLanguage].header01;
      this.mainsHeader = productData[this.selectedLanguage].header02;
      this.dessertHeader = productData[this.selectedLanguage].header03;
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
