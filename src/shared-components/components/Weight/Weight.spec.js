import { shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Weight from './Weight';

const factory = (options = {}) => {
  const wrapper = shallowMount(Weight, {
    vuetify: new vuetify({}),

    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Weight Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('test methods', () => {
    const $emit = jest.fn();
    const { wrapper } = factory({
      mocks: { $emit }
    });

    expect(wrapper.vm.isValidWeight(500)).toBe(false);
    expect(wrapper.vm.isValidWeight(1)).toBe(false);
    expect(wrapper.vm.isValidWeight(199)).toBe(true);

    wrapper.vm.onSliderChange(50);
    expect($emit).toHaveBeenCalledWith('input', 50);

    wrapper.vm.onSliderInput(20);
    expect(wrapper.vm.thumbValue).toBe(20);

    wrapper.vm.onInput('20');
    expect($emit).toHaveBeenCalledWith('input', 20);

    wrapper.vm.decrement();
    expect($emit).toHaveBeenCalledWith('input', wrapper.vm.max);

    wrapper.vm.increment();
    expect($emit).toHaveBeenCalledWith('input', wrapper.vm.min);
  });
});
