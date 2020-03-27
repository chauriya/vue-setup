<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-account-number',
  extends: PriBaseTextField,
  props: {
    country: {
      type: String,
      default: 'US'
    }
  },
  data: () => ({
    maxLength: 19,
    componentName: 'CWA_ACCOUNT_NBR',
    invalidTextOne: 'CWA_ACCOUNT_NBR_INVALID'
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyNumeric(e);
    }
  },

  computed: {
    validations() {
      const common = [
        str => {
          if (!str) return true;
          const invalidIfMatchRegex = /(123456789)|(987654321)|([0]{9,})/;
          return !invalidIfMatchRegex.test(str) || this.co_invalidTextOne;
        }
      ];

      const USValidations = [];

      const CAValidations = [
        str => {
          if (!str) return true;
          const reg = /^[^9]\d+$/;
          return reg.test(str) || this.co_invalidTextOne;
        }
      ];

      let specific = this.country === 'US' ? USValidations : CAValidations;

      return this.isRequired
        ? [this.isRequiredValidation, ...common, ...specific]
        : [...common, ...specific];
    }
  }
};
</script>
