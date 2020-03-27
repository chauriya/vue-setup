<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-routing-number',
  extends: PriBaseTextField,
  data: () => ({
    maxLength: 9,
    invalidTextOne: 'L_DIR_ROUTING_INVALID',
    invalidTextTwo: 'COMP_TRANSIT_NUMBER_INVALID'
  }),
  props: {
    country: {
      type: String,
      default: 'US'
    }
  },
  computed: {
    extraListeners() {
      return {
        input: this.onInput
      };
    },
    getInvalidTextByCountry() {
      return this.country === 'US'
        ? this.co_invalidTextOne
        : this.co_invalidTextTwo;
    },
    co_componentName() {
      return this.country === 'US'
        ? this.$t('L_DIR_ROUTING_NUM')
        : this.$t('COMP_TRANSIT_NUMBER');
    },
    validations() {
      const common = str => {
        if (!str) return true;

        return (str && str.length === 9) || this.getInvalidTextByCountry;
      };

      const USValidations = [
        str => {
          if (!str) return true;

          // https://regex101.com/r/ahGvj2/1
          const usTransitRegex = /^(?!123456789|[0]{9}|[1]{9}|[2]{9}|987654321)(^([012][1-9])|^([3][012])|^(90))(\d{7})$/;
          return usTransitRegex.test(str) || this.getInvalidTextByCountry;
        },
        str => {
          if (!str) return true;

          const number = this.getNumbers(str);
          let n = 0;
          let i;
          for (i = 0; i < number.length; i += 3) {
            n +=
              parseInt(number.charAt(i), 10) * 3 +
              parseInt(number.charAt(i + 1), 10) * 7 +
              parseInt(number.charAt(i + 2), 10);
          }
          return (n !== 0 && n % 10 === 0) || this.getInvalidTextByCountry;
        }
      ];

      const CAValidations = [
        str => {
          if (!str) return true;

          const CATransitRegex = /^(?!12345-678|00000-000)(^\d{5}-\d{3})$/;
          return CATransitRegex.test(str) || this.getInvalidTextByCountry;
        }
      ];

      let specific = this.country === 'US' ? USValidations : CAValidations;

      return this.isRequired
        ? [this.isRequiredValidation, common, ...specific]
        : [common, ...specific];
    }
  },
  methods: {
    allowCharsFunction(e) {
      return this.onlyNumeric(e);
    },
    onInput(val) {
      if (this.country === 'US') {
        this.$emit('input', val);
      } else {
        this.$emit('input', this.formatWithMask(val, '#####-###'));
      }
    }
  }
};
</script>
