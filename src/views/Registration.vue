<template>
  <v-app id="registration">
    <AppBar />
    <v-content>
      <v-container fluid>
        <h1>Welcome to Primerica Online Registration</h1>
        <h2>Heaading 2</h2>
        <PriBaseTextField componentName="Rep ID /User ID" />
        <PriBaseTextField componentName="SSN / SIN" />
        <PriDatepicker />
        <PriBaseTextField componentName="Non Primerica Email Address" />
        <PriBaseTextField componentName="Confrim Email Address" />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import PriBaseTextField from '../shared-components/BaseTextField';
import PriDatepicker from '../shared-components/Datepicker';
import { loadLanguageAsync } from '@/plugins/i18n';
import { mapState } from 'vuex';
export default {
  name: 'Registration',
  components: {
    PriBaseTextField,
    PriDatepicker
  },
  data: () => ({
    languagesTitle: 'Languages',
    twoCharacterLanguageCode: 'EN'
  }),
  created() {
    this.setLocale();
  },
  computed: { ...mapState('ui', ['sectionTitle']) },
  methods: {
    // default setup for languages
    setLocale(locale = 'en-US') {
      void loadLanguageAsync(locale).then(() => {
        this.languagesTitle = this.$t('L_PRE_EN');
        this.twoCharacterLanguageCode = 'EN';
      });
    }
  }
};
</script>
