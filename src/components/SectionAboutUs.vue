<template>
  <section class="section-about-main" id="section-about-us">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <div class="about-content-container">
      <div class="content-container">
        <h4 class="content-subheader to-slide-in-bottom">Our Story</h4>
        <div class="content-grid">
          <div class="grid-item">
            <img
              src="../../public/img/about-us/500x1000_2.png"
              alt="Jizu Manga Art"
              class="content-image to-slide-in-bottom"
            />
            <p class="content-text to-slide-in-bottom">
              It all started in the spring of 2024 when two passionate noodle
              craftsmen came together with a shared mission: to bring their own
              take on celebrating the art of slurpin' delicious noodle dishes to
              Oslo. Since launching in May 2024, we've been fortunate to
              collaborate with some amazing local spots and people, like
              <span class="highlight"
                >Trekanten, Sigurd Ramen, Bakkerkoen, and Cafe Fuglen.</span
              >
              We've hosted pop-ups and teamed up with talented chefs like
              <span class="highlight"> Justin Klungsoyr </span>
              and Ramen enthusiast
              <span class="highlight"> Sigurd Borge </span>
              to create memorable, homemade noodle bowls that bring our vision
              to life.
            </p>
          </div>

          <div class="grid-item">
            <p class="content-text to-slide-in-bottom">
              And now… we’re taking things to the next level! Thanks to our
              friends at
              <span class="highlight"> Trekanten, </span>
              we’ll be serving up our signature soups and tasty noodle plates
              every
              <span class="highlight"> Thursday, Friday and Saturday. </span>
              That’s right, Oslo—your weekly noodle fix just got even better. So
              grab your chopsticks, rally your slurp fam, and join us for a
              taste of noodle heaven. See you there!
            </p>
            <img
              src="../../public/img/about-us/500x1000_1.png"
              alt="Jizu Manga Art"
              class="content-image to-slide-in-bottom"
            />
          </div>
        </div>
      </div>

      <div class="content-container">
        <h4 class="content-subheader to-slide-in-bottom">Meet the Chef</h4>
        <div class="content-grid">
          <div class="grid-item">
            <p class="content-text to-slide-in-bottom">
              <span class="highlight">Thomas, </span>
              one of the founders of
              <span class="highlight"> Jizo Noods, </span>
              is the heart of our team and perfectly embodies the role of the
              Head Chef. His culinary journey is both exciting and diverse,
              starting with his experience in Japanese cuisine. While working at
              <span class="highlight">Koie Ramen,</span>
              Thomas fell in love with the craftsmanship of noodle-making and
              honed his skills in perfecting broth and traditional Japanese
              cooking techniques.
            </p>
          </div>

          <div class="grid-item">
            <p class="content-text to-slide-in-bottom">
              He then continued his journey by joining the team at
              <span class="highlight"> Monoqule, </span>
              where he elevated the world of French cuisine and fine dining,
              growing his expertise and sharpening his chef skills to the next
              level. With this wealth of unique experience, Thomas brings a
              special perspective to every dish, infusing his creations with
              flavors that reflect his diverse culinary background.
            </p>
          </div>

          <div class="grid-item">
            <p class="content-text to-slide-in-bottom">
              His current mission? To introduce the art of
              <span class="highlight"> Udon Noodles </span>
              to Oslo and make them a beloved staple in the city's food scene.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import content from "../../public/content/about-us.json";

export default {
  name: "SectionAboutUs",

  data() {
    return {
      sectionContent: null,
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
      this.sectionContent = content[this.selectedLanguage];
    },
  },
};
</script>
