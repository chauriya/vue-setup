<template>
  <div>
    <v-text-field
      @keypress="allowCharsFunction"
      v-bind="mixedProps"
      v-on="mixedListeners"
    >
      <template v-slot:label>
        <span
          :class="{
            'pri-required': isRequired,
            'pri-required-red': !co_isDisabled
          }"
          >{{ componentName }}</span
        >
      </template>
      <template v-if="info" v-slot:prepend-inner>
        <v-icon :disabled="co_isDisabled" @click.stop="onInfoClick" color="blue"
          >mdi-information</v-icon
        >
      </template>
      <template v-if="shouldShowIcon" v-slot:append>
        <v-icon
          :color="co_checkMarkAlertIconsColor"
          :disabled="co_isDisabled"
          >{{ co_validationIcon }}</v-icon
        >
      </template>
    </v-text-field>
    <PriDialog :content="co_info_content" v-model="open" />
  </div>
</template>

<script>
import {
  ComponentDefaultsMixin,
  IconMixin,
  KeypressMixin,
  MaskMixin,
  ValidationsMixin
} from './mixins';
import PriDialog from './components/Dialog/';

export default {
  name: 'pri-base-text-field',
  components: { PriDialog },
  mixins: [
    ComponentDefaultsMixin,
    KeypressMixin,
    ValidationsMixin,
    IconMixin,
    MaskMixin
  ],
  props: {
    componentName: String
  },
  data: () => ({
    //componentName: 'Base Text Field'
  }),
  methods: {
    allowCharsFunction() {
      return undefined;
    }
  },
  computed: {
    extraProps: () => ({}),
    extraListeners: () => ({}),
    mixedProps() {
      const defaultProps = {
        maxlength: this.maxLength,
        ref: 'iconTarget',
        rules: this.validations,
        value: this.slicedValueByMaxLength,
        disabled: this.co_isDisabled,
        error: this.$attrs.error,
        'error-messages': this.$attrs['error-messages']
      };

      return {
        ...defaultProps,
        ...this.extraProps
      };
    },
    mixedListeners() {
      const defaultListeners = {
        'paste.prevent': '',
        input: this.onInputCapitalizeAndTrimLeft,
        blur: this.trimEdgesAndInnerSpaces
      };
      return {
        ...defaultListeners,
        ...this.extraListeners
      };
    },
    validations() {
      return this.isRequired ? [this.isRequiredValidation] : [];
    }
  }
};
</script>

<style lang="scss" scoped>
@import './styles/styles';

.pri-required:after {
  @include required;
}

.pri-required.pri-required-red:after {
  @include requiredRed;
}
</style>
