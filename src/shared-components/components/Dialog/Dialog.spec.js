import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';

import Dialog from './Dialog';

const factory = (options = {}) => {
  const wrapper = mount(Dialog, {
    vuetify: new vuetify({}),
    ...options
  });

  return {
    wrapper
  };
};

describe('Dialog Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('emit proper values', async () => {
    const { wrapper } = factory();

    wrapper.vm.close();

    expect(Object.keys(wrapper.emitted())).toContain('input');
    expect(Object.keys(wrapper.emitted())).toContain('close');
  });
});
