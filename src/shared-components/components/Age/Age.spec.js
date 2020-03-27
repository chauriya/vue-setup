import { createLocalVue, mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Vue from 'vue';

import PriAge from './Age';

const factory = (options = {}) => {
  const localVue = createLocalVue();
  localVue.use(vuetify);
  const wrapper = mount(PriAge, {
    localVue,
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Age Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Age should be between 0 and 130', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        value: -15
      }
    });

    expect(textField.vm.valid).toBe(false);

    wrapper.setProps({
      value: 150
    });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(false);

    wrapper.setProps({
      value: 15
    });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(true);
  });
});
