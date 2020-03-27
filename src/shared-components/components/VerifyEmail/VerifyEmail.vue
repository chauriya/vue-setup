<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-verify-email',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'COMP_VERIFY_EMAIL',
    invalidTextOne: 'COMP_VERIFY_EMAIL_INVALID'
  }),
  props: {
    email: {
      type: String,
      required: true
    }
  },
  computed: {
    extraListeners() {
      return {
        blur: this.trimEdgesAndInnerSpacesWithoutCapitalization,
        input: this.onInput
      };
    },
    validations() {
      const emailValidations = [
        str => {
          if (!str) return true;
          return str === this.email || this.co_invalidTextOne;
        }
      ];

      return this.isRequired
        ? [this.isRequiredValidation, ...emailValidations]
        : emailValidations;
    }
  }
};
</script>
