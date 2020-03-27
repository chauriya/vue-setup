import { shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Phone from './Phone';

const factory = (options = {}) => {
  const wrapper = shallowMount(Phone, {
    vuetify: new vuetify({}),
    ...options
  });

  return {
    wrapper
  };
};

describe('Phone Number Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('validate format', async () => {
    expect(Phone.methods.isValidNumber(`(786) 888-8888`)).toBe(true);
    expect(Phone.methods.isValidNumber(`(786) 888`)).toBe(false);
  });
});
