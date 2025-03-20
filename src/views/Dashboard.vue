<template>
  <div class="dashboard">

    <main class="content">
      <!-- Cards de Estatísticas -->
      <section class="stats">
        <h1 class="content-title">Estatísticas</h1>
        <div class="stats-cards">
          <div v-if="isAdmin || isDesenvolvedor">
            <Card label="Downloads" :imgSrc="downloadIcon" value="330" androidStats="100" appleStats="98" />
          </div>
          <div v-if="isAdmin || isDesenvolvedor || isRecursosHumanos">
            <Card label="Avaliações" :imgSrc="avaliationIcon" value="4.2/5" androidStats="5.0" appleStats="4.0" />
          </div>
          <div v-if="isAdmin || isDesenvolvedor">
            <Card label="Erros" :imgSrc="errorIcon" value="4" androidStats="2" appleStats="1" errorPercentage="5%" />
          </div>
        </div>
      </section>

      <!-- Feedbacks -->
      <section class="feedbacks" v-if="isAdmin">
        <Table label="Feedbacks" :headers="['Avaliação', 'Data', 'Avaliação', 'Melhorias', 'Plataforma']" :rows="[
          ['Aplicação ficou boa...', '01/04/24', '4', 'Dados de Produção', 'Android'],
          ['Poderiam atualizar...', '30/03/24', '5', 'Suporte ao Usuário', 'iOS'],
          ['Interface muito intuitiva.', '25/03/24', '5', 'Nenhuma', 'Android'],
          ['Precisa de mais funcionalidades.', '20/03/24', '3', 'Adicionar relatórios', 'iOS'],
        ]" />
      </section>

      <!-- Novas Funcionalidades -->
      <section class="features" v-if="isAdmin || isDesenvolvedor">
        <Table label="Novas Funcionalidades" :headers="['Funcionalidade', 'Taxa de Uso']" :rows="[
          ['Veículo Em Rota', '92%'],
          ['Avaliação de Coleta', '78%'],
        ]" />
      </section>
    </main>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import downloadIcon from '../assets/images/icons/cloud-download.png';
import avaliationIcon from '../assets/images/icons/star-comment.png';
import errorIcon from '../assets/images/icons/times-hexagon.png';
import Table from '@/components/Table.vue';

export default {
  name: 'AppDashboard',
  components: {
    Card, Table
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
  padding: 20px;
}

.content-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
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