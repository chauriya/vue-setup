<template>
  <v-dialog :value="value" max-width="576px" persistent width="90%">
    <div :class="co_dialogColorClass" class="pri-dialog">
      <v-card tile>
        <v-card-title class="headline" v-if="content.title">
          <v-icon :color="co_dialogColor" :size="26" left>
            {{ co_dialogIcon }}
          </v-icon>
          <span class="pri-dialog-title">
            {{ content.title }}
          </span>
        </v-card-title>
        <v-card-text v-if="content.text">
          <span class="pri-dialog-text" v-html="content.text"></span>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="close(false)"
            class="text-capitalize"
            text
            v-if="content.noBtn"
          >
            <span class="pri-dialog-action">
              {{ content.noBtn }}
            </span>
          </v-btn>
          <v-btn
            @click="close(true)"
            class="text-capitalize"
            color="accent"
            text
            v-if="content.yesBtn"
          >
            <span class="pri-dialog-action">
              {{ content.yesBtn }}
            </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'pri-dialog',
  props: {
    value: Boolean,
    content: {
      type: Object,
      default: () => ({
        title: null,
        text: null,
        yesBtn: null,
        noBtn: null,
        type: 'info' // 'warning', 'error'
      })
    }
  },
  computed: {
    co_dialogIcon() {
      switch (this.content.type) {
        case 'warning':
          return 'mdi-alert';
        case 'error':
          return 'mdi-alert-circle';
        default:
          return 'mdi-information';
      }
    },
    co_dialogColor() {
      switch (this.content.type) {
        case 'warning':
          return 'warning';
        case 'error':
          return 'error';
        default:
          return 'info';
      }
    },
    co_dialogColorClass() {
      switch (this.content.type) {
        case 'warning':
          return 'pri-warning';
        case 'error':
          return 'pri-error';
        default:
          return 'pri-info';
      }
    }
  },
  methods: {
    close(decision) {
      this.$emit('input', false);
      this.$emit('close', decision);
    }
  }
};
</script>

<style lang="scss">
.pri-dialog {
  .pri-dialog-title {
    font-size: 24px;
    font-weight: 600;
  }

  .pri-dialog-text {
    font-size: 16px;
  }

  .pri-dialog-action {
    font-size: 14px;
    font-weight: 600;
  }

  .v-card__title.headline {
    padding-top: 8px !important;
    padding-bottom: 18px !important;
  }

  &.pri-info {
    .v-card {
      border-top: 8px solid var(--v-info-base);
    }
  }

  &.pri-warning {
    .v-card {
      border-top: 8px solid var(--v-warning-base);
    }
  }

  &.pri-error {
    .v-card {
      border-top: 8px solid var(--v-error-base);
    }
  }

  .v-card__actions {
    padding-top: 2px;
    padding-bottom: 2px;
  }
}
</style>
