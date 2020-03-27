<script>
import Firstname from '../FirstName/FirstName';

export default {
  name: 'pri-last-name',
  extends: Firstname,
  data: () => ({
    componentName: 'L_PRI_LAST_NAME',
    maxLength: 20
  })
};
</script>
