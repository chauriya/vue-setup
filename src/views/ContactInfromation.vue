<template>
  <pri-responsive-page-layout :title="Registration" title-accent="primary">
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">Premeric Email Address</h2>
    </v-layout>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <h4>Select your Premerica Business email</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <v-select required></v-select>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <h4>Non-Premerica Email address</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <span>abcd@gmail.com</span>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <h4>Mobile Phone Number</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <h4>
            The above information will be used for Premerica-related
            communication, including two-factor authentication.
          </h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriPhone />
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
import { PriButton, PriPhone } from '@/shared-components';
import PriResponsivePageLayout from '@/components/ResponsivePageLayout';

export default {
  name: 'Registration',
  components: {
    PriButton,
    PriPhone,
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
