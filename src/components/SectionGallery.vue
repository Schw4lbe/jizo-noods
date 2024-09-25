<template>
  <section class="section-gallery-main">
    <h3 class="section-header">{{ content.sectionGallery.header }}</h3>
    <p class="gallery-description">{{ content.sectionGallery.description }}</p>

    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          v-for="count in galleryItemCount"
          :key="count"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          :data-bs-slide-to="count - 1"
          :class="{ active: count === 1 }"
          aria-current="true"
          :aria-label="`Slide ${count}`"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          v-for="(image, index) in galleryData"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img class="d-block w-100" :src="image.url" alt="dummy" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ image.label }}</h5>
            <p>{{ image.description }}</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import contentData from "../../public/content.json";

interface ImageData {
  label: string;
  description: string;
  url: string;
}

export default defineComponent({
  name: "SectionGallery",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    const galleryData = computed(
      () => content.value.sectionGallery.items as ImageData[]
    );

    const galleryItemCount = galleryData.value.length;

    return { content, galleryData, galleryItemCount };
  },
});
</script>
