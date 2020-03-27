import { createLocalVue, mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Vue from 'vue';

import AddressLine1 from './AddressLine1';

const factory = (options = {}) => {
  const localVue = createLocalVue();
  localVue.use(vuetify);
  const wrapper = mount(AddressLine1, {
    localVue,
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Address Line 1 Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Accepts up to 50 characters', async () => {
    const { wrapper, textField } = factory();

    wrapper.setProps({
      value: 'A'.repeat(60)
    });
    await Vue.nextTick();

    expect(textField.vm.value.length <= 50).toBe(true);
  });
});
