<script>
import PriBaseTextField from '../../base/BaseTextField';

const PNF = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export default {
  name: 'pri-phone',
  extends: PriBaseTextField,
  props: {
    type: {
      type: String,
      default: 'number'
    }
  },
  data: () => ({
    componentName: 'COMP_PHONE_NUMBER',
    invalidTextOne: 'COMP_PHONE_NUMBER_INVALID',
    maxLength: 14,
    localValue: ''
  }),
  computed: {
    extraProps() {
      return {
        value: this.getValue
      };
    },
    extraListeners() {
      return {
        input: this.onInput,
        blur: this.onBlur
      };
    },
    validations() {
      const phoneValidations = [
        str => {
          if (!str) return true;
          return this.isValidNumber(str) || this.co_invalidTextOne;
        }
      ];

      return this.isRequired
        ? [this.isRequiredValidation, ...phoneValidations]
        : phoneValidations;
    },
    getValue() {
      return this.localValue || this.asYouType(this.value);
    }
  },
  methods: {
    allowCharsFunction(e) {
      return this.isAllowed(e);
    },
    onInput(val) {
      this.localValue = this.asYouType(val);
    },
    onBlur() {
      this.localValue = this.asYouType(this.value);
    },
    isValidNumber(str) {
      let valid;
      try {
        const parsed = phoneUtil.parse(str.toString(), 'US');
        valid = phoneUtil.isValidNumber(parsed);
      } catch (e) {
        valid = false;
      }
      return valid;
    },
    asYouType(phoneNumber) {
      if (!phoneNumber) return;
      let formatted;
      let national;
      try {
        const parsed = phoneUtil.parse(phoneNumber.toString(), 'US');
        formatted = phoneUtil.format(parsed, PNF.NATIONAL);
        national = parsed.getNationalNumber();
      } catch (e) {
        formatted = phoneNumber;
        national = phoneNumber;
      }
      this.$emit('input', this.type === 'string' ? `${national}` : national);
      return formatted;
    },
    isAllowed(ev) {
      const check = /[0-9]/.test(ev.key);
      if (!check) ev.preventDefault();
    }
  }
};
</script>
