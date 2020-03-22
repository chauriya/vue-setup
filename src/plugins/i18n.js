import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'USD'
    }
  }
};

// function loadLocaleMessages() {
//   const locales = require.context(
//     '@/locales',
//     true,
//     /[A-Za-z0-9-_,\s]+\.json$/i
//   );
//   const messages = {};
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i);
//     if (matched && matched.length > 1) {
//       const locale = matched[1];
//       messages[locale] = locales(key);
//     }
//   });
//   return messages;
// }

function loadLocaleMessages() {
  return {
    'en-US': require('@/locales/en-US')
  };
}

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en-US',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en-US',
  silentFallbackWarn: true,
  messages: loadLocaleMessages(),
  numberFormats
});

export default i18n;

const loadedLanguages = ['en-US']; // our default language that is preloaded

function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

export function loadLanguageAsync(lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language hasn't been loaded yet
  return import(`@/locales/${lang}.json`).then(messages => {
    i18n.setLocaleMessage(lang, messages.default);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
  });
}
