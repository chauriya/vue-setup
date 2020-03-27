<script>
import Firstname from '../FirstName/FirstName';

export default {
  name: 'pri-fullname',
  extends: Firstname,
  data: () => ({
    componentName: 'COMP_FULL_NAME',
    maxLength: 65,
    invalidTextOne: 'COMP_FIRST_NAME_INVALID'
  }),
  computed: {
    validations() {
      const fullnameValidations = [
        str => {
          if (!str) return true;

          // Regex checks the character set between brackets below, possible space in between too
          const check = /^[a-zA-Z\-.' ]+$/.test(str);
          return check || this.co_invalidTextOne;
        }
      ];
      return this.isRequired
        ? [this.isRequiredValidation, ...fullnameValidations]
        : fullnameValidations;
    }
  }
};
</script>
