<template>
  <pri-responsive-page-layout :title="ChangePassword" title-accent="primary">
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">Set up your new password to contiue</h2>
    </v-layout>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <PriSSN label="Create a Password" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriSSN label="Confrim Password" />
        </v-col>
      </v-row>
    </v-form>
    <template v-slot:bottom>
      <v-row>
        <v-col cols="12" sm="6">
          <PriButton>Submit</PriButton>
        </v-col>
        <v-col cols="12" sm="6">
          <PriButton>Cancel</PriButton>
        </v-col>
      </v-row>
    </template>
  </pri-responsive-page-layout>
</template>
<script>
import { PriSSN, PriButton } from '@/shared-components';
import PriResponsivePageLayout from '@/components/ResponsivePageLayout';

export default {
  name: 'changePassword',
  components: {
    PriSSN,
    PriButton,
    PriResponsivePageLayout
  },
  props: {
    lifeApp: {
      required: true
    },
    global: {
      required: true
    }
  },
  data() {
    return {
      beneficiary: {},
      disableAllocation: false
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
</style>
