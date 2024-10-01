import Vue from 'vue';
import Vuex from 'vuex';
import Gatepass from './modules/gatepass';
import tab from './modules/tab';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Gatepass,
    tab
  }
});
