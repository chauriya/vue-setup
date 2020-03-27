import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Gender from './Gender';

const factory = (options = {}) => {
  const wrapper = mount(Gender, {
    vuetify: new vuetify({}),
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Gender Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
