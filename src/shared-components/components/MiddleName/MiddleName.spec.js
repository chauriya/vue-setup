import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Vue from 'vue';
import MiddleName from './MiddleName';

const factory = (options = {}) => {
  const wrapper = mount(MiddleName, {
    vuetify: new vuetify({}),
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Middle Name Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('validate characters allowed', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        value: 'Doe'
      }
    });

    expect(textField.vm.valid).toBe(true);

    wrapper.setProps({
      value: '!Doe*'
    });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(false);
  });
});
