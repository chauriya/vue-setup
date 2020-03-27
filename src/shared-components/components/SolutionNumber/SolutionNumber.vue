<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-solution-number',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'COMP_SOLUTION_NUMBER',
    invalidTextOne: 'COMP_SOLUTION_NUMBER_INVALID',
    maxLength: 5
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyAlphaNumeric(e);
    }
  },
  computed: {
    extraListeners() {
      return {
        input: this.onInputUpperCase
      };
    },
    validations() {
      const solutionNumberValidations = [
        str => {
          if (!str) return true;
          return (str && str.length === 5) || this.co_invalidTextOne;
        }
      ];

      return this.isRequired
        ? [this.isRequiredValidation, ...solutionNumberValidations]
        : solutionNumberValidations;
    }
  }
};
</script>
