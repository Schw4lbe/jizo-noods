<template>
  <section class="section-privacy-main">
    <h3 class="section-header">Privacy Policy</h3>
    <p class="intro-content">
      At Jizo Noods, we value your privacy and strive to make our practices as
      transparent as possible. This privacy policy outlines the technologies we
      use on our website, the reasons behind their use, and the type of data
      collected. We want you to feel safe and informed while browsing our site.
    </p>
    <h5 class="section-subheader">Technologies Used</h5>
    <ul class="list">
      <li class="item">
        <b>Bootstrap (via CDN):</b> We use Bootstrap to style our website and
        provide you with a consistent and responsive experience. This is hosted
        externally via a Content Delivery Network (CDN).
      </li>
      <li class="item">
        <b>FontAwesome (via CDN): </b>FontAwesome icons are used to visually
        enhance our site and make navigation easier. These icons are also hosted
        externally via a CDN.
      </li>
      <li class="item">
        <b>Google Fonts (locally embedded): </b>We use Google Fonts, which are
        downloaded and embedded locally on our server. This helps in reducing
        data transmission to third-party servers and ensures better privacy.
      </li>
      <li class="item">
        <b>Animate.css: </b>Animate.css is a CSS-only animation library that
        enhances web page visuals. It does not collect, store, or process any
        personal data, as it solely adds animations through CSS classes with no
        JavaScript tracking or user data interaction. Your privacy remains
        entirely secure while using Animate.css on our site.
      </li>
    </ul>
    <h5 class="section-subheader">Why We Use These Technologies</h5>
    <ul class="list">
      <li class="item">
        Bootstrap and FontAwesome: To provide a visually appealing,
        user-friendly, and consistent design across devices.
      </li>
      <li class="item">
        Google Fonts: To ensure that the website has a unique and consistent
        appearance, without relying on external servers for fonts.
      </li>
      <li class="item">
        Animate.css: To deliver cross plattform compatible element animations.
      </li>
      <li class="item">
        Hosting: To ensure our website remains fast, secure, and accessible, we
        use latest web standards as well as SSL encryption.
      </li>
    </ul>
    <h5 class="section-subheader">Data Collection and Sharing</h5>
    <ul class="list">
      <li class="item">
        Technical Data: When you visit our website, some technical data is
        automatically collected, such as your IP address, browser type, and
        device information. This data is collected solely to ensure our website
        functions properly and is optimized for all users.
      </li>
      <li class="item">
        Third-Party CDNs: When using technologies like Bootstrap and FontAwesome
        through CDNs, there may be minimal data transferred to third-party
        servers (e.g., your IP address). We use these CDNs to ensure fast
        loading times for our visitors.
      </li>
      <li class="item">
        Personal Data: We do not collect any personal data such as names, email
        addresses, or other identifying information from visitors, nor do we
        store such data on our servers.
      </li>
      <li class="item">
        No Analytics: We do not use any data analysis or tracking tools on our
        website. Our goal is to provide a secure and privacy-focused experience.
      </li>
    </ul>
    <h5 class="section-subheader">Your Privacy Matters</h5>
    <p>
      We are committed to minimizing any data shared with third parties. By
      using locally embedded Google Fonts and avoiding unnecessary tracking
      tools, we aim to give you the most private and safe browsing experience
      possible.
    </p>
    <p>
      If you have any questions or concerns about our privacy practices, please
      feel free to reach out.
    </p>
    <div class="privacy-contact-container">
      <h5 class="section-subheader">Contact</h5>
      <!-- <p>
        {{ contactData.address.header + ": "
        }}{{ contactData.address.street + ", "
        }}{{ contactData.address.houseNumber + " "
        }}{{ contactData.address.zipCode + " " }}
        {{ contactData.address.city }}
      </p> -->
      <p>{{ "Email: " + contactData.contact.email }}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import infoData from "../../public/content/company-info.json";

export default {
  name: "SectionPrivacy",

  data() {
    return {
      contactData: null,
    };
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  created() {
    this.setContent();
  },

  methods: {
    setContent() {
      this.contactData = infoData[this.selectedLanguage];
    },
  },
};
</script>
