<template>
  <pri-responsive-page-layout :title="Registration" title-accent="primary">
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">Welcome to Premerica Online Registration</h2>
    </v-layout>
    <h3 class="mb-3">
      Please enter the following personal information so that we can identify
      you.
    </h3>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <PriPolicyNumber label="Rep ID/User ID" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriSSN label="SSN/SIN" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriDatepicker label="Date of Birth " />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriEmail label="Non-Premerica Email Address" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriEmail label="Confrim Email Address" />
        </v-col>
      </v-row>
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
import {
  PriButton,
  PriEmail,
  PriSSN,
  PriPolicyNumber,
  PriDatepicker
} from '@/shared-components';
import PriResponsivePageLayout from '@/components/ResponsivePageLayout';

export default {
  name: 'Registration',
  components: {
    PriButton,
    PriEmail,
    PriDatepicker,
    PriSSN,
    PriPolicyNumber,
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
  .v-application .primary--text[data-v-6106551a] {
    width: inherit !important;
  }
  .theme--light.v-btn.v-btn--disabled {
    width: inherit !important;
  }
}
</style>
