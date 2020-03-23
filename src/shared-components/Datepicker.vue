<template>
  <div>
    <v-text-field
      :disabled="co_isDisabled"
      :max-length="maxLength"
      :maxlength="maxLength"
      :rules="validations"
      :value="formattedValue"
      @blur="isFocused = false"
      @click:append="openDialog"
      @focus="isFocused = true"
      @input="onInput"
      @keypress="onlyNumericPlus($event, '/')"
      @paste.prevent
      append-icon="mdi-calendar"
      ref="iconTarget"
    >
      <template v-slot:label>
        <span
          :class="{
            'pri-required': isRequired,
            'pri-required-red': !co_isDisabled
          }"
          >{{ co_label }}</span
        >
      </template>
      <template v-if="info" v-slot:prepend-inner>
        <v-icon :disabled="co_isDisabled" @click.stop="onInfoClick" color="blue"
          >mdi-information</v-icon
        >
      </template>
    </v-text-field>
    <v-dialog ref="dialog" v-model="dialog" width="290px">
      <v-date-picker
        :disabled="co_isDisabled"
        :max="co_max"
        :min="co_min"
        :type="this.format === 'month' ? 'month' : 'date'"
        :value="co_value"
        @input="onDatepickerInput"
        ref="picker"
      />
    </v-dialog>
    <PriDialog :content="co_info_content" v-model="open" />
  </div>
</template>

<script>
import { compareAsc, isEqual, startOfDay, subYears } from 'date-fns';
import {
  ComponentDefaultsMixin,
  DateHelpersMixin,
  IconMixin,
  KeypressMixin,
  MaskMixin,
  ValidationsMixin
} from './mixins';
import PriDialog from './components/Dialog/Dialog';
import _ from 'lodash';

export default {
  name: 'pri-datepicker',
  components: { PriDialog },
  data: () => ({
    dialog: false,
    maxLength: 10,
    isFocused: false,
    invalidTextOne: 'COMP_INVALID_DATE',
    invalidTextTwo: 'COMP_INVALID_DATE_RANGE',
    tValue: '',
    formattedValue: ''
  }),
  mixins: [
    ComponentDefaultsMixin,
    DateHelpersMixin,
    IconMixin,
    KeypressMixin,
    MaskMixin,
    ValidationsMixin
  ],
  props: {
    value: String,
    label: String,
    max: String,
    min: String,
    format: {
      type: String,
      default: 'date'
    }
  },
  computed: {
    co_label() {
      if (this.label) return this.$t(this.label);
      let toTranslate = '';
      if (this.format === 'dob') {
        toTranslate = 'COMP_DATE_OF_BIRTH';
      } else {
        toTranslate = 'COMP_DATEPICKER';
      }
      return this.$t(toTranslate);
    },
    co_value() {
      if (this.isMonthSlashYear(this.formattedValue)) {
        return this.formattedValue
          .split('/')
          .reverse()
          .join('-');
      }
      return this.isValidDate(this.formattedValue)
        ? this.format === 'month'
          ? this.formatYYYYMM(this.formattedValue)
          : this.formatYYYYMMDD(this.formattedValue)
        : null;
    },
    co_max() {
      if (this.format === 'dob') return this.formatYYYYMMDD(new Date());
      return this.max ? this.formatYYYYMMDD(this.max) : null;
    },
    co_min() {
      if (this.format === 'dob')
        return this.formatYYYYMMDD(subYears(new Date(), 100));
      return this.min ? this.formatYYYYMMDD(this.min) : null;
    },

    validations() {
      let datepickerValidation = [
        str => {
          if (!str) return true;
          let valid = this.isValidDate(str);
          return valid || this.co_invalidTextOne;
        },
        str => {
          if (!str) return true;
          if (this.format === 'dob') {
            const valid = this.isDOBInRange(str);
            const today = new Date();
            let centuryAgo = subYears(today, 100);

            return (
              valid ||
              `${this.co_invalidTextTwo} - (${this.formatMMDDYYYY(
                centuryAgo
              )} - ${this.formatMMDDYYYY(today)})`
            );
          } else {
            return true;
          }
        }
      ];

      return this.required
        ? [this.isRequiredValidation, ...datepickerValidation]
        : datepickerValidation;
    }
  },
  watch: {
    value() {
      this.updateValueWithFormatting();
    }
  },
  created() {
    // Need to do this so the pages can grab the current value and update the model
    this.updateValueWithFormatting();
  },
  methods: {
    updateValueWithFormatting() {
      if (this.value) {
        this.formattedValue = _.clone(this.value);
        if (this.value.indexOf('T') > -1) {
          this.tValue = this.value.substring(
            this.value.indexOf('T'),
            this.value.length
          );
          this.formattedValue = this.formattedValue.substring(
            0,
            this.value.indexOf('T')
          );
        }
        if (this.format === 'month') {
          this.formattedValue = this.formatMMYYYY(this.formattedValue);
        } else {
          this.formattedValue = this.formatMMDDYYYY(this.formattedValue);
        }
      }
    },
    openDialog() {
      if (this.format === 'dob' && !this.formattedValue)
        setTimeout(() => (this.$refs['picker'].activePicker = 'YEAR'));
      this.dialog = true;
    },
    onInput(val) {
      // have to check lengths to avoid an issue with deleting inline
      let validLength = false;
      let maskedValue = val;
      if (this.format === 'month') {
        maskedValue = this.formatWithMask(val, '##/####');
        let [month, year] = maskedValue.split('/');
        validLength = month && month.length === 2 && year && year.length === 4;
      } else {
        maskedValue = this.formatWithMask(val, '##/##/####');
        let [month, day, year] = maskedValue.split('/');
        validLength =
          month &&
          month.length === 2 &&
          day &&
          day.length === 2 &&
          year &&
          year.length === 4;
      }
      if (validLength) {
        if (this.format === 'month') {
          this.formattedValue = maskedValue;
          if (this.isValidDate(this.formattedValue)) {
            this.$emit(
              'dateChanged',
              this.formatYYYYMM(this.formattedValue) + this.tValue
            );
          }
        } else {
          this.formattedValue = maskedValue;
          if (this.isValidDate(this.formattedValue)) {
            this.$emit(
              'dateChanged',
              this.formatYYYYMMDD(this.formattedValue) + this.tValue
            );
          }
        }
        this.$emit('input', this.formattedValue);
      } else {
        if (maskedValue.charAt(maskedValue.length - 1) === '/') {
          this.formattedValue = maskedValue;
          this.$emit('input', this.formattedValue);
        } else {
          this.$emit('input', val);
        }
      }
    },
    onDatepickerInput(val) {
      this.dialog = false;
      if (this.isYearDashMonth(val)) {
        this.formattedValue = this.formatMMYYYY(val);
        this.$emit(
          'dateChanged',
          this.formatYYYYMM(this.formattedValue) + this.tValue
        );
      } else {
        this.formattedValue = this.formatMMDDYYYY(val);
        this.$emit(
          'dateChanged',
          this.formatYYYYMMDD(this.formattedValue) + this.tValue
        );
      }
      this.$emit('input', this.formattedValue);
    },
    isDOBInRange(str) {
      if (!this.isValidDate(this.formattedValue)) return false;

      const today = new Date();
      const centuryAgo = startOfDay(subYears(today, 100));
      const date = new Date(str);

      const dateOnTheMiddle = [today, centuryAgo, date].sort(compareAsc)[1];

      return isEqual(date, dateOnTheMiddle);
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
