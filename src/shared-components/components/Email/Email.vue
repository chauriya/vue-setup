<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-email',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'L_PRI_EMAIL',
    invalidTextOne: 'COMP_EMAIL_INVALID'
  }),
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

          // Taken from priEmail.js angular.js directive.
          const regex = /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@([\w-]+\.)+[a-zA-Z]{2,4}$/;
          const check = regex.test(str);
          return check || this.co_invalidTextOne;
        }
      ];

      return this.isRequired
        ? [this.isRequiredValidation, ...emailValidations]
        : emailValidations;
    }
  }
};
</script>
