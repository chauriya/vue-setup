import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Title from './Title';
import Vue from 'vue';

const factory = (options = {}) => {
  const wrapper = mount(Title, {
    vuetify: new vuetify({}),
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Title Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('test validation', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        value: 'SDSD'
      }
    });
    expect(textField.vm.valid).toBe(true);

    wrapper.setProps({
      value: 'A'
    });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(false);
  });
});
