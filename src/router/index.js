import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import Login from '@/views/Login.vue'; 
import Dashboard from '@/views/Dashboard.vue';
import Usuarios from '@/views/Usuarios.vue';
import Perfis from '@/views/Perfis.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redireciona para o login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, // Componente da tela de login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/perfis',
    name: 'Perfis',
    component: Perfis,
    meta: { requiresAuth: true },
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios, 
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protegendo rotas com o beforeEach

router.beforeEach((to, from, next) => {
  const {isAuthenticated} = store.state;

    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login');
    } else {
    next();
  }
});

export default router;