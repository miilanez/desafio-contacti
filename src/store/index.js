import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, credentials) {

      if (credentials.email === 'admin@convicti.com' && credentials.password === '12345678') {
        commit('setAuthentication', true);
        commit('setUser', { email: credentials.email, role: 'admin' }); 
        return true;
      }
      return false;
    },
    logout({ commit }) {
      commit('setAuthentication', false);
      commit('setUser', null);
    },
  },
});