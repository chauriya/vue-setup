import { shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Ssn from './SSN';
import Vue from 'vue';

const factory = (options = {}) => {
  const wrapper = shallowMount(Ssn, {
    vuetify: new vuetify({}),
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Ssn Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('validate getMask', async () => {
    const { wrapper } = factory();
    expect(wrapper.vm.getMask()).toBe(`###-##-####`);
    wrapper.setProps({
      format: 'sin'
    });
    await Vue.nextTick();
    expect(wrapper.vm.getMask()).toBe(`###-###-###`);
  });

  it('validate ssn and sin', async () => {
    const { wrapper } = factory();

    expect(wrapper.vm.isValidSSN('345-67-5432')).toBe(true);
    expect(wrapper.vm.isValidSSN('078-05-1120')).toBe(false);
    expect(wrapper.vm.isValidSIN('567-876-560')).toBe(true);
    expect(wrapper.vm.isValidSIN('567-876-565')).toBe(false);
  });

  it('test emit', async () => {
    const $emit = jest.fn();
    const { wrapper } = factory({
      mocks: { $emit }
    });
    const input = '345675432';
    wrapper.vm.onInput(input);
    expect($emit).toBeCalledWith('input', '345-67-5432');
    wrapper.setProps({
      format: 'sin'
    });
    await Vue.nextTick();
    wrapper.vm.onInput(input);
    expect($emit).toBeCalledWith('input', '345-675-432');
  });
});
