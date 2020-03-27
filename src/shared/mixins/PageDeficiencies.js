import { keyBy } from 'lodash';
import { PAGE_ID_MAP } from '@/shared/LifeConstants';

export const PageDeficienciesMixin = {
  computed: {
    pageDeficiencies() {
      return this.deficiencies.filter(
        d => PAGE_ID_MAP[d.pageId] === this.currentView
      );
    },
    mappedDeficiencies() {
      return keyBy(this.pageDeficiencies, d => d.controlName);
    }
  },
  methods: {
    isDeficiencyOnInputForm(controlName) {
      // TODOO: put in mixin or in parent
      return (
        (this.quickCheckMode || this.hasDeficienciesOnSubmit) &&
        !!this.mappedDeficiencies[controlName]
      );
    },
    deficiencyMessageForInputForm(controlName) {
      // TODOO: put in mixin or in parent
      return this.isDeficiencyOnInputForm(controlName)
        ? this.mappedDeficiencies[controlName].errorText
        : [];
    }
  }
};
