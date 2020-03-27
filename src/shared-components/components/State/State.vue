<script>
import { caStates, usStates } from './states';
import PriBaseSelect from '../../base/BaseSelect';

export default {
  name: 'pri-state',
  extends: PriBaseSelect,
  data: () => ({
    mounted: false,
    acceptedCountries: ['US', 'CA']
  }),
  props: ['country', 'value'],
  mounted() {
    this.mounted = true;
  },
  computed: {
    extraProps() {
      return {
        disabled: this.co_isDisabled || this.isValidCountry
      };
    },
    isValidCountry() {
      return !this.acceptedCountries.includes(this.country);
    },
    co_componentName() {
      return this.country === 'US'
        ? this.$t('COMP_STATE')
        : this.$t('COMP_PROVINCE');
    },
    co_items() {
      const plainStates = this.getPlainList(this.country);
      const abbreviations = Object.keys(plainStates);
      const list = [];
      abbreviations.forEach(abbr => {
        list.push({
          text: plainStates[abbr].name,
          value: abbr
        });
      });
      return list;
    }
  },
  methods: {
    getPlainList(country) {
      if (country === 'US') return usStates;
      if (country === 'CA') return caStates;
      return [];
    }
  }
};
</script>
