<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      const success = await this.$store.dispatch('login', credentials);

      if (success) {
        const userRole = this.$store.getters.userRole;
        const validRoles = ['admin', 'desenvolvedor', 'recursos-humanos'];

        if (validRoles.includes(userRole)) {
          this.$router.push('/dashboard');
        } else {
          this.$router.push('/login');
        }
      } else {
        this.error = 'Credenciais inválidas. Tente novamente.';
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.error {
  color: red;
  margin-top: 10px;
}
</style>