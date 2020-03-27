import { createLocalVue, mount } from '@vue/test-utils';
import vuetify from 'vuetify';

import Message from './Message';

const factory = (options = {}) => {
  const localVue = createLocalVue();
  localVue.use(vuetify);
  const wrapper = mount(Message, {
    localVue,
    ...options
  });

  const alert = wrapper.find({ name: 'v-alert' });
  return {
    alert,
    wrapper
  };
};

describe('Message Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  /*it('Prevents non accepted chars', async () => {
    const { alert } = factory();
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
  });*/
});
