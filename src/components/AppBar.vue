<template>
  <v-app-bar app clipped-left>
    <v-btn icon>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <h1>{{ $t(sectionTitle) }}</h1>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import { loadLanguageAsync } from '@/plugins/i18n';
import { mapState } from 'vuex';

export default {
  name: 'app-bar',
  components: {},
  data: () => ({
    languagesTitle: 'Languages',
    twoCharacterLanguageCode: 'EN'
  }),
  created() {
    this.setLocale();
  },
  computed: {
    ...mapState('ui', ['sectionTitle'])
  },
  methods: {
    // default setup for languages
    setLocale(locale = 'en-US') {
      void loadLanguageAsync(locale).then(() => {
        this.languagesTitle = this.$t('POL_EN');
        this.twoCharacterLanguageCode = 'EN';
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$pri-nav-blue: var(--v-accent-base);
.pri-app-title {
  position: absolute;
  left: 64px;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: navy !important;
  color: white;
}
.v-btn__content {
  color: white !important;
}
</style>
