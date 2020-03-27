import { mount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Vue from 'vue';
import { format, subYears } from 'date-fns';

import Datepicker from './Datepicker';

const factory = (options = {}) => {
  const wrapper = mount(Datepicker, {
    vuetify: new vuetify({}),
    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Datepicker Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('validate manually input values', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        value: '02/30/2000'
      }
    });

    expect(textField.vm.valid).toBe(false);

    wrapper.setProps({ value: '02/28/2000' });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(true);
  });

  it('validate manually input values for dob', async () => {
    const { wrapper, textField } = factory({
      propsData: {
        format: 'dob',
        value: '01/01/1900'
      }
    });

    expect(textField.vm.valid).toBe(false);

    wrapper.setProps({ value: '01/01/2000' });
    await Vue.nextTick();

    expect(textField.vm.valid).toBe(true);
  });

  it('openDialog method', async () => {
    const { wrapper } = factory();
    wrapper.vm.openDialog();
    expect(wrapper.vm.dialog).toBe(true);
  });

  it('co_label', async () => {
    const localThis = { format: 'date' };
    expect(Datepicker.computed.co_label.call(localThis)).toBe('Datepicker');

    const localThis2 = { format: 'dob' };
    expect(Datepicker.computed.co_label.call(localThis2)).toBe('Date of Birth');
  });

  it('co_value', async () => {
    const { wrapper } = factory({
      propsData: {
        value: '01/01/2000'
      }
    });

    expect(wrapper.vm.co_value).toBe('2000-01-01');
  });

  it('co_max', async () => {
    const { wrapper } = factory({
      propsData: { format: 'date', max: '01/01/2000' }
    });

    expect(wrapper.vm.co_max).toBe('2000-01-01');

    const today = new Date();

    wrapper.setProps({ format: 'dob', max: '01/01/2000' });
    await Vue.nextTick();

    expect(wrapper.vm.co_max).toBe(format(today, 'yyyy-MM-dd'));
  });

  it('co_min', async () => {
    const { wrapper } = factory({
      propsData: { format: 'date', min: '01/01/2000' }
    });

    expect(wrapper.vm.co_min).toBe('2000-01-01');

    const centuryAgo = subYears(new Date(), 100);
    wrapper.setProps({ format: 'dob' });
    await Vue.nextTick();
    expect(wrapper.vm.co_min).toBe(format(centuryAgo, 'yyyy-MM-dd'));
  });
});
