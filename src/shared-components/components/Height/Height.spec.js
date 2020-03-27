import { shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Height from './Height';

const factory = (options = {}) => {
  const wrapper = shallowMount(Height, {
    vuetify: new vuetify({}),

    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Height Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('test methods', () => {
    const $emit = jest.fn();
    const { wrapper } = factory({
      mocks: { $emit }
    });
    wrapper.vm.onSliderChange(5);
    expect($emit).toHaveBeenCalledWith('input', `0' 5"`);

    wrapper.vm.onSliderInput(20);
    expect(wrapper.vm.thumbValue).toBe(`1' 8"`);

    wrapper.vm.onInput('3');
    expect($emit).toHaveBeenCalledWith('input', `3' `);

    expect(wrapper.vm.getMask('3')).toBe(`#' #"`);
    expect(wrapper.vm.getMask(`3' 1"3`)).toBe(`#' ##"`);

    const validations = [`5' 7"`, `9' 11"`, `6' 13"`, `6'`, `3' 0"`].map(v =>
      wrapper.vm.isAValidHeight(v)
    );

    expect(validations).toEqual([true, false, false, false, true]);

    wrapper.vm.decrement();
    expect($emit).toHaveBeenCalledWith('input', `8' 11"`);

    wrapper.vm.increment();
    expect($emit).toHaveBeenCalledWith('input', `0' 1"`);

    expect(wrapper.vm.inchesToHeight(20)).toBe(`1' 8"`);
    expect(wrapper.vm.inchesToHeight(50)).toBe(`4' 2"`);

    expect(wrapper.vm.heightToInches(`1' 8"`)).toBe(20);
    expect(wrapper.vm.heightToInches(`4' 2"`)).toBe(50);
  });
});
