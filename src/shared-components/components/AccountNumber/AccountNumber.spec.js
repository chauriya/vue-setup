import { createLocalVue, mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Vue from 'vue';

import PriAccountNumber from './AccountNumber';

const factory = (options = {}) => {
  const localVue = createLocalVue();
  localVue.use(vuetify);
  const wrapper = mount(PriAccountNumber, {
    localVue,
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Account Number Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('accepts up to 19 digits', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        country: 'CA'
      }
    });

    wrapper.setProps({ value: '1'.repeat(50) });
    await Vue.nextTick();

    expect(textField.vm.value.length <= 19).toBe(true);
  });

  it("Canada Account Number can't start with 9", async () => {
    const { textField } = factory({
      propsData: {
        country: 'CA',
        value: '94943949494943'
      }
    });

    expect(textField.vm.valid).toBe(false);
  });

  it('no sequential numbers', async () => {
    const { wrapper, textField } = factory();

    wrapper.setProps({
      value: '1234567890'
    });
    await Vue.nextTick();
    expect(textField.vm.valid).toBe(false);

    wrapper.setProps({
      value: '0987654321'
    });
    await Vue.nextTick();
    expect(textField.vm.valid).toBe(false);

    wrapper.setProps({
      value: '83480000000000000021'
    });
    await Vue.nextTick();
    expect(textField.vm.valid).toBe(false);

    wrapper.setProps({
      value: '12480000034545'
    });
    await Vue.nextTick();
    expect(textField.vm.valid).toBe(true);
  });
});
