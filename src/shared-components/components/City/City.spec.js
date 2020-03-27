import { createLocalVue, mount } from '@vue/test-utils';
import vuetify from 'vuetify';

import City from './City';

const factory = (options = {}) => {
  const localVue = createLocalVue();
  localVue.use(vuetify);
  const wrapper = mount(City, {
    localVue,
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('City Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Prevents non accepted chars', async () => {
    const { textField } = factory();
    const prevented = jest.fn();
    Event.prototype.preventDefault = prevented;
    const input = textField.find('input');
    // Char '#' and '1' should not be accepted by the input, so
    // preventDefault should be called twice
    [...`Miami's #1`].forEach(char => {
      input.trigger('keypress', {
        key: char
      });
    });

    expect(prevented).toHaveBeenCalledTimes(2);
  });

  it('Allows accepted chars', async () => {
    const { textField } = factory();
    const prevented = jest.fn();
    Event.prototype.preventDefault = prevented;
    const input = textField.find('input');

    [...`Miami`].forEach(char => {
      input.trigger('keypress', {
        key: char
      });
    });

    expect(prevented).not.toHaveBeenCalled();
  });
});
