<script>
import PriBaseTextField from '../../base/BaseTextField';

export default {
  name: 'pri-first-name',
  extends: PriBaseTextField,
  data: () => ({
    componentName: 'L_PRI_FIRST_NAME',
    maxLength: 25,
    invalidTextOne: 'COMP_FIRST_NAME_INVALID'
  }),
  methods: {
    allowCharsFunction(e) {
      return this.onlyAlphaPlus(e, `-.' `);
    }
  },
  computed: {
    validations() {
      const firstNameValidation = str => {
        if (!str || !str.trim()) return true;

        // Regex checks the character set between brackets below, possible space in between too
        const check = /^[a-zA-Z\-.']+ ?[a-zA-Z\-.']+$/.test(str);
        return check || this.co_invalidTextOne;
      };

      return this.isRequired
        ? [this.isRequiredValidation, firstNameValidation]
        : [firstNameValidation];
    }
  }
};
</script>
