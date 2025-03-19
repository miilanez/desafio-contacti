<template>
  <div class="dashboard">

    <main class="content">
      <h1>Estatísticas</h1>
      
      <!-- Cards de Estatísticas -->
      <section class="stats">
        <div class="card">
          <h2>Downloads</h2>
          <p class="value">330</p>
          <p class="sub">📥 240 📱 90</p>
        </div>
        <div class="card">
          <h2>Avaliações</h2>
          <p class="value">4.2/5</p>
          <p class="sub">⭐ 5.0 ⭐ 4.0</p>
        </div>
        <div class="card">
          <h2>Erros</h2>
          <p class="value">4</p>
          <p class="sub">⚠️ 2 📱 1 (-5%)</p>
        </div>
      </section>
      
      <!-- Feedbacks -->
      <section class="feedbacks">
        <h2>Feedbacks</h2>
        <table>
          <tr>
            <th>Avaliação</th>
            <th>Data</th>
            <th>Avaliação</th>
            <th>Melhorias</th>
            <th>Plataforma</th>
          </tr>
          <tr>
            <td>Aplicação ficou boa...</td>
            <td>01/04/24</td>
            <td>4</td>
            <td>Dados de Produção</td>
            <td>Android</td>
          </tr>
          <tr>
            <td>Poderiam atualizar...</td>
            <td>30/03/24</td>
            <td>5</td>
            <td>Suporte ao Usuário</td>
            <td>iOS</td>
          </tr>
        </table>
      </section>
      
      <!-- Novas Funcionalidades -->
      <section class="features">
        <h2>Novas Funcionalidades</h2>
        <table>
          <tr>
            <th>Funcionalidade</th>
            <th>Taxa de Uso</th>
          </tr>
          <tr>
            <td>Veículo Em Rota</td>
            <td>92%</td>
          </tr>
          <tr>
            <td>Avaliação de Coleta</td>
            <td>78%</td>
          </tr>
        </table>
      </section>
    </main>
    
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
  display: flex;
  background-color: #F8F8F8;
}

.content {
  flex: 1;
  padding: 20px;
}
.stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.card {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
  flex: 1;
  text-align: center;
}
.value {
  font-size: 24px;
  font-weight: bold;
}
.sub {
  font-size: 14px;
  color: gray;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background: #f4f4f4;
}


</style>