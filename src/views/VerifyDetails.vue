<template>
  <pri-responsive-page-layout :title="viewDetails" title-accent="primary">
    <!-- page-level-errors="vm.transitionInfo.pageLevelErrors" -->
    <v-row align="center">
      <v-col cols="12">
        <span class="title text-left">is this you?</span>
        <br />
        <span class="body-2 text-left">
          if not, go back and re-enter your information. You will be able to
          update your information after registration.
        </span>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12">
        <span class="title text-left">Rep ID</span>
        <br />
        <span class="body-2 text-left">112CP</span>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12">
        <span class="title text-left">Name</span>
        <br />
        <span class="body-2 text-left">Agent X</span>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12">
        <span class="title text-left">Title</span>
        <br />
        <span class="body-2 text-left">Avengers</span>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12">
        <span class="title text-left">Address</span>
        <br />
        <span class="body-2 text-left">Assguard</span>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12">
        <span class="title text-left">RVP</span>
        <br />
        <span class="body-1 text-left">Captain Mar Vell</span>
      </v-col>
    </v-row>
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
import { PriButton } from '@/shared-components';
import PriResponsivePageLayout from '@/components/ResponsivePageLayout';

export default {
  name: 'viewDetails',
  components: {
    PriButton,
    PriResponsivePageLayout
  },
  data() {
    return {
      //registration: {}
    };
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
