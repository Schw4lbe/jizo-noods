<template>
  <section class="section-location-main">
    <h3 class="section-header">{{ content.sectionLocation.header }}</h3>
    <div class="location-map-container">
      <a :href="content.sectionLocation.googleMapsUrl" class="map-link">{{
        content.sectionLocation.urlText
      }}</a>
    </div>
    <div class="location-address-container">
      <h4 class="address-header">
        {{ content.sectionLocation.address.header }}
      </h4>
      <div class="location-address">
        <span class="street">{{ content.sectionLocation.address.street }}</span>
        <span class="house-number">{{
          content.sectionLocation.address.houseNumber
        }}</span>
        <span class="zip-code">{{
          content.sectionLocation.address.zipCode
        }}</span>
        <span class="city">{{ content.sectionLocation.address.city }}</span>
      </div>
    </div>
    <div class="social-media-container">
      <h4 class="social-media-header">
        {{ content.sectionLocation.socialMediaHeader }}
      </h4>
      <div class="icon-wrapper">
        <div
          v-for="(icon, index) in socialMediaItems"
          :key="index"
          class="icon"
        >
          <a :href="icon.url" class="url">(i)</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import contentData from "../../public/content.json";

interface SocialMediaItem {
  name: string;
  icon: string;
  url: string;
}

export default defineComponent({
  name: "SectionLocation",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    const socialMediaItems = computed(
      () => content.value.sectionLocation.socialMedia as SocialMediaItem[]
    );

    return { content, socialMediaItems };
  },
});
</script>
