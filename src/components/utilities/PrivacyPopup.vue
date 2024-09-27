<template>
  <div v-if="!privacyAccepted && loginSuccess" class="privacy-popup-container">
    <div class="privacy-content">
      <h4 class="cookie-header">
        Where are the Cookies? <i class="fa-solid fa-cookie-bite"></i>
      </h4>
      <p class="cookie-description">We honor your privacy and quality food.</p>
      <p class="cookie-description">
        We waive tracking Cookies and collecting your valuable personal data for
        marketing reasons. This Webpage only uses functional Cookies in order to
        give you the best possible experience.
      </p>
      <p class="cookie-description">
        For more transparency visit our
        <a class="cookie-privacy-link" href="#">privacy</a> section.
      </p>
      <button @click="onClickSetPrivacyAccepted" class="privacy-accept-btn">
        Let's go!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PrivacyPopup",
  props: {
    // Temporary for development
    loginSuccess: Boolean,
  },
  data() {
    return {
      privacyAccepted: false,
      htmlBody: document.querySelector("body"),
    };
  },
  methods: {
    privacyCheckDisableScroll() {
      this.htmlBody?.classList.add("scroll-disabled");
    },
    privacyCheckedEnableScroll() {
      this.htmlBody?.classList.remove("scroll-disabled");
    },
    triggerPopupSlideIn() {
      const popup = document.querySelector(".privacy-content");
      this.$nextTick(() => {
        if (popup && !popup.classList.contains("popup-slide-in")) {
          popup.classList.add("popup-slide-in");
        }
      });
    },
    triggerPopupSlideOut() {
      const popup = document.querySelector(".privacy-content");
      const popupContainer = document.querySelector(".privacy-popup-container");
      if (popup?.classList.contains("popup-slide-in")) {
        popup.classList.remove("popup-slide-in");
        popup.classList.add("popup-slide-out");
        popupContainer?.classList.add("background-lighten");
      }
    },
    onClickSetPrivacyAccepted() {
      this.privacyCheckedEnableScroll();
      this.triggerPopupSlideOut();
      this.unblurIntroScene();
      this.slideDownLogo();
      setTimeout(() => {
        this.privacyAccepted = true;
      }, 1500);
    },
    blurIntroScene() {
      const introScene = document.querySelector(".intro-background");
      introScene?.classList.add("before-load-blur");
    },
    unblurIntroScene() {
      const introScene = document.querySelector(".intro-background");
      introScene?.classList.add("unblur-animation");
    },
    slideDownLogo() {
      const logo = document.querySelector(".logo-slogan-container");
      logo?.classList.add("slide-down-logo");
    },
  },
  mounted() {
    console.log("Mounted:", document.querySelector(".privacy-content"));
    setTimeout(() => {
      if (!this.privacyAccepted) {
        this.privacyCheckDisableScroll();
        this.triggerPopupSlideIn();
        this.blurIntroScene();
      }
    }, 50);
  },
  updated() {
    setTimeout(() => {
      if (!this.privacyAccepted && this.loginSuccess) {
        this.privacyCheckDisableScroll();
        this.triggerPopupSlideIn();
        this.blurIntroScene();
      }
    }, 50);
  },
};
</script>
