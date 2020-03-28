import _ from 'lodash';

export const ComponentDefaultsMixin = {
  data: () => ({
    invalidTextOne: 'invalidTextOne',
    invalidTextTwo: 'invalidTextTwo',
    invalidTextThree: 'invalidTextThree',
    open: false
  }),
  props: ['value', 'label', 'disabled', 'info'],
  methods: {
    onInfoClick() {
      this.open = true;
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    onInput(v) {
      this.$emit('input', v);
    },
    onInputCapitalizeAndTrimLeft(v) {
      this.$emit('input', this.capitalize(v.trimLeft()));
    },
    onInputUpperCase(val) {
      this.$emit('input', val.toUpperCase().trimLeft());
    },
    trimEdgesAndInnerSpaces(capitalize = true) {
      if (this.value && typeof this.value === 'string') {
        const trimmed = this.value.trim();
        const toSplit = capitalize ? this.capitalize(trimmed) : trimmed;
        this.$emit(
          'input',
          toSplit
            .split(' ')
            .filter(v => v.length)
            .join(' ')
        );
      }
    },
    trimEdgesAndInnerSpacesWithoutCapitalization() {
      return this.trimEdgesAndInnerSpaces(false);
    }
  },
  watch: {
    '$i18n.locale'() {
      try {
        this.$refs['iconTarget'].validate();
      } catch (e) {
        // Do Nothing, forcing validation will make sure
        // that components error texts are translated as soon
        // as locale changes.
      }
    }
  },
  computed: {
    slicedValueByMaxLength() {
      if (typeof this.value === 'string' && this.maxLength) {
        return this.value.slice(0, this.maxLength);
      } else {
        return this.value;
      }
    },
    co_info_content() {
      // this isn't something that should change when using the components
      // so use local copy ??
      let localInfo = _.cloneDeep(this.info);
      if (!this.info) {
        // avoid null pointers
        localInfo = '';
      }
      if (typeof localInfo === 'string') {
        return {
          text: localInfo,
          // text: this.$t(localInfo),
          yesBtn: this.$t('L_DISMISS')
        };
      } else {
        return {
          title: localInfo.title,
          text: localInfo.text,
          yesBtn: localInfo.yesBtn,
          noBtn: localInfo.noBtn
        };
      }
    },
    co_invalidTextOne() {
      return this.$t(this.invalidTextOne);
    },
    co_invalidTextTwo() {
      return this.$t(this.invalidTextTwo);
    },
    co_invalidTextThree() {
      return this.$t(this.invalidTextThree);
    },
    co_componentName() {
      return this.label || this.$t(this.componentName);
    },
    co_isDisabled() {
      return this.disabled === true;
    }
  }
};
