import { shallowMount } from '@vue/test-utils';
import vuetify from 'vuetify';
import Zip from './Zip';

const factory = (options = {}) => {
  const wrapper = shallowMount(Zip, {
    vuetify: new vuetify({}),

    ...options
  });

  const textField = wrapper.find({ name: 'v-text-field' });
  return {
    wrapper,
    textField
  };
};

describe('Zip Component', () => {
  it('renders as vue instance', () => {
    const { wrapper } = factory();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('test methods', () => {
    const { wrapper } = factory({
      propsData: {
        country: 'US'
      }
    });
    const $emit = jest.spyOn(wrapper.vm, '$emit');

    wrapper.vm.onInput('331351234');
    expect($emit).toHaveBeenCalledWith('input', '33135-1234');

    wrapper.setProps({
      country: 'CA'
    });

    wrapper.vm.onInput('abc123');
    expect($emit).toHaveBeenCalledWith('input', 'ABC123');

    const validUSZipcode = '33135-1234';
    const validCAZipcode = 'G1A0B1';

    expect(wrapper.vm.isValidUSZipcode(validUSZipcode)).toBe(true);
    expect(wrapper.vm.isValidUSZipcode(validCAZipcode)).toBe(false);

    expect(wrapper.vm.isValidCAZipcode(validUSZipcode)).toBe(false);
    expect(wrapper.vm.isValidCAZipcode(validCAZipcode)).toBe(true);
  });
});
