import Vue from 'vue';
import Vuex from 'vuex';
import ui from './ui';
import formData from './formData';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { ui, formData }
});

export default store;
