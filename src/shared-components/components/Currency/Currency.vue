<script>
import PriBaseTextField from '../../base/BaseTextField';

const usCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
const caCurrency = new Intl.NumberFormat('en-CD', {
  currency: 'CAD',
  style: 'currency'
});

export default {
  name: 'pri-currency',
  extends: PriBaseTextField,
  props: {
    value: Number
  },
  data: () => ({
    componentName: 'COMP_CURRENCY',
    maxLength: 15
  }),
  computed: {
    extraListeners() {
      return {
        input: this.onInput
      };
    }
  },
  methods: {
    allowCharsFunction(e) {
      return this.allowCurrencyOnly(e);
    },
    onInput(val) {
      if (val === '') {
        let events = ['input', 'us-currency', 'ca-currency'];
        return events.forEach(val => this.$emit(val, null));
      }
      const num = Number(val);
      this.$emit('input', num);
      this.$emit(
        'us-currency',
        usCurrency
          .format(num)
          .split('$')
          .join('$ ')
      );
      this.$emit(
        'ca-currency',
        caCurrency
          .format(num)
          .split('CA$')
          .join('CA$ ')
      );
    },
    allowCurrencyOnly(ev) {
      const regex = new RegExp(`[0-9.]`);
      if (!regex.test(ev.key)) ev.preventDefault();
      if (`${this.value}`.includes('.') && ev.key === '.') {
        ev.preventDefault();
      }
    }
  }
};
</script>
