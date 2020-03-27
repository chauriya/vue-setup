import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import State from './State';

const factory = (options = {}) => {
  const wrapper = mount(State, {
    vuetify: new vuetify({}),
    ...options
  });

  return {
    wrapper
  };
};

describe('State Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
