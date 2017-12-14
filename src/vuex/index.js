/**
 *  2017/12/11  lize
 */
import Vue from 'vue'

import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

