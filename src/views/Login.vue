<template>
  <div class="login-page">

    <div class="login-container">
      <div class="login-box">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="logo convicti">
          <p>CONVIC<span>TI</span></p>
        </div>
        <div class="login-form">
          <div class="login-title">
            <h1>Bem-vindo de Volta</h1>
            <p>Insira suas credenciais para acessar a plataforma</p>
          </div>
          <form @submit.prevent="login">
            <div class="input-group">
              <input type="email" id="email" placeholder="Seu email" v-model="email" required />
              <input type="password" id="password" placeholder="Sua senha" v-model="password" required />
              <button type="submit">Entrar</button>
            </div>
          </form>
          <p v-if="error" class="error">{{ error }}</p>
        </div>
      </div>
      <div class="demo-box">
        <img src="../assets/images/login/dashboard.png" alt="dashboard image" />
      </div>
    </div>
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
.login-page {
  height: 100vh;
}

.login-container {
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 40%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 32px;
  left: 44px;
  z-index: 1000;
  font-size: 20px;
}


.logo p span {
  color: #5452FC;
}

.logo img {
  width: 80px;
  display: block;
  position: relative;
}

.login-title {
  width: 290px;
  margin: 40px 0;
  justify-content: center;
}

.login-title h1 {
  font-size: 24px;
  margin: 0;
}

.login-title p {
  color: rgb(90, 89, 89);
  font-size: 12px;
  margin: 0;
}

.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  width: 290px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #5452FC;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-form .error {
  color: red;
  margin-top: 10px;
}

.demo-box {
  width: 60%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-box img {
  width: 992px;
  transform: translateX(25%);
  display: block;
  position: relative;
  z-index: 2;
}

/* Pseudo-elementos para os círculos */
.demo-box::before,
.demo-box::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: transparent;
  border: solid #5452FC;
  z-index: 1;
  top: 45%;
  left: 70%;
  transform: translate(-50%, -50%);
}

.demo-box::before {
  width: 877px;
  height: 877px;
  border-width: 1px;
}

.demo-box::after {
  width: 755px;
  height: 755px;
  border-width: 3px;
}
</style>