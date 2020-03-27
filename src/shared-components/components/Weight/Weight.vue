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
      :value="value"
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
  name: 'pri-weight',
  components: { PriDialog },
  mixins: [
    ComponentDefaultsMixin,
    IconMixin,
    KeypressMixin,
    MaskMixin,
    ValidationsMixin
  ],
  data: () => ({
    componentName: 'COMP_WEIGHT',
    invalidTextOne: 'COMP_WEIGHT_INVALID',
    maxLength: 3,
    thumbValue: null,
    min: 3,
    max: 389
  }),
  props: {
    slider: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    validations() {
      const weightValidations = [
        str => {
          if (!str) return true;
          return (
            this.isValidWeight(str) ||
            `${this.co_invalidTextOne} - (${this.min} lb - ${this.max} lb)`
          );
        }
      ];
      return this.isRequired
        ? [this.isRequiredValidation, ...weightValidations]
        : weightValidations;
    }
  },
  watch: {
    value(val) {
      this.thumbValue = val;
    }
  },
  methods: {
    onSliderChange(val) {
      this.$emit('input', val);
    },
    onSliderInput(val) {
      this.thumbValue = val;
    },
    onInput(val) {
      this.$emit('input', Number(val));
    },
    isValidWeight(val) {
      return val && val >= this.min && val <= this.max;
    },
    decrement() {
      let v = this.value;
      if (!this.isValidWeight(v)) v = null;

      if (v === null) v = this.min;
      if (v === this.min) v = this.max + 1;

      this.$emit('input', v - 1);
    },
    increment() {
      let v = this.value;
      if (!this.isValidWeight(v)) v = null;

      if (v === null) v = this.max;
      if (v === this.max) v = this.min - 1;

      this.$emit('input', v + 1);
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
