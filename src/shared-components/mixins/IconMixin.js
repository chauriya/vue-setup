export const IconMixin = {
  props: {
    showCheckMarkOnValid: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    up: false
  }),
  computed: {
    shouldShowIcon() {
      const it = this.$refs.iconTarget;
      return this.up && it && it.shouldValidate;
    },
    valid() {
      const it = this.$refs.iconTarget;
      return this.up && it && it.valid;
    },
    co_validationIcon() {
      let icon = '';
      if (this.valid) {
        if (this.showCheckMarkOnValid) {
          icon = 'mdi-check-circle';
        }
      } else {
        icon = 'mdi-alert-circle';
      }
      return icon;
    },
    co_checkMarkAlertIconsColor() {
      if (this.co_isDisabled) {
        return '';
      } else if (this.valid) {
        return 'success';
      } else {
        return 'error';
      }
    },
    co_actionableIcons() {
      let color = !this.isFocused ? '' : 'primary';
      if (this.co_isDisabled) {
        return '';
      } else if (!this.valid) {
        return 'error';
      } else {
        return color;
      }
    }
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.up = true;
    });
  }
};
