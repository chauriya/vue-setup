<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-zip',
  extends: PriBaseTextField,
  data: () => ({
    acceptedCountries: ['US', 'CA'],
    error: false,
    invalidTextOne: 'COMP_ZIP_INVALID',
    invalidTextTwo: 'COMP_POSTAL_INVALID'
  }),
  props: ['country'],
  methods: {
    allowCharsFunction(e) {
      return this.isAllowed(e);
    },
    isAllowed(ev) {
      const usAllowed = '0123456789';
      const caAllowed = 'ABCEGHJKLMNPRSTVWXYZ0123456789';
      let allowed = false;

      if (this.country === 'US') allowed = usAllowed.includes(ev.key);
      if (this.country === 'CA')
        allowed = caAllowed.includes(ev.key.toUpperCase());

      if (!allowed) ev.preventDefault();
    },
    format(value) {
      if (this.country === 'US') {
        return value.length > 5
          ? this.formatWithMask(value, '#####-####')
          : this.formatWithMask(value, '#####');
      }
      return value.trim().toUpperCase();
    },
    onInput(val) {
      this.$emit('input', this.format(val));
    },
    isValidUSZipcode(str) {
      // Regex https://regex101.com/r/aohH2N/1
      const regex = /^\d{5}$|^\d{5}-\d{4}$/;
      return regex.test(str);
    },
    isValidCAZipcode(str) {
      // Regex https://regex101.com/r/X248Se/1
      const regex = /^[ABCEGHJKLMNPRSTVXY][ABCEGHJKLMNPRSTVWXYZ0-9]{5}$/;
      return regex.test(str);
    }
  },
  computed: {
    extraProps() {
      return {
        disabled: this.co_isDisabled || this.isValidCountry
      };
    },
    extraListeners() {
      return {
        input: this.onInput
      };
    },
    co_componentName() {
      return this.country === 'US'
        ? this.$t('COMP_ZIP')
        : this.$t('COMP_POSTAL');
    },
    isValidCountry() {
      return !this.acceptedCountries.includes(this.country);
    },
    maxLength() {
      return this.country === 'US' ? 10 : 6;
    },
    validations() {
      const USValidations = [
        str => {
          if (!str) return true;

          return this.isValidUSZipcode(str) || `${this.co_invalidTextOne}`;
        }
      ];
      const CAValidations = [
        str => {
          if (!str) return true;

          return this.isValidCAZipcode(str) || `${this.co_invalidTextTwo}`;
        }
      ];

      let zipValidations =
        this.country === 'US' ? USValidations : CAValidations;

      return this.isRequired
        ? [this.isRequiredValidation, ...zipValidations]
        : zipValidations;
    }
  }
};
</script>
