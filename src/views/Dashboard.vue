<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <nav>
        <router-link to="/perfis">Gerenciar Perfis</router-link>
        <router-link to="/usuarios">Gerenciar Usuários</router-link>
      </nav>
      <button @click="logout">Sair</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppDashboard',
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    padding: 20px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #cc0000;
  }
  </style>