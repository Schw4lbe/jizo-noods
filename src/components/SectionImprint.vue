<template>
  <section class="section-imprint-main">
    <h3 class="section-header">{{ companyData.sectionImprint.header }}</h3>
    <h5 class="section-subheader">
      {{ companyData.sectionImprint.subheader1 }}
    </h5>
    <p class="info-important">{{ companyData.companyName }}</p>
    <!-- <p>
      {{ companyData.address.header + ": "
      }}{{ companyData.address.street + ", "
      }}{{ companyData.address.houseNumber + " "
      }}{{ companyData.address.zipCode + " " }}
      {{ companyData.address.city }}
    </p> -->
    <p class="info-important">{{ "Email: " + companyData.contact.email }}</p>
    <!-- <h5 class="section-subheader">
      {{ companyData.sectionImprint.subheader2 }}
    </h5>
    <p>{{ companyData.contact.legalRep }}</p>
    <h5 class="section-subheader">
      {{ companyData.sectionImprint.subheader3 }}
    </h5>
    <p>{{ companyData.regulatoryAuthority.chamberOfCommerce }}</p>
    <p>{{ companyData.regulatoryAuthority.registrationNumber }}</p>
    <p>{{ companyData.regulatoryAuthority.VATID }}</p> -->
    <h5 class="section-subheader">
      {{ companyData.sectionImprint.subheader4 }}
    </h5>
    <p>{{ companyData.disclaimer }}</p>
    <h5 class="section-subheader">
      {{ companyData.sectionImprint.subheader5 }}
    </h5>
    <p>{{ companyData.liabilityForLinks }}</p>
    <h5 class="section-subheader">
      {{ companyData.sectionImprint.subheader6 }}
    </h5>
    <p>{{ companyData.copyright }}</p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import infoData from "../../public/content/company-info.json";

export default {
  name: "SectionImprint",

  data() {
    return {
      companyData: null,
    };
  },

  created() {
    this.setCompanyData();
  },

  watch: {
    selectedLanguage: {
      handler() {
        this.setContent(); // Re-run setContent when selectedLanguage changes
      },
      immediate: true, // Ensures the watcher runs once on initialization
    },
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setCompanyData() {
      this.companyData = infoData[this.selectedLanguage];
    },
  },
};
</script>
