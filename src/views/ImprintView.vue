<template>
  <section class="section-imprint-main">
    <h3 class="section-header">{{ sectionContent.header }}</h3>
    <h5 class="section-subheader">{{ sectionContent.subheader1 }}</h5>
    <p>{{ companyData.companyName }}</p>
    <p>
      {{ companyData.address.header + ": "
      }}{{ companyData.address.street + ", "
      }}{{ companyData.address.houseNumber + " "
      }}{{ companyData.address.zipCode + " " }}
      {{ companyData.address.city }}
    </p>
    <p>{{ "Email: " + companyData.contact.email }}</p>
    <h5 class="section-subheader">{{ sectionContent.subheader2 }}</h5>
    <p>{{ companyData.contact.legalRep }}</p>
    <h5 class="section-subheader">{{ sectionContent.subheader3 }}</h5>
    <p>{{ companyData.regulatoryAuthority.chamberOfCommerce }}</p>
    <p>{{ companyData.regulatoryAuthority.registrationNumber }}</p>
    <p>{{ companyData.regulatoryAuthority.VATID }}</p>
    <h5 class="section-subheader">{{ sectionContent.subheader4 }}</h5>
    <p>{{ companyData.disclaimer }}</p>
    <h5 class="section-subheader">{{ sectionContent.subheader5 }}</h5>
    <p>{{ companyData.liabilityForLinks }}</p>
    <h5 class="section-subheader">{{ sectionContent.subheader6 }}</h5>
    <p>{{ companyData.copyright }}</p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import infoData from "../../public/content/company-info.json";
import content from "../../public/content/content.json";

export default {
  name: "ImprintView",

  data() {
    return {
      companyData: null,
      sectionContent: null,
    };
  },

  created() {
    this.setCompanyData();
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    setCompanyData() {
      this.companyData = infoData[this.selectedLanguage];
      this.sectionContent = content[this.selectedLanguage].sectionImprint;
    },
  },
};
</script>
