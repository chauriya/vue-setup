<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-driver-license',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'L_AI_DRIVERS_LICENSE'
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyAlphaNumericPlus(e, '*');
    }
  }
};
</script>
