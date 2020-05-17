import Vue from 'vue'
import Vuex from '@/plugins/vuex'
import authStore from './internal/stores/auth.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: {
      namespaced: true,
      ...authStore,
    }
  }
})
