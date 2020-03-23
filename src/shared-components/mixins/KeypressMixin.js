export const KeypressMixin = {
  methods: {
    enableSet(ev, charList) {
      if (!charList.includes(ev.key)) return ev.preventDefault();
    },
    disableSet(ev, charList) {
      if (charList.includes(ev.key)) return ev.preventDefault();
    },
    onlyAlpha(ev) {
      if (!/[a-zA-Z]/.test(ev.key)) return ev.preventDefault();
    },
    noAlpha(ev) {
      if (/[a-zA-Z]/.test(ev.key)) return ev.preventDefault();
    },
    onlyNumeric(ev) {
      if (!/[0-9]/.test(ev.key)) return ev.preventDefault();
    },
    noNumeric(ev) {
      if (/[0-9]/.test(ev.key)) return ev.preventDefault();
    },
    onlyAlphaNumeric(ev) {
      if (!/[a-zA-Z0-9]/.test(ev.key)) return ev.preventDefault();
    },
    noAlphaNumeric(ev) {
      if (/[a-zA-Z0-9]/.test(ev.key)) return ev.preventDefault();
    },
    onlyAlphaPlus(ev, charList) {
      if (charList && typeof charList === 'string') {
        const regex = new RegExp(`[a-zA-Z${charList}]`);
        if (!regex.test(ev.key)) return ev.preventDefault();
      }
    },
    onlyNumericPlus(ev, charList) {
      if (charList && typeof charList === 'string') {
        const regex = new RegExp(`[0-9${charList}]`);
        if (!regex.test(ev.key)) return ev.preventDefault();
      }
    },
    onlyAlphaNumericPlus(ev, charList) {
      if (charList && typeof charList === 'string') {
        const regex = new RegExp(`[a-zA-Z0-9${charList}]`);
        if (!regex.test(ev.key)) return ev.preventDefault();
      }
    }
  }
};
