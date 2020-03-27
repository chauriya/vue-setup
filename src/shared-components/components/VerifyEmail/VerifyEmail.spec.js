import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Vue from 'vue';
import VerifyEmail from './VerifyEmail';

const factory = (options = {}) => {
  const wrapper = mount(VerifyEmail, {
    vuetify: new vuetify({}),
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Verify Email Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory({ propsData: { email: '' } });
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('validates re-entered email', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        email: 'fake.user@primerica.com',
        value: 'fake.user@primerica.com'
      }
    });

    expect(textField.vm.valid).toBe(true);

    wrapper.setProps({
      email: 'fake.user@primerica.com',
      value: 'fake.user@primrica.com'
    });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(false);
  });
});
