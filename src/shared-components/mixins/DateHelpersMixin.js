import { format } from 'date-fns';

export const DateHelpersMixin = {
  methods: {
    isValidDate(str) {
      if (this.isMonthSlashYear(str)) return true;
      let valid = false;
      try {
        let d = new Date(str);
        let formatted = this.formatMMDDYYYY(d);
        if (str === formatted) {
          valid = true;
        }
      } catch (e) {
        // Parsing of date failed.
      }
      return valid;
    },
    formatMMDDYYYY(str) {
      return this.formatDate('MM/dd/yyyy', str);
    },
    isMonthSlashYear(str) {
      return /^(0[1-9]|1[0-2])\/[12]\d{3}$/.test(str);
    },
    isYearDashMonth(str) {
      return /^[12]\d{3}-(0[1-9]|1[0-2])$/.test(str);
    },
    formatYYYYMMDD(str) {
      return this.formatDate('yyyy-MM-dd', str);
    },
    formatMMYYYY(str) {
      return this.formatDate('MM/yyyy', str);
    },
    formatYYYYMM(str) {
      let [month, year] = this.isYearDashMonth(str)
        ? str.split('-')
        : str.split('/');
      return year + '-' + month;
    },
    formatDate(f, date = new Date()) {
      let dateIsDate = date instanceof Date;
      // Solves a strange behavior, new Date('2000-01-01') is different value than new Date('01/01/2000')
      if (!dateIsDate && /\d{4}-\d{2}-\d{2}/.test(date)) {
        const [year, month, day] = date.split('-');
        date = [month, day, year].join('/');
      }
      let d;
      if (this.isYearDashMonth(date)) {
        d = new Date(date + '-05');
      } else {
        d = new Date(date);
      }
      return format(d, f);
    }
  }
};
