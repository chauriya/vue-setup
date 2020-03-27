<template>
  <v-alert
    id="message"
    border="top"
    class="component"
    :color="color"
    colored-border
    :icon="icon"
    elevation="2"
    tile
    transition="slide-y-transition"
    :value="showMessage"
  >
    <v-row>
      <v-col class="title">
        {{ title }}
      </v-col>
    </v-row>
    <v-row v-for="(detail, e) in details" :key="e">
      <v-col class="detail">
        {{ detail.message || detail }}
      </v-col>
    </v-row>
    <v-btn class="close" @click="close" icon tile>
      <v-icon color="#000">mdi-close</v-icon>
    </v-btn>
  </v-alert>
</template>

<script>
export default {
  name: 'Message',
  data: () => ({
    title: null,
    details: null,
    onClose: null,
    severity: null,
    showMessage: false,
    severityMetadata: null
  }),
  computed: {
    color() {
      if (this.severityMetadata && this.severity) {
        return this.severityMetadata[this.severity].color;
      }
      return null;
    },

    icon() {
      if (this.severityMetadata && this.severity) {
        return this.severityMetadata[this.severity].icon;
      }
      return this.$messaging.DEFAULT_ERROR_ICON;
    }
  },
  created() {
    const vm = this;
    vm.severityMetadata = vm.$messaging.getSeverityMetadata();

    vm.$messaging.$on('hide', () => {
      vm.close();
    });

    vm.$messaging.$on('show', message => {
      vm.title = message.title;
      vm.details = message.details;
      vm.onClose = message.onClose;
      vm.severity = message.severity;
      if (!vm.title && vm.severity === vm.$messaging.ERROR) {
        vm.title = 'An error has occurred';
      }
      vm.showMessage = true;
      document.getElementById('message').scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    });
  },
  methods: {
    close() {
      if (this.onClose) {
        this.onClose();
      }
      this.showMessage = false;
    }
  }
};
</script>

<style lang="scss">
.component.v-alert {
  width: 100%;
  opacity: 0.95;
  z-index: 1;
  position: absolute;
  .close {
    top: 9px;
    right: 9px;
    position: absolute;
  }
  .col {
    padding: 0 12px 6px;
    &.title {
      font-size: 16px !important;
      font-weight: bold;
      line-height: 26px;
    }
  }
  .v-alert__icon {
    margin-right: 12px;
  }
}
</style>
