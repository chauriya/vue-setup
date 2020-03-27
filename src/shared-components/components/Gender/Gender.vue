<script>
import PriBaseSelect from '../../base/BaseSelect';

export default {
  name: 'pri-gender',
  extends: PriBaseSelect,
  props: {
    type: {
      default: 'radio'
    }
  },
  data: () => ({
    componentName: 'L_PRI_GENDER'
  }),
  computed: {
    co_items() {
      return [
        {
          text: this.$t('L_FEMALE'),
          value: 'F'
        },
        {
          text: this.$t('L_MALE'),
          value: 'M'
        }
      ];
    }
  }
};
</script>
