<template>
  <pri-responsive-page-layout>
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
  methods: {
    onCancelButtonClick() {
      this.$router.go(-1);
    },
    onNextButtonClick() {
      //console.log(this.$refs.registrationFrm.validate());
      this.$router.push({
        name: 'verifyDetails'
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
