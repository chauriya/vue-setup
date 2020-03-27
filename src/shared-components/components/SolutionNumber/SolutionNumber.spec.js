import { shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';
import SolutionNumber from './SolutionNumber';

const factory = (options = {}) => {
  const wrapper = shallowMount(SolutionNumber, {
    vuetify: new vuetify({}),
    ...options
  });

  return {
    wrapper
  };
};

describe('Solution Number Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
