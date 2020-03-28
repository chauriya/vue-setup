<template>
  <pri-responsive-page-layout>
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">{{ $t('POL_ACC_CODE') }}</h2>
    </v-layout>
    <h3 class="mb-3">{{ $t('VERIFICATION_METHOD') }}</h3>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <PriBoolean
            :label="$t('EMAIL_TO')"
            :no-radio-label="false"
            labelForFalse="Abc@gmail.com"
            labelForTrue="xyz@gmail.com"
          />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <PriBoolean
            :label="$t('TEXT_TO')"
            :no-radio-label="false"
            labelForTrue="(123) 987 - 8765"
          />
          <span>{{ $t('RATE_TEXT') }}</span>
        </v-col>
      </v-row>
      <h3 class="mb-3">{{ $t('SAVE_INFO') }}</h3>
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
  methods: {
    onCancelButtonClick() {
      this.$router.go(-1);
    },
    onNextButtonClick() {
      //console.log(this.$refs.registrationFrm.validate());
      this.$router.push({
        name: 'protectYourAccountCode'
      });
    }
  },
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
