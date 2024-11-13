// animationMixin.js
export default {
  mounted() {
    this.assignPreAnimationClass();
    this.createObserver();
  },

  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    assignPreAnimationClass() {
      const headlines = document.querySelectorAll(".section-header");
      const texts = document.querySelectorAll(".to-slide-in-bottom");
      const menuItems = document.querySelectorAll(".to-zoom-in");
      const socialMediaItems = document.querySelectorAll(".to-rubberband");
      const teaserAboutUs = document.querySelectorAll(".to-slide-in-left");

      [
        ...headlines,
        ...texts,
        ...menuItems,
        ...socialMediaItems,
        ...teaserAboutUs,
      ].forEach((item) => {
        item.classList.add("hide-before-animation");
      });
    },

    createObserver() {
      const options = {
        root: null,
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.1,
      };

      this.observer = new IntersectionObserver(this.handleIntersect, options);
      const elements = [
        ...document.querySelectorAll(".section-header"),
        ...document.querySelectorAll(".to-slide-in-bottom"),
        ...document.querySelectorAll(".to-zoom-in"),
        ...document.querySelectorAll(".to-rubberband"),
        ...document.querySelectorAll(".to-slide-in-left"),
      ];

      elements.forEach((element) => {
        this.observer.observe(element);
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
          } else if (entry.target.classList.contains("to-slide-in-left")) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInLeft"
            );
            setTimeout(() => {
              entry.target.classList.remove("animate__fadeInLeft");
              entry.target.classList.add("animate__bounce");
            }, 1000);
          }
        }
      });
    },
  },
};
