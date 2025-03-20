<template>
  <div class="dashboard">

    <main class="content">
      <!-- Cards de Estatísticas -->
      <section class="stats">
        <h1 class="content-title">Estatísticas</h1>
        <div class="stats-cards">
          <Card label="Downloads" :imgSrc="downloadIcon" value="330" androidStats="100" appleStats="98" />
          <Card label="Avaliações" :imgSrc="avaliationIcon" value="4.2/5" androidStats="5.0" appleStats="4.0" />
          <Card label="Erros" :imgSrc="errorIcon" value="4" androidStats="2" appleStats="1" errorPercentage="5%"/>
        </div>
      </section>

      <!-- Feedbacks -->
      <section class="feedbacks">
        <p class="section-title">Feedbacks</p>
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
        <p class="section-title">Novas Funcionalidades</p>
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
import Card from '@/components/Card.vue';
import downloadIcon from '../assets/images/icons/cloud-download.png';
import avaliationIcon from '../assets/images/icons/star-comment.png';
import errorIcon from '../assets/images/icons/times-hexagon.png';

export default {
  name: 'AppDashboard',
  components: {
    Card,
  },
  data() {
    return {
      downloadIcon,
      avaliationIcon,
      errorIcon,
    };
  },
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
  padding: 40px;
}

.content-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
}

.section-title {
  margin-bottom: 20px;
}

.stats {
  display: flex;
  flex-direction: column;
}

.stats-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
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

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background: #f4f4f4;
}
</style>