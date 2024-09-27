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
import { defineComponent, ref, nextTick } from "vue";

export default defineComponent({
  name: "PrivacyPopup",
  props: {
    loginSuccess: Boolean,
  },
  setup(props) {
    const privacyAccepted = ref(false);
    const htmlBody = document.querySelector("body");

    const setupDOM = () => {
      if (!privacyAccepted.value && props.loginSuccess) {
        privacyCheckDisableScroll();
        triggerPopupSlideIn();
        blurIntroScene();
      }
    };

    const privacyCheckDisableScroll = () => {
      htmlBody?.classList.add("scroll-disabled");
    };

    const privacyCheckedEnableScroll = () => {
      htmlBody?.classList.remove("scroll-disabled");
    };

    const triggerPopupSlideIn = () => {
      const popup = document.querySelector(".privacy-content");
      if (popup && !popup.classList.contains("popup-slide-in")) {
        popup.classList.add("popup-slide-in");
      }
    };

    const triggerPopupSlideOut = () => {
      const popup = document.querySelector(".privacy-content");
      const popupContainer = document.querySelector(".privacy-popup-container");
      if (popup?.classList.contains("popup-slide-in")) {
        popup?.classList.remove("popup-slide-in");
        popup?.classList.add("popup-slide-out");
        popupContainer?.classList.add("background-lighten");
      }
    };

    const blurIntroScene = () => {
      const introScene = document.querySelector(".intro-background");
      introScene?.classList.add("before-load-blur");
    };

    const unblurIntroScene = () => {
      const introScene = document.querySelector(".intro-background");
      introScene?.classList.add("unblur-animation");
    };

    const slideDownLogo = () => {
      const logo = document.querySelector(".logo-slogan-container");
      logo?.classList.add("slide-down-logo");
    };

    const onClickSetPrivacyAccepted = () => {
      privacyCheckedEnableScroll();
      triggerPopupSlideOut();
      unblurIntroScene();
      slideDownLogo();
      setTimeout(() => {
        privacyAccepted.value = true;
      }, 1500);
    };

    // Ensure the setup is executed when the document is ready
    if (document.readyState === "complete") {
      setupDOM();
    } else {
      document.addEventListener("DOMContentLoaded", setupDOM);
    }

    return { privacyAccepted, onClickSetPrivacyAccepted };
  },
});
</script>
