import { StoreOptions } from 'vuex'
interface AuthState {
  isLoggedIn: boolean,
}

const authStore: StoreOptions<AuthState> = {
  state: {
    isLoggedIn: false,
  },
  mutations: {
    signIn (state) {
      console.log('state: ', state);
      state.isLoggedIn = true
    },
    signOut (state) {
      state.isLoggedIn = false
    },
  },
}

export default authStore
