<template>
  <section class="section-ramen-kit-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <div class="ramen-kit-teaser">
      {{ sectionContent.teaser }}
    </div>
    <div class="ramen-kit-contact">
      <p class="phone">
        <i class="fa-solid fa-phone"></i>{{ contactContent.phone }}
      </p>
      <p class="email">
        <i class="fa-solid fa-envelope"></i>{{ contactContent.email }}
      </p>
    </div>
    <div class="ramen-kit-instructions">
      <h4 class="subheader">{{ sectionContent.subHeader }}</h4>
      <div class="instruction-container">
        <ul>
          <li
            v-for="(step, index) in sectionContent.instructions"
            :key="index"
            class="instruction"
          >
            {{ step }}
          </li>
        </ul>
        <img
          class="ramen-kit-instruction-image"
          src="https://dummyimage.com/300x200/555/fff"
          alt="dummy"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../public/content.json";

export default {
  name: "SectionRamenKit",

  data() {
    return {
      sectionContent: null,
      contactContent: null,
    };
  },

  created() {
    this.setContent();
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setContent() {
      this.sectionContent = content[this.selectedLanguage].sectionRamenKit;
      this.contactContent = content[this.selectedLanguage].companyContact;
    },
  },
};
</script>
