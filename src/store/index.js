import Vue from 'vue'
import Vuex from 'vuex'
import Home from './home'
import Common from './common'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Home: {
      ...Home
    },
    Common: {
      ...Common
    },
  }
});

export default store
