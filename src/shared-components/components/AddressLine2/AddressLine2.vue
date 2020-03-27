<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-address-line-2',
  extends: PriBaseTextField,
  data: () => ({
    maxLength: 50,
    componentName: 'COMP_ADDR_2',
    invalidTextOne: 'COMP_ADDR_1_INVALID'
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyAlphaNumericPlus(e, `-.# '`);
    }
  },
  computed: {
    validations() {
      const addressLine2Validation = [
        str => {
          // Regex checks the character set between brackets below, possible space in between too
          if (!str) return true;
          const check = /^[a-zA-Z0-9\-.# ']+$/.test(str);

          return check || this.co_invalidTextOne;
        }
      ];
      return this.isRequired
        ? [this.isRequiredValidation, ...addressLine2Validation]
        : addressLine2Validation;
    }
  }
};
</script>
