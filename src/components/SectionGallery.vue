<template>
  <section class="section-gallery-main" id="section-gallery">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          v-for="count in itemCount"
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
          v-for="(item, index) in sectionContent.items"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img class="d-block w-100" :src="item.url" alt="dummy" />
          <div class="carousel-caption d-none">
            <h5>{{ item.label }}</h5>
            <p>{{ item.description }}</p>
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

<script>
import { mapGetters } from "vuex";
import content from "../../public/content/gallery.json";

export default {
  name: "SectionGallery",

  data() {
    return {
      sectionContent: null,
      itemCount: null,
    };
  },

  created() {
    this.setContent();
    this.setGalleryItemCount();
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setContent() {
      this.sectionContent = content.sectionGallery;
    },

    setGalleryItemCount() {
      this.itemCount = this.sectionContent.items.length;
    },
  },
};
</script>
