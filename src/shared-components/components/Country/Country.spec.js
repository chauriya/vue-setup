import { createLocalVue, shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';

import Country from './Country';

const factory = (options = {}) => {
  const localVue = createLocalVue();
  localVue.use(vuetify);
  const wrapper = shallowMount(Country, {
    localVue,
    ...options
  });

  const select = wrapper.find({ name: 'v-select' });
  return {
    wrapper,
    select
  };
};

describe('Country Component', () => {
  it('renders as vue instance', async () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
