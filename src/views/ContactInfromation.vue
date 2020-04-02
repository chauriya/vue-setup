<template>
  <pri-responsive-page-layout>
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">{{ $t('EMAIL_POL') }}</h2>
    </v-layout>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <h4>{{ $t('SELECT_EMAIL') }}</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <v-select required></v-select>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <h4>{{ $t('EMAIL_NON_POL') }}</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <span>abcd@gmail.com</span>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <h4>{{ $t('POL_MOBILE') }}</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <h4>
            {{ $t('AUTH_INFO_TEXT') }}
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
        <v-col cols="12" sm="6">
          <!-- class="cancelBtn" -->
          <PriButton
            max-width="20"
            name="nextButton"
            @click.native="onNextButtonClick"
            block
            primary
            >{{ $t('POL_NEXT') }}</PriButton
          >
        </v-col>
        <v-col cols="12" sm="6">
          <!-- class="nxtBtn" -->
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
  methods: {
    onCancelButtonClick() {
      this.$router.go(-1);
    },
    onNextButtonClick() {
      //console.log(this.$refs.registrationFrm.validate());
      this.$router.push({
        name: 'protectYourAccount'
      });
    }
  },
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
