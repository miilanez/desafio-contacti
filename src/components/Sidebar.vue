<template>
    <aside class="sidebar">
        <div class="title">
            <img src="../assets/images/logo.png" alt="logo convicti" class="logo">

            <h1>PAINEL DE DADOS</h1>
        </div>
        <!-- Menu de Navegação -->
        <nav>
            <ul>
                <!-- Item Dashboard -->
                <MenuItem label="Dashboard" :active="activeItem === 'dashboard'" @click="setActiveItem('dashboard')" />
                <!-- Item Configurações -->
                <MenuItem label="Configurações" :active="activeItem === 'settings'"
                    @click="setActiveItem('settings')" />
                <!-- Item Sair -->
                <MenuItem label="Sair" @click="logout" />
            </ul>
        </nav>
    </aside>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
    name: 'AppSidebar',
    components: {
        MenuItem, // Registrando apenas o MenuItem
    },
    data() {
        return {
            activeItem: 'dashboard', // Item ativo inicial
        };
    },
    methods: {
        // Define o item ativo
        setActiveItem(item) {
            this.activeItem = item;
            this.$emit('item-clicked', item); // Emite um evento para o componente pai
        },
        // Logout
        logout() {
            this.$store.dispatch('logout'); // Dispara a ação de logout
            this.$router.push('/login'); // Redireciona para a página de login
        },
    },
}
</script>

<style scoped>
.sidebar {
    max-width: 270px;
    height: 100vh;
    padding: 2rem;
    border-right: 1px solid rgb(200, 200, 200);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    /* Cor de fundo */
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
}

.logo {
    width: 85px;
    margin-bottom: 30px;
}

nav ul {
    list-style: none;
    padding: 0;
    width: 100%;
    /* Largura total */
}

nav li {
    padding: 10px;
    cursor: pointer;
}
</style>