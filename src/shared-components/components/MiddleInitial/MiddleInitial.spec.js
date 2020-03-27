import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Vue from 'vue';
import MiddleInitial from './MiddleInitial';

const factory = (options = {}) => {
  const wrapper = mount(MiddleInitial, {
    vuetify: new vuetify({}),
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Middle Initial Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('validate characters allowed', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        value: 'D'
      }
    });

    expect(textField.vm.valid).toBe(true);

    wrapper.setProps({
      value: '5'
    });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(false);
  });
});
