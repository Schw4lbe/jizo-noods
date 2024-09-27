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
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "PrivacyPopup",
  props: {
    loginSuccess: Boolean,
  },
  setup(props) {
    const htmlBody = document.querySelector("body");
    const privacyAccepted = ref(false);

    // Cache elements for reuse
    let popup: HTMLElement | null = null;
    let popupContainer: HTMLElement | null = null;
    let introScene: HTMLElement | null = null;
    let logo: HTMLElement | null = null;

    const privacyCheckDisableScroll = () => {
      htmlBody?.classList.add("scroll-disabled");
    };

    const privacyCheckedEnableScroll = () => {
      htmlBody?.classList.remove("scroll-disabled");
    };

    const triggerPopupSlideIn = () => {
      if (popup && !popup.classList.contains("popup-slide-in")) {
        popup.classList.add("popup-slide-in");
      }
    };

    const triggerPopupSlideOut = () => {
      if (popup && popup.classList.contains("popup-slide-in")) {
        popup.classList.remove("popup-slide-in");
        popup.classList.add("popup-slide-out");
        popupContainer?.classList.add("background-lighten");
      }
    };

    const blurIntroScene = () => {
      introScene?.classList.add("before-load-blur");
    };

    const unblurIntroScene = () => {
      introScene?.classList.add("unblur-animation");
    };

    const slideDownLogo = () => {
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

    onMounted(() => {
      // Cache elements when the component is mounted
      popup = document.querySelector(".privacy-content");
      popupContainer = document.querySelector(".privacy-popup-container");
      introScene = document.querySelector(".intro-background");
      logo = document.querySelector(".logo-slogan-container");

      // Initial check
      if (!privacyAccepted.value) {
        privacyCheckDisableScroll();
        triggerPopupSlideIn();
        blurIntroScene();
      }
    });

    // Watch for changes in `privacyAccepted`
    watch(privacyAccepted, (newVal) => {
      if (!newVal) {
        triggerPopupSlideIn();
        blurIntroScene();
        privacyCheckDisableScroll();
      } else {
        privacyCheckedEnableScroll();
      }
    });

    return { privacyAccepted, onClickSetPrivacyAccepted };
  },
});
</script>
