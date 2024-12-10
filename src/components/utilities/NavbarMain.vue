<template>
  <nav class="navbar">
    <div class="scrolling-wrapper">
      <div class="marquee">
        <p>{{ navContent.scrollingText }}</p>
        <p>{{ navContent.scrollingText }}</p>
      </div>
      <!-- Duplicate for continuous effect -->
      <div class="marquee">
        <p>{{ navContent.scrollingText }}</p>
        <p>{{ navContent.scrollingText }}</p>
      </div>
    </div>

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
      <!-- <button @click="openToggleLanguageMenu" class="toggle-language">
        <i class="fa-solid fa-earth-americas"></i>
      </button>
      <div
        class="toggle-language-container container-hidden"
        id="lang-container"
      >
        <button
          @click="updateLanguage('en')"
          :class="{ 'btn-lang-active': this.selectedLanguage === 'en' }"
        >
          English
        </button>
        <button
          @click="updateLanguage('no')"
          :class="{ 'btn-lang-active': this.selectedLanguage === 'no' }"
        >
          Norsk
        </button>
      </div> -->
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1">
            <li v-for="(item, index) in navContent.items" :key="index">
              <a
                class="nav-item"
                :class="{ 'nav-link': item.isSection }"
                :href="item.url"
                >{{ item.label }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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

  watch: {
    selectedLanguage: {
      handler() {
        this.setContent(); // Re-run setContent when selectedLanguage changes
      },
      immediate: true, // Ensures the watcher runs once on initialization
    },
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  mounted() {
    this.$nextTick(() => {
      const offcanvasElement = document.getElementById("offcanvasNavbar");
      if (offcanvasElement) {
        const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
        const menuItems = offcanvasElement.querySelectorAll(".nav-link");

        menuItems.forEach((item) => {
          item.addEventListener("click", (event) => {
            event.preventDefault();
            const currentPath = window.location.pathname;
            offcanvas.hide();

            if (currentPath.endsWith("/")) {
              this.scrollIntoView(item);
            } else if (
              // add additional views here for navigaton
              currentPath.endsWith("/imprint") ||
              currentPath.endsWith("/privacy") ||
              currentPath.endsWith("/about-us")
            ) {
              this.$router.push("/");
              this.scrollIntoView(item);
            }
          });
        });
      }
    });
  },

  methods: {
    ...mapActions(["setLanguage"]),

    setContent() {
      this.navContent = content[this.selectedLanguage];
      console.log(this.selectedLanguage);
    },

    scrollIntoView(item) {
      setTimeout(() => {
        const targetId = item.getAttribute("href");
        const targetElement = document.getElementById(targetId);
        console.log(targetElement);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 300);
    },

    openToggleLanguageMenu() {
      const container = document.querySelector("#lang-container");
      container.classList.toggle("container-hidden");
    },

    updateLanguage(lang) {
      if (lang !== this.selectedLanguage) {
        console.log("Updating language to:", lang);
        this.setLanguage(lang);
      }
      console.log(this.selectedLanguage);
    },
  },
};
</script>
