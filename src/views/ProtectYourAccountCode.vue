<template>
  <pri-responsive-page-layout :title="Registration" title-accent="primary">
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-layout text-center wrap>
      <h2 class="headline mb-3">{{ $t('POL_ACC_CODE') }}</h2>
    </v-layout>
    <h3 class="mb-3">{{ $t('POL_ACC_CODE_SUB_HEADER') }}</h3>
    <v-form>
      <v-row align="center">
        <v-col cols="12">
          <PriCode label="Code" />
        </v-col>
      </v-row>
      <h3 class="mb-3">
        {{ $t('NOT_RECEVICE_CODE') }}
        <v-link>{{ $t('RESEND_CODE') }}</v-link>
      </h3>
      <h3 class="mb-3">{{ $t('CODE_TIME') }}</h3>
      <h3 class="mb-3">
        {{ $t('YOU_CAN_TRY') }}
        <a href="#">{{ $t('OTHER_VERIFICATION') }}</a>
        {{ $t('TECH_SUPPORT') }}
        <a href="#">{{ $t('TECH_SUPPORT_NO') }}</a>
      </h3>
      <h3 class="mb-3">
        <v-checkbox :label="$t('TRUST_LABEL')"></v-checkbox>
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
import { PriCode, PriButton } from '@/shared-components';
import PriResponsivePageLayout from '@/components/ResponsivePageLayout';

export default {
  name: 'Registration',
  components: {
    PriButton,
    PriCode,
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
