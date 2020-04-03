<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-reg-number',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'POL_USERID',
    invalidTextOne: 'POL_USERID_INVALID',
    maxLength: 7
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyAlphaNumeric(e);
    }
  },
  computed: {
    extraListeners() {
      return {
        input: this.onInputUpperCase
      };
    }
  }
};
</script>
