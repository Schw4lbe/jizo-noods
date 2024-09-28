<template>
  <div v-if="!privacyAccepted" class="privacy-popup-container">
    <div class="privacy-popup-content popup-slide-in">
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

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PrivacyPopup",

  created() {
    if (!this.privacyAccepted) {
      this.disableScroll();
    }
  },

  computed: {
    ...mapGetters({ privacyAccepted: "privacyIsAccepted" }),
  },

  methods: {
    ...mapActions(["setPrivacyAccepted"]),

    disableScroll() {
      const body = document.querySelector("body");
      body?.classList.add("scroll-disabled");
    },

    enableScroll() {
      const body = document.querySelector("body");
      body?.classList.remove("scroll-disabled");
    },

    onClickSetPrivacyAccepted() {
      this.triggerCloseAnimation();
      this.enableScroll();
      setTimeout(() => {
        this.setPrivacyAccepted(true);
      }, 1000);
    },

    triggerCloseAnimation() {
      const popup = document.querySelector(".privacy-popup-content");
      const background = document.querySelector(".privacy-popup-container");
      popup?.classList.remove("popup-slide-in");
      popup?.classList.add("popup-slide-out");
      background?.classList.add("background-lighten");
    },
  },
};
</script>
