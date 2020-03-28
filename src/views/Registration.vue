<template>
  <pri-responsive-page-layout>
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">
        {{ $t('POL_HEADER_REGISTRATION') }}
      </h2>
    </v-layout>
    <h3 class="mb-3">
      {{ $t('POL_REGISTRATION_INFO') }}
    </h3>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <PriPolicyNumber :label="$t('POL_USERID')" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriSSN :label="$t('POL_SSN')" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriDatepicker :label="$t('POL_DOB')" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriEmail :label="$t('POL_NON_PRI_EMAIL')" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriEmail :label="$t('POL_CONFIRM_EMAIL')" />
        </v-col>
      </v-row>
    </v-form>
    <template v-slot:bottom>
      <v-row>
        <v-col cols="12" sm="6">
          <!-- class="nxtBtn" -->
          <PriButton
            name="cancelButton"
            @click.native="onNextButtonClick"
            block
          >
            {{ $t('POL_CANCEL') }}
          </PriButton>
        </v-col>
        <v-col cols="12" sm="6">
          <!-- class="cancelBtn" -->
          <PriButton
            name="nextButton"
            @click.native="onSaveButtonClick"
            block
            primary
          >
            {{ $t('POL_NEXT') }}
          </PriButton>
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
