import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import Login from '@/views/Login.vue'; 
import Dashboard from '@/views/Dashboard.vue';
import Configuracoes from '@/views/Configuracoes.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, 
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/configuracoes',
    name: 'Configurações',
    component: Configuracoes,
    meta: { requiresAuth: true, requiresAdmin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protegendo rotas com o beforeEach

router.beforeEach((to, from, next) => {
  const {isAuthenticated} = store.state;
  const {userRole} = store.getters;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresAdmin && userRole !== 'admin') {
    next('/dashboard'); 
  } else if (to.meta.requiresDesenvolvedor && userRole !== 'desenvolvedor') {
    next('/dashboard'); 
  } else if (to.meta.requiresRecursosHumanos && userRole !== 'recursos-humanos') {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;