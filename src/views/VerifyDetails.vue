<template>
  <v-app id="registration">
    <AppBar />
    <v-container class="grey lighten-5">
      <div>
        <span class="title text-left">is this you?</span>
        <br />
        <span class="body-2 text-left">
          if not, go back and re-enter your information. You will be able to
          update your information after registration.
        </span>
      </div>
      <div>
        <span class="title text-left">Rep ID</span>
        <br />
        <span class="body-2 text-left">112CP</span>
      </div>
      <div>
        <span class="title text-left">Name</span>
        <br />
        <span class="body-2 text-left">Agent X</span>
      </div>
      <div>
        <span class="title text-left">Title</span>
        <br />
        <span class="body-2 text-left">Avengers</span>
      </div>
      <div>
        <span class="body-1 text-left">RVP</span>
        <br />
        <span class="body-1 text-left">Captain Mar Vell</span>
      </div>
      <div>
        <span class="title text-left">Address</span>
        <br />
        <span class="body-2 text-left">Assguard</span>
      </div>
      <div class="text-center">
        <v-btn class="ma-2" outlined color="indigo">Cancel</v-btn>
        <v-btn class="ma-2 btnTypeOne">Next</v-btn>
      </div>
    </v-container>
  </v-app>
</template>
<script>
import { loadLanguageAsync } from '@/plugins/i18n';
import { mapState } from 'vuex';
export default {
  name: 'Registration',
  components: {},
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
