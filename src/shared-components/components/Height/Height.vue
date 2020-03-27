<template>
  <div>
    <v-text-field
      :disabled="co_isDisabled"
      :maxlength="maxLength"
      :rules="validations"
      :value="value"
      @input="onInput"
      @keypress="onlyNumeric"
      @paste.prevent
      ref="iconTarget"
    >
      <template v-slot:label>
        <span
          :class="{
            'pri-required': isRequired,
            'pri-required-red': !co_isDisabled
          }"
        >
          {{ co_componentName }}
        </span>
      </template>
      <template v-if="info" v-slot:prepend-inner>
        <v-icon
          :disabled="co_isDisabled"
          @click.stop="onInfoClick"
          color="blue"
        >
          mdi-information
        </v-icon>
      </template>
      <template v-if="shouldShowIcon" v-slot:append>
        <v-icon :color="co_checkMarkAlertIconsColor" :disabled="co_isDisabled">
          {{ co_validationIcon }}
        </v-icon>
      </template>
    </v-text-field>
    <PriDialog :content="co_info_content" v-model="open" />

    <v-slider
      :disabled="co_isDisabled"
      :max="max"
      :min="min"
      :value="valueToInches"
      @change="onSliderChange"
      @input="onSliderInput"
      thumb-size="40"
      v-if="slider"
    >
      <template v-slot:prepend>
        <v-icon :disabled="co_isDisabled" @click="decrement" color="error">
          mdi-minus
        </v-icon>
      </template>

      <template v-slot:thumb-label>
        {{ thumbValue }}
      </template>

      <template v-slot:append>
        <v-icon :disabled="co_isDisabled" @click="increment" color="primary">
          mdi-plus
        </v-icon>
      </template>
    </v-slider>
  </div>
</template>

<script>
import {
  ComponentDefaultsMixin,
  IconMixin,
  KeypressMixin,
  MaskMixin,
  ValidationsMixin
} from '../../mixins';
import PriDialog from '../../components/Dialog/Dialog';

export default {
  name: 'pri-height',
  components: { PriDialog },
  mixins: [
    ComponentDefaultsMixin,
    IconMixin,
    KeypressMixin,
    MaskMixin,
    ValidationsMixin
  ],
  props: {
    slider: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    componentName: 'L_AI_HEIGHT',
    invalidTextOne: 'COMP_HEIGHT_INVALID',
    maxLength: 6,
    thumbValue: '',
    min: 0,
    max: 107
  }),

  computed: {
    validations() {
      const heightValidations = [
        str => {
          if (!str) return true;
          return this.isAValidHeight(str) || this.co_invalidTextOne;
        }
      ];

      return this.isRequired
        ? [this.isRequiredValidation, ...heightValidations]
        : heightValidations;
    },
    valueToInches() {
      return this.heightToInches(this.value);
    }
  },
  watch: {
    value(val) {
      this.thumbValue = val;
    }
  },
  methods: {
    onSliderChange(val) {
      const finalVal = this.inchesToHeight(val);
      this.$emit('input', finalVal);
      this.emitBreakdownFromHeight(finalVal);
    },
    onSliderInput(val) {
      const finalVal = this.inchesToHeight(val);
      this.thumbValue = finalVal;
      this.emitBreakdownFromHeight(finalVal);
    },
    onInput(val) {
      const mask = this.getMask(val);
      const formatted = this.formatWithMask(val, mask);
      this.$emit('input', formatted);
      this.emitBreakdownFromHeight(formatted);
    },

    getMask(val) {
      const num = this.getNumbers(val);
      return num.length === 3 ? `#' ##"` : `#' #"`;
    },
    isAValidHeight(str) {
      return /^([0-8]' )((1[01]")|([0-9]"))$/.test(str);
    },
    emitBreakdownFromHeight(h) {
      if (this.isAValidHeight(h)) {
        const { feet, inches } = this.getFeetAndInchesFromNumber(
          this.heightToInches(h)
        );
        this.$emit('feet', feet);
        this.$emit('inches', inches);
      }
    },
    decrement() {
      let inches = this.heightToInches(this.value);

      if (inches === null) inches = this.min;
      if (inches === this.min) inches = this.max + 1;

      const finalInches = inches - 1;
      this.$emit('input', this.inchesToHeight(finalInches));
      this.emitBreakdownFromHeight(this.inchesToHeight(finalInches));
    },
    increment() {
      let inches = this.heightToInches(this.value);

      if (inches === null) inches = this.min;
      if (inches === this.max) inches = this.min - 1;

      const finalInches = inches + 1;
      this.$emit('input', this.inchesToHeight(finalInches));
      this.emitBreakdownFromHeight(this.inchesToHeight(finalInches));
    },
    getFeetAndInchesFromNumber(i) {
      const feet = Math.floor(i / 12);
      const inches = i % 12;
      return { feet, inches };
    },
    inchesToHeight(i) {
      const { feet, inches } = this.getFeetAndInchesFromNumber(i);
      const numbersAsTyped = `${feet}${inches}`;
      return this.formatWithMask(numbersAsTyped, this.getMask(numbersAsTyped));
    },
    heightToInches(height) {
      if (this.isAValidHeight(height)) {
        const [feet, inches] = height
          .split(' ')
          .map(val => Number(this.getNumbers(val)));
        return feet * 12 + inches;
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/styles';

.pri-required:after {
  @include required;
}

.pri-required.pri-required-red:after {
  @include requiredRed;
}
</style>
