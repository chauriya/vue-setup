import Vue from 'vue';
import Message from '../components/Message/Message.vue';

const INFO = 'info';
const ERROR = 'error';
const SUCCESS = 'success';
const WARNING = 'warning';
const DEFAULT_INFO_ICON = 'mdi-information';
const DEFAULT_INFO_COLOR = '#2196f3';
const DEFAULT_ERROR_ICON = 'mdi-alert-circle';
const DEFAULT_ERROR_COLOR = '#dd3333';
const DEFAULT_SUCCESS_ICON = 'mdi-check-circle';
const DEFAULT_SUCCESS_COLOR = '#0b8d1f';
const DEFAULT_WARNING_ICON = 'mdi-alert';
const DEFAULT_WARNING_COLOR = '#f39c12';

const messaging = new Vue({
  data() {
    return {
      INFO: INFO,
      ERROR: ERROR,
      SUCCESS: SUCCESS,
      WARNING: WARNING,
      DEFAULT_INFO_ICON: DEFAULT_INFO_ICON,
      DEFAULT_INFO_COLOR: DEFAULT_INFO_COLOR,
      DEFAULT_ERROR_ICON: DEFAULT_ERROR_ICON,
      DEFAULT_ERROR_COLOR: DEFAULT_ERROR_COLOR,
      DEFAULT_SUCCESS_ICON: DEFAULT_SUCCESS_ICON,
      DEFAULT_SUCCESS_COLOR: DEFAULT_SUCCESS_COLOR,
      DEFAULT_WARNING_ICON: DEFAULT_WARNING_ICON,
      DEFAULT_WARNING_COLOR: DEFAULT_WARNING_COLOR,
      severityMetadata: {}
    };
  },
  methods: {
    clearMessage() {
      this.$emit('hide');
    },

    getSeverityMetadata() {
      if (Object.keys(this.severityMetadata).length) {
        return this.severityMetadata;
      } else {
        this.severityMetadata[INFO] = {
          icon: DEFAULT_INFO_ICON,
          color: DEFAULT_INFO_COLOR
        };
        this.severityMetadata[ERROR] = {
          icon: DEFAULT_ERROR_ICON,
          color: DEFAULT_ERROR_COLOR
        };
        this.severityMetadata[SUCCESS] = {
          icon: DEFAULT_SUCCESS_ICON,
          color: DEFAULT_SUCCESS_COLOR
        };
        this.severityMetadata[WARNING] = {
          icon: DEFAULT_WARNING_ICON,
          color: DEFAULT_WARNING_COLOR
        };
        return this.severityMetadata;
      }
    },

    setSeverityMetadata(severityMetadata) {
      if (severityMetadata) {
        this.severityMetadata = severityMetadata;
      }
    },

    sendError({ title, onClose, errors }) {
      this.$emit('show', {
        title,
        onClose,
        details: errors,
        severity: ERROR
      });
    },

    sendInfo(info) {
      this.$emit('show', {
        title: info,
        severity: INFO
      });
    },

    sendMessage(msg) {
      this.$emit('show', msg);
    },

    sendSuccess(success) {
      this.$emit('show', {
        title: success,
        severity: SUCCESS
      });
    },

    sendWarning({ onClose, title, warnings }) {
      this.$emit('show', {
        title,
        onClose,
        details: warnings,
        severity: this.WARNING
      });
    }
  }
});

export default {
  install: (vue, options) => {
    messaging.setSeverityMetadata(options);
    vue.prototype.$messaging = messaging;

    vue.component(Message.name, Message);

    vue.config.errorHandler = (error, component, info) => {
      messaging.sendError({
        title: info,
        errors: [error],
        component
      });
    };

    vue.config.warnHandler = warning => {
      messaging.sendWarning({
        warnings: [warning]
      });
    };
  },
  sendError: messaging.sendError,
  sendWarning: messaging.sendWarning
};
