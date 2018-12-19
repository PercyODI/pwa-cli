import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    increment(currState) {
      currState.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
  actions: {

  },
  /* eslint-enable no-param-reassign */
});
