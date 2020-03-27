<template>
  <div>
    <v-text-field
      :append-icon="co_icon"
      :disabled="co_isDisabled"
      :maxlength="maxLength"
      :rules="validations"
      :type="type"
      :value="slicedValueByMaxLength"
      :error="$attrs.error"
      :error-messages="$attrs['error-messages']"
      @blur="isFocused = false"
      @click:append="toggleType"
      @focus="isFocused = true"
      @input="onInput"
      @keypress="onlyNumericPlus($event, '-')"
      @paste.prevent
      ref="iconTarget"
      label=""
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
        <v-icon
          :color="co_checkMarkAlertIconsColor"
          :disabled="co_isDisabled"
          @click="toggleType"
        >
          {{ co_validationIcon }}
        </v-icon>
        <v-icon
          :color="co_actionableIcons"
          :disabled="co_isDisabled"
          @click="toggleType"
          style="cursor: pointer"
        >
          {{ co_icon }}
        </v-icon>
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
} from '../../mixins';
import PriDialog from '../../components/Dialog/Dialog';

export default {
  name: 'pri-ssn',
  components: { PriDialog },
  props: {
    format: {
      type: String,
      default: 'ssn'
    }
  },
  mixins: [
    ComponentDefaultsMixin,
    IconMixin,
    KeypressMixin,
    MaskMixin,
    ValidationsMixin
  ],
  data: () => ({
    maxLength: 11,
    type: 'text',
    isFocused: false,
    invalidTextOne: 'COMP_SSN_INVALID',
    invalidTextTwo: 'COMP_SIN_INVALID'
  }),
  methods: {
    toggleType() {
      if (this.type === 'text') {
        this.type = 'password';
      } else {
        this.type = 'text';
      }
    },
    onInput(val) {
      this.$emit('input', this.formatWithMask(val, this.getMask()));
    },
    getMask() {
      return this.format === 'ssn' ? '###-##-####' : '###-###-###';
    },
    isValidSSN(str) {
      // Regex https://regex101.com/r/fhZVIR/1
      const regex = /^(?!219-09-9999|078-05-1120|123-45-6789)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/gi;
      return regex.test(str);
    },
    isValidSIN(str) {
      return /\d{3}-\d{3}-\d{3}/.test(str) && this.luhnCheck(str);
    }
  },
  computed: {
    co_icon() {
      return this.type === 'text' ? 'mdi-eye-off' : 'mdi-eye';
    },
    co_componentName() {
      return this.format === 'ssn'
        ? this.$t('L_PRI_SSN')
        : this.$t('L_PRI_SIN');
    },
    getInvalidText() {
      return this.format === 'ssn'
        ? this.co_invalidTextOne
        : this.co_invalidTextTwo;
    },
    validations() {
      const ssn = [
        str => {
          if (!str) return true;

          return this.isValidSSN(str) || this.getInvalidText;
        }
      ];

      const sin = [
        str => {
          if (!str) return true;

          return this.isValidSIN(str) || this.getInvalidText;
        }
      ];

      const ssnValidations = this.format === 'ssn' ? ssn : sin;

      return this.isRequired
        ? [this.isRequiredValidation, ...ssnValidations]
        : ssnValidations;
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
