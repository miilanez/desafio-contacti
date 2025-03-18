import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Login.vue'; 
import Dashboard from '@/views/Dashboard.vue';

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
    component: Dashboard, // Componente do dashboard
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;