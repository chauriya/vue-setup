<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-age',
  extends: PriBaseTextField,
  props: {
    value: Number
  },
  data: () => ({
    componentName: 'L_AGE',
    maxLength: 3,
    invalidTextOne: 'COMP_AGE_INVALID'
  }),
  computed: {
    extraListeners() {
      return {
        input: this.onInput
      };
    },
    validations() {
      const ageValidation = str => {
        if (!str) return true;
        let val = Number(str);
        return val < 0 || val > 130
          ? `${this.co_invalidTextOne} - (0 - 130)`
          : true;
      };
      return this.isRequired
        ? [this.isRequiredValidation, ageValidation]
        : [ageValidation];
    }
  },
  methods: {
    onInput(val) {
      if (val === '') return this.$emit('input', null);
      this.$emit('input', Number(val));
    },
    allowCharsFunction(e) {
      return this.onlyNumeric(e);
    }
  }
};
</script>
