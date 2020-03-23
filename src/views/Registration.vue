<template>
  <v-app id="registration">
    <AppBar />
    <v-container class="grey lighten-5">
      <div>
        <p class="headline text-center">
          Welcome to Primerica Online Registration
        </p>
        <p class="subtitle-2 text-left">
          Please enter the following personal information so that we can
          identify you.
        </p>
      </div>
      <PriBaseTextField componentName="Rep ID /User ID" />
      <PriBaseTextField componentName="SSN / SIN" />
      <PriDatepicker />
      <PriBaseTextField componentName="Non Primerica Email Address" />
      <PriBaseTextField componentName="Confrim Email Address" />
      <div class="text-center">
        <v-btn class="ma-2" outlined color="indigo">Cancel</v-btn>
        <v-btn class="ma-2" color="indigo" disabled>Next</v-btn>
      </div>
      <div>
        <p class="caption text-center font-weight-bold" style="color:darkblue">
          Already have a POL account ?
        </p>
      </div>
    </v-container>
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
