<template>
  <pri-responsive-page-layout :title="Registration" title-accent="primary">
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">
        Protect your account with Two-Factor Authentication
      </h2>
    </v-layout>
    <h3 class="mb-3">Choose how you like to receive your Verification Code.</h3>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <PriBoolean
            label="Email code to:"
            :no-radio-label="false"
            labelForFalse="Abc@gmail.com"
            labelForTrue="xyz@gmail.com"
          />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriBoolean
            label="Text code to:"
            :no-radio-label="false"
            labelForTrue="(123) 987 - 8765"
          />
          <span>Standard data or messaging rates may apply</span>
        </v-col>
      </v-row>
      <h3 class="mb-3">
        We'll save this for next time. You can change it your prefernce on POL
        My Account.
      </h3>
    </v-form>
    <template v-slot:bottom>
      <v-row>
        <v-col cols="12" sm="6" class="nxtBtn">
          <PriButton disabled>Next</PriButton>
        </v-col>
        <v-col cols="12" sm="6" class="cancelBtn">
          <PriButton>Cancel</PriButton>
        </v-col>
      </v-row>
    </template>
  </pri-responsive-page-layout>
</template>
<script>
import { PriBoolean, PriButton } from '@/shared-components';
import PriResponsivePageLayout from '@/components/ResponsivePageLayout';

export default {
  name: 'Registration',
  components: {
    PriButton,
    PriBoolean,
    PriResponsivePageLayout
  },
  data() {
    return {
      registration: {}
    };
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style scoped>
.layout {
  display: contents !important;
}
.v-application .primary--text {
  color: darkblue !important;
  caret-color: darkblue !important;
  border-radius: 3px;
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
