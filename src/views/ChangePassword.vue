<template>
  <v-app id="changepassword">
    <AppBar />
    <v-container class="grey lighten-5">
      <div>
        <p class="headline text-center">Set up your password to continue</p>
      </div>
      <PriBaseTextField componentName="Create a new password" />
      <PriBaseTextField componentName="Confrim password" />
      <div class="text-center">
        <v-btn class="ma-2" outlined color="indigo">Cancel</v-btn>
        <v-btn class="ma-2 btnTypeOne">Next</v-btn>
      </div>
      <div>
        <p class="caption text-center font-weight-bold" style="color:darkblue">
          To avoid disconnection update billing information upon login
        </p>
      </div>
    </v-container>
  </v-app>
</template>
<script>
import PriBaseTextField from '@/shared-components/base/BaseTextField';
import { loadLanguageAsync } from '@/plugins/i18n';
import { mapState } from 'vuex';
export default {
  name: 'Registration',
  components: {
    PriBaseTextField
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
<style scoped>
.btnTypeOne {
  background-color: darkblue !important;
  color: white !important;
}
</style>
