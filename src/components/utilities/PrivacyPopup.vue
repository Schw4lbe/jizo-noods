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
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PrivacyPopup",
  props: {
    //temp for dev
    loginSuccess: Boolean,
  },
  setup() {
    const htmlBody = document.querySelector("body");
    const privacyAccepted = ref(false);

    const privacyCheckDisableScroll = () => {
      htmlBody?.classList.add("scroll-disabled");
    };

    const onClickSetPrivacyAccepted = () => {
      privacyCheckedEnableScroll();
      privacyAccepted.value = true;
    };

    const privacyCheckedEnableScroll = () => {
      htmlBody?.classList.remove("scroll-disabled");
    };

    onMounted(() => {
      if (!privacyAccepted.value) {
        privacyCheckDisableScroll();
      }
    });

    return { privacyAccepted, onClickSetPrivacyAccepted };
  },
});
</script>
