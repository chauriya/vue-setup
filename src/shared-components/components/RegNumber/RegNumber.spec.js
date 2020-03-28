import { shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';
import PolicyNumber from './PolicyNumber';

const factory = (options = {}) => {
  const wrapper = shallowMount(PolicyNumber, {
    vuetify: new vuetify({}),
    ...options
  });

  return {
    wrapper
  };
};

describe('Policy Number Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
