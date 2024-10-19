<template>
  <nav class="navbar">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <i class="fa-sharp fa-solid fa-bars navbar-toggler-button"></i>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li v-for="(item, index) in navContent.items" :key="index">
              <a class="nav-item" :href="item.url">{{ item.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="scrolling-wrapper">
      <div class="marquee">
        <p>{{ navContent.scrollingText }}</p>
        <p>{{ navContent.scrollingText }}</p>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../../public/content/navbar.json";

export default {
  name: "NavbarMain",

  data() {
    return {
      navContent: null,
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
      this.navContent = content[this.selectedLanguage];
    },
  },
};
</script>
