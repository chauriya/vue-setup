<script>
import { ComponentDefaultsMixin } from '@/shared-components/mixins';
import PriBaseSelect from '../../base/BaseSelect';

export default {
  name: 'pri-boolean',
  extends: PriBaseSelect,
  mixins: [ComponentDefaultsMixin],
  data: () => ({
    componentName: 'Boolean Component'
  }),
  props: {
    type: {
      default: 'radio'
    },
    noRadioLabel: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: null
    },
    labelForTrue: {
      type: String,
      default: 'COMP_YES'
    },
    labelForFalse: {
      type: String,
      default: 'COMP_NO'
    }
  },
  computed: {
    co_items() {
      return [
        {
          text: this.$t(this.labelForTrue),
          value: true
        },
        {
          text: this.$t(this.labelForFalse),
          value: false
        }
      ];
    }
  },
  methods: {
    onInput(val) {
      if (val === 0) this.$emit('input', true);
      if (val === 1) this.$emit('input', false);
    }
  }
};
</script>
