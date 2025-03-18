import { createRouter, createWebHistory } from 'vue-router';

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
    component: Dashboard, // Componente do dashboard
  },
  {
    path: '/perfis',
    name: 'Perfis',
    component: Perfis, // Componente de visualização dos perfis
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios, // Componente de visualização dos usuários
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;