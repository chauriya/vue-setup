<template>
  <pri-responsive-page-layout>
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">{{ $t('POL_HEADER_REGISTRATION') }}</h2>
    </v-layout>
    <h3 class="mb-3">{{ $t('POL_REGISTRATION_INFO') }}</h3>
    <v-form ref="registrationFrm">
      <v-row align="center">
        <v-col cols="12">
          <PriRegNumber v-model="reg.userid" required />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriSSN v-model="reg.ssn" required format="ssn" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriDatepicker v-model="reg.dob" required :label="$t('POL_DOB')" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriEmail
            v-model="reg.email"
            required
            :label="$t('POL_NON_PRI_EMAIL')"
          />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriEmail
            v-model="reg.confirmemail"
            required
            :label="$t('POL_CONFIRM_EMAIL')"
          />
        </v-col>
      </v-row>
    </v-form>
    <template v-slot:bottom>
      <v-row>
        <v-col cols="12" sm="6">
          <PriButton
            max-width="20"
            name="nextButton"
            @click.native="onNextButtonClick"
            block
            :disabled="isFormValid()"
            primary
            >{{ $t('POL_NEXT') }}</PriButton
          >
        </v-col>
        <v-col cols="12" sm="6">
          <PriButton
            name="cancelButton"
            @click.native="onCancelButtonClick"
            block
            >{{ $t('POL_CANCEL') }}</PriButton
          >
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
  PriRegNumber,
  PriDatepicker
} from '@/shared-components';
import PriResponsivePageLayout from '@/components/ResponsivePageLayout';
export default {
  name: 'registration',
  components: {
    PriButton,
    PriEmail,
    PriDatepicker,
    PriSSN,
    PriRegNumber,
    PriResponsivePageLayout
  },
  data: () => ({
    reg: {}
  }),
  methods: {
    isFormValid() {
      return this.$refs.registrationFrm
        ? !this.$refs.registrationFrm.validate()
        : true;
    },
    onCancelButtonClick() {
      console.log(this.test);
      return false;
    },
    onNextButtonClick() {
      console.log(this.reg);
      /* this.$router.push({
        name: 'verifyDetails'
      }); */
    }
  }
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
  .v-application .primary--text {
    width: inherit !important;
  }
  .theme--light.v-btn.v-btn--disabled {
    width: inherit !important;
  }
}
</style>
