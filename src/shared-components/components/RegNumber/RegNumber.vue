<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-reg-number',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'POL_USERID',
    invalidTextOne: 'POL_USERID_INVALID',
    maxLength: 10
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyNumeric(e);
    }
  },
  computed: {
    extraListeners() {
      return {
        input: this.onInputUpperCase
      };
    },
    validations() {
      const repNumberValidations = [
        str => {
          if (!str) return true;
          return (
            /^(04[1-689]|05[12]|10[3-9]|347)\d{7}$/.test(str) ||
            this.co_invalidTextOne
          );
        }
      ];

      return this.isRequired
        ? [this.isRequiredValidation, ...repNumberValidations]
        : repNumberValidations;
    }
  }
};
</script>
