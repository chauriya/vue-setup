import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';

import DriverLicense from './DriverLicense';

const factory = (options = {}) => {
  const wrapper = mount(DriverLicense, {
    vuetify: new vuetify({}),
    ...options
  });

  return {
    wrapper
  };
};

describe('Driver License Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
