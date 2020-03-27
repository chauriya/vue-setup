<script>
import Firstname from '../FirstName/FirstName';

export default {
  name: 'pri-middle-name',
  extends: Firstname,
  data: () => ({
    componentName: 'COMP_MIDDLE_NAME',
    maxLength: 20
  })
};
</script>
