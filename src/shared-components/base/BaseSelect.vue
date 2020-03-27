<template>
  <div>
    <v-select
      :items="co_items"
      v-bind="mixedProps"
      v-if="type === 'select'"
      v-on="mixedListeners"
    >
      <template v-slot:label>
        <span
          :class="{
            'pri-required': isRequired,
            'pri-required-red': !co_isDisabled
          }"
          v-html="co_componentName"
        />
      </template>
      <template v-if="info" v-slot:prepend-inner>
        <v-icon :disabled="co_isDisabled" @click.stop="onInfoClick" color="blue"
          >mdi-information</v-icon
        >
      </template>
    </v-select>

    <v-radio-group
      v-if="type === 'radio'"
      @change="onRadioChange"
      class="pri-radio-group"
      v-bind="mixedProps"
      v-on="mixedListeners"
    >
      <div
        :class="{ 'error--text': !valid && shouldShowIcon && !co_isDisabled }"
        class="v-label theme--light d-flex justify-space-between"
        v-if="!noRadioLabel"
      >
        <div>
          <v-icon
            :disabled="co_isDisabled"
            @click.stop="onInfoClick"
            color="blue"
            v-if="info"
            >mdi-information</v-icon
          >
          <span
            :class="{
              'pri-required': isRequired,
              'pri-required-red': !co_isDisabled
            }"
            v-html="co_componentName"
          />
        </div>
        <v-icon
          :color="co_checkMarkAlertIconsColor"
          :disabled="co_isDisabled"
          v-if="shouldShowIcon"
          >{{ co_validationIcon }}</v-icon
        >
      </div>
      <v-radio
        :key="index"
        :label="item.text"
        :value="item.value"
        color="primary"
        @blur="onRadioBlur"
        v-for="(item, index) in co_items"
      />
    </v-radio-group>

    <v-autocomplete
      v-if="type === 'autocomplete'"
      :items="co_items"
      v-bind="mixedProps"
      v-on="mixedListeners"
    >
      <template v-slot:label>
        <span
          :class="{
            'pri-required': isRequired,
            'pri-required-red': !co_isDisabled
          }"
          v-html="co_componentName"
        />
      </template>
      <template v-if="info" v-slot:prepend-inner>
        <v-icon :disabled="co_isDisabled" @click.stop="onInfoClick" color="blue"
          >mdi-information</v-icon
        >
      </template>
    </v-autocomplete>
    <PriDialog :content="co_info_content" v-model="open" />
  </div>
</template>

<script>
import { ComponentDefaultsMixin, IconMixin, ValidationsMixin } from '../mixins';
import PriDialog from '../components/Dialog/Dialog';
export default {
  name: 'pri-base-select',
  components: { PriDialog },
  props: {
    type: {
      default: 'select'
    },
    noRadioLabel: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mixins: [ComponentDefaultsMixin, ValidationsMixin, IconMixin],
  data: () => ({
    componentName: 'Base Select'
  }),
  computed: {
    co_items() {
      return this.items;
    },
    extraProps: () => ({}),
    extraListeners: () => ({}),
    mixedProps() {
      const defaultProps = {
        ref: 'iconTarget',
        rules: this.validations,
        value: this.value,
        'item-text': this.$attrs['item-text'],
        'item-value': this.$attrs['item-value'],
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
        input: this.onInput
      };
      return {
        ...defaultListeners,
        ...this.extraListeners
      };
    },
    validations() {
      return this.isRequired ? [this.isRequiredValidation] : [];
    }
  },
  methods: {
    onRadioBlur() {
      this.$refs['iconTarget'].hasFocused = true;
    },
    onRadioChange(v) {
      this.$emit('input', v);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/styles';
.pri-required:after {
  @include required;
}
.pri-required.pri-required-red:after {
  @include requiredRed;
}
.pri-radio-group ::v-deep .v-input__control {
  width: 100% !important;
}
</style>
