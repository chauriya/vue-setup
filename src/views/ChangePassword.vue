<template>
  <pri-responsive-page-layout :title="ChangePassword" title-accent="primary">
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">{{ $t('SETUP_EMAIL_HEADER') }}</h2>
    </v-layout>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <PriPassword />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriConfirmPassword />
        </v-col>
      </v-row>
    </v-form>
    <template v-slot:bottom>
      <v-row>
        <v-col cols="12" sm="6">
          <PriButton disabled>Submit</PriButton>
        </v-col>
        <v-col cols="12" sm="6">
          <PriButton>Cancel</PriButton>
        </v-col>
      </v-row>
    </template>
  </pri-responsive-page-layout>
</template>
<script>
import {
  PriPassword,
  PriButton,
  PriConfirmPassword
} from '@/shared-components';
import PriResponsivePageLayout from '@/components/ResponsivePageLayout';

export default {
  name: 'changePassword',
  components: {
    PriPassword,
    PriButton,
    PriConfirmPassword,
    PriResponsivePageLayout
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style scoped>
.v-application .primary--text {
  color: darkblue !important;
  caret-color: darkblue !important;
  border-radius: 3px;
}
.layout {
  display: contents !important;
}
.cancelBtn {
  text-align: start;
}
.nxtBtn {
  text-align: end;
}
@media (max-width: 400px) {
  .cancelBtn {
    text-align: center;
  }
  .nxtBtn {
    text-align: center;
  }
  .v-application .primary--text {
    width: inherit !important;
  }
  .theme--light.v-btn.v-btn--disabled {
    width: inherit !important;
  }
}
</style>
