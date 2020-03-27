import { createLocalVue, mount } from '@vue/test-utils';
import vuetify from 'vuetify';

import Currency from './Currency';

const factory = (options = {}) => {
  const localVue = createLocalVue();
  localVue.use(vuetify);
  const wrapper = mount(Currency, {
    localVue,
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Currency Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Prevents non accepted chars', async () => {
    const { textField } = factory();
    const prevented = jest.fn();
    Event.prototype.preventDefault = prevented;
    const input = textField.find('input');
    // Char '.' can only be typed once also only numbers
    [...`100.a00#Dol`].forEach(char => {
      input.trigger('keypress', {
        key: char
      });
    });

    expect(prevented).toHaveBeenCalledTimes(5);
  });

  it('Allows accepted chars', async () => {
    const { textField } = factory();
    const prevented = jest.fn();
    Event.prototype.preventDefault = prevented;
    const input = textField.find('input');

    [...`200.00`].forEach(char => {
      input.trigger('keypress', {
        key: char
      });
    });

    expect(prevented).not.toHaveBeenCalled();
  });

  it('Allows dot(.) only once', async () => {
    const { textField } = factory({
      propsData: {
        value: 100.56
      }
    });
    const prevented = jest.fn();
    Event.prototype.preventDefault = prevented;
    const input = textField.find('input');

    [...`.00`].forEach(char => {
      input.trigger('keypress', {
        key: char
      });
    });

    expect(prevented).toHaveBeenCalledTimes(1);
  });
});
