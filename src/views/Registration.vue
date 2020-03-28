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
    <v-form ref="registrationFrm">
      <v-row align="center">
        <v-col cols="12">
          <PriRegNumber v-model="reg.userid" required />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriSSN v-model="reg.ssn" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriDatepicker v-model="reg.dob" :label="$t('POL_DOB')" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriEmail v-model="reg.email" :label="$t('POL_NON_PRI_EMAIL')" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriEmail
            v-model="reg.confirmemail"
            :label="$t('POL_CONFIRM_EMAIL')"
          />
        </v-col>
      </v-row>
    </v-form>
    <template v-slot:bottom>
      <v-row>
        <v-col cols="12" sm="6">
          <!-- class="nxtBtn" -->
          <PriButton
            name="cancelButton"
            @click.native="onCancelButtonClick"
            block
          >
            {{ $t('POL_CANCEL') }}
          </PriButton>
        </v-col>
        <v-col cols="12" sm="6">
          <!-- class="cancelBtn" -->
          <PriButton
            max-width="20"
            name="nextButton"
            @click.native="onNextButtonClick"
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
    onCancelButtonClick() {
      return false;
    },
    onNextButtonClick() {
      //console.log(this.$refs.registrationFrm.validate());
      this.$router.push({
        name: 'verifyDetails'
      });
    }
  },
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
