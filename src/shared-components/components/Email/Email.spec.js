import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Vue from 'vue';
import Email from './Email';

const factory = (options = {}) => {
  const wrapper = mount(Email, {
    vuetify: new vuetify({}),
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Email Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('validate email formats', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        value: 'fake.user@primerica.com'
      }
    });

    expect(textField.vm.valid).toBe(true);

    wrapper.setProps({
      value: 'fake.user@primerica'
    });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(false);
  });
});
