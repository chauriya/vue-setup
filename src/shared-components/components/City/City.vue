<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-city',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'L_CITY',
    invalidTextOne: 'COMP_CITY_INVALID',
    maxLength: 25
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyAlphaPlus(e, `-. '`);
    }
  },
  computed: {
    validations() {
      const cityValidation = str => {
        if (!str) return true;
        // Regex checks the character set between brackets below, possible space in between too
        const check = /^[a-zA-Z\-. ']+$/.test(str);
        return check || this.co_invalidTextOne;
      };
      return this.isRequired
        ? [this.isRequiredValidation, cityValidation]
        : [cityValidation];
    }
  }
};
</script>
