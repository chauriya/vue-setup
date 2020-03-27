<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-middle-initial',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'L_PRI_MIDDLE_NAME',
    maxLength: 1
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
      const middleInitialValidations = [];

      return this.isRequired
        ? [this.isRequiredValidation, ...middleInitialValidations]
        : middleInitialValidations;
    }
  }
};
</script>
