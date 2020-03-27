<script>
import PriBaseSelect from '../../base/BaseSelect';

export default {
  name: 'pri-country',
  extends: PriBaseSelect,
  props: {
    type: {
      default: 'radio'
    }
  },
  data: () => ({
    componentName: 'COMP_COUNTRY'
  }),
  computed: {
    co_items() {
      return [
        { text: this.$t('L_PRE_US'), value: 'US' },
        { text: this.$t('L_PRE_CA'), value: 'CA' }
      ];
    }
  }
};
</script>
