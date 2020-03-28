import { createLocalVue, mount } from '@vue/test-utils';
import vuetify from 'vuetify';

import PriAge from './Boolean';

const factory = (options = {}) => {
  const localVue = createLocalVue();
  localVue.use(vuetify);
  const wrapper = mount(PriAge, {
    localVue,
    ...options
  });

  return {
    wrapper
  };
};

describe('Boolean Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('emit boolean on buttons click', () => {
    const { wrapper } = factory();
    const buttons = wrapper.findAll({
      name: 'v-btn'
    });
    buttons.trigger('click');
    const inputEmitted = wrapper.emitted()['input'];
    expect(typeof inputEmitted[0][0]).toBe('boolean');
    expect(typeof inputEmitted[1][0]).toBe('boolean');
  });
});
