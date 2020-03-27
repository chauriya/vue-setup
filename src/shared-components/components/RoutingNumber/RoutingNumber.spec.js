import { shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Phone from './RoutingNumber';
import Vue from 'vue';

const factory = (options = {}) => {
  const wrapper = shallowMount(Phone, {
    vuetify: new vuetify({}),
    ...options
  });

  return {
    wrapper
  };
};

describe('Routing Number Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('test emit values', async () => {
    const $emit = jest.fn();
    const { wrapper } = factory({
      mocks: {
        $emit
      }
    });

    const val = '12345678';
    wrapper.vm.onInput(val);
    expect($emit).toHaveBeenCalledWith('input', val);

    wrapper.setProps({
      country: 'CA'
    });
    await Vue.nextTick();

    wrapper.vm.onInput(val);
    expect($emit).toHaveBeenCalledWith('input', '12345-678');
  });
});
