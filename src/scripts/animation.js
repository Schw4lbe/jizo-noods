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

      [...headlines, ...texts, ...menuItems, ...socialMediaItems].forEach(
        (item) => {
          item.classList.add("hide-before-animation");
        }
      );
    },

    createObserver() {
      const options = {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      };

      this.observer = new IntersectionObserver(this.handleIntersect, options);
      const elements = [
        ...document.querySelectorAll(".section-header"),
        ...document.querySelectorAll(".to-slide-in-bottom"),
        ...document.querySelectorAll(".to-zoom-in"),
        ...document.querySelectorAll(".to-rubberband"),
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
          }
        }
      });
    },
  },
};
