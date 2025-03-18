<template>
  <div class="dashboard">
    <h1>Dashboard</h1>

    <!-- Perfis -->
     <section v-if="isAdmin">
       <nav>
         <router-link to="/perfis">Gerenciar Perfis</router-link>
         <router-link to="/usuarios">Gerenciar Usuários</router-link>
       </nav>
    </section>

    <!-- Downloads -->
    <section v-if="isAdmin || isDesenvolvedor">
      <h2>Downloads</h2>
      <p>Total de Downloads: 330</p>
    </section>

    <!-- Avaliações -->
    <section v-if="isAdmin || isDesenvolvedor || isRecursosHumanos">
      <h2>Avaliações</h2>
      <p>Média de Avaliações: 4.2</p>
    </section>

    <!-- Erros -->
    <section v-if="isAdmin || isDesenvolvedor">
      <h2>Erros</h2>
      <p>Total de Erros: 4</p>
    </section>

    <!-- Novas Funcionalidades -->
    <section v-if="isAdmin || isDesenvolvedor">
      <h2>Novas Funcionalidades</h2>
      <p>Funcionalidades em Desenvolvimento: 2</p>
    </section>

    <button @click="logout">Sair</button>
  </div>
</template>

<script>
export default {
  name: 'AppDashboard',
  computed: {
    isAdmin() {
      return this.$store.getters.userRole === 'admin';
    },
    isDesenvolvedor() {
      return this.$store.getters.userRole === 'desenvolvedor';
    },
    isRecursosHumanos() {
      return this.$store.getters.userRole === 'recursos-humanos';
    },
  },
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

section {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
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