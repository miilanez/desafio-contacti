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

      const users = [
        { email: 'admin@convicti.com', password: '12345678', role: 'admin' },
        { email: 'dev@convicti.com', password: '12345678', role: 'desenvolvedor' },
        { email: 'rh@convicti.com', password: '12345678', role: 'recursos-humanos' },
      ];

      const user = users.find(
        (u) => u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        commit('setAuthentication', true);
        commit('setUser', user);
        return true;
      }
      return false;
    },
    logout({ commit }) {
      commit('setAuthentication', false);
      commit('setUser', null);
    },
  },
  getters: {
    userRole: (state) => (state.user ? state.user.role : null),
  }
});