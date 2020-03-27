<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-title',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'COMP_TITLE',
    invalidTextOne: 'COMP_TITLE_INVALID',
    maxLength: 4
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyAlpha(e);
    }
  },
  computed: {
    extraListeners() {
      return {
        input: this.onInputUpperCase
      };
    },
    validations() {
      const titleValidations = [
        str => {
          if (!str) return true;

          return (str && str.length === 4) || this.co_invalidTextOne;
        }
      ];

      return this.isRequired
        ? [this.isRequiredValidation, ...titleValidations]
        : titleValidations;
    }
  }
};
</script>
