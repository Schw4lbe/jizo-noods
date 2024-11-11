<template>
  <IntroScene />
  <LocationBanner />
  <div class="section-wrapper section-wrapper-variant-a">
    <SectionMenu />
  </div>
  <div class="section-wrapper section-wrapper-variant-d">
    <SectionGallery />
  </div>
  <div class="section-wrapper section-wrapper-variant-b">
    <SectionAboutUs />
  </div>
  <div class="section-wrapper section-wrapper-variant-c">
    <img
      src="../../public/img/paint-stroke-variant-b.png"
      alt="dummy"
      class="background-img"
    />
    <SectionLocation />
  </div>
</template>

<script>
import IntroScene from "@/components/IntroScene.vue";
import LocationBanner from "@/components/utilities/LocationBanner.vue";
import SectionMenu from "@/components/SectionMenu.vue";
import SectionGallery from "@/components/SectionGallery.vue";
import SectionAboutUs from "@/components/SectionAboutUs.vue";
import SectionLocation from "@/components/SectionLocation.vue";

export default {
  name: "HomeView",
  components: {
    IntroScene,
    LocationBanner,
    SectionMenu,
    SectionGallery,
    SectionAboutUs,
    SectionLocation,
  },

  data() {
    return {
      // animation control
      currentHeadline: null,
    };
  },

  mounted() {
    this.assignPreAnimationClass();
    this.createObserver();
  },

  methods: {
    assignPreAnimationClass() {
      const headlines = document.querySelectorAll(".section-header");
      const texts = document.querySelectorAll(".to-slide-in-bottom");
      const menuItems = document.querySelectorAll(".to-zoom-in");
      const socialMediaItems = document.querySelectorAll(".to-rubberband");
      headlines.forEach((item) => {
        item.classList.add("hide-before-animation");
      });
      texts.forEach((item) => {
        item.classList.add("hide-before-animation");
      });
      menuItems.forEach((item) => {
        item.classList.add("hide-before-animation");
      });
      socialMediaItems.forEach((item) => {
        item.classList.add("hide-before-animation");
      });
    },

    createObserver() {
      const options = {
        root: null, // Observes relative to the viewport
        rootMargin: "0px 0px -20% 0px", // 20% before the bottom of the viewport
        threshold: 0.1, // Trigger when 10% of the element is visible
      };

      this.observer = new IntersectionObserver(this.handleIntersect, options);
      const headlines = document.querySelectorAll(".section-header");
      const texts = document.querySelectorAll(".to-slide-in-bottom");
      const menuItems = document.querySelectorAll(".to-zoom-in");
      const socialMediaItems = document.querySelectorAll(".to-rubberband");
      headlines.forEach((headline) => {
        this.observer.observe(headline);
      });
      texts.forEach((text) => {
        this.observer.observe(text);
      });
      menuItems.forEach((item) => {
        this.observer.observe(item);
      });
      socialMediaItems.forEach((item) => {
        this.observer.observe(item);
      });
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hide-before-animation");

          if (entry.target.classList.contains("section-header")) {
            entry.target.classList.add("animate__animated", "animate__fadeIn");
          } else if (entry.target.classList.contains("to-slide-in-bottom")) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
          } else if (entry.target.classList.contains("to-zoom-in")) {
            entry.target.classList.add("animate__animated", "animate__zoomIn");
          } else if (entry.target.classList.contains("to-rubberband")) {
            entry.target.classList.add(
              "animate__animated",
              "animate__rubberBand"
            );
          }
        }
      });
    },
  },

  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>
