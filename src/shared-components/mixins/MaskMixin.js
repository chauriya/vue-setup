export const MaskMixin = {
  methods: {
    formatWithMask(str, maskString) {
      const numbers = this.getNumbers(str);

      let partialAsYouTypeMaskLength = this.findLocationsOnString(
        maskString,
        '#'
      )[numbers.length];

      const partialMask = maskString.slice(0, partialAsYouTypeMaskLength);

      let i = 0;
      return partialMask.replace(/#/g, () => {
        return numbers[i++];
      });
    },

    getNumbers(str) {
      if (!str) return '';
      const filtered = str.match(/\d+/gi);
      if (!filtered) return '';
      return filtered.join('');
    },

    findLocationsOnString(str, toFind) {
      const a = [];
      let i = -1;
      while ((i = str.indexOf(toFind, i + 1)) >= 0) a.push(i);
      return a;
    },

    luhnCheck(value) {
      value = this.getNumbers(value);
      let nCheck = 0;
      let bEven = false;
      for (let n = value.length - 1; n >= 0; n--) {
        let cDigit = value.charAt(n),
          nDigit = parseInt(cDigit, 10);

        if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

        nCheck += nDigit;
        bEven = !bEven;
      }

      return nCheck % 10 === 0;
    }
  }
};
