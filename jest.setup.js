import Vue from 'vue';
import Vuetify from 'vuetify';
import VueTestUtils from '@vue/test-utils';

Vue.use(Vuetify);

// i18n unit test mocks
VueTestUtils.config.mocks.$t = key => key;
VueTestUtils.config.mocks.$n = number => number;

Vue.directive('t', {
  inserted: function(el, binding) {
    // Set the element text to the i18n key
    el.innerHTML =
      typeof binding.value === 'object' ? binding.value.path : binding.value;
  }
});
