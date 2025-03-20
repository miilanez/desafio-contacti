<template>
    <aside class="sidebar">
        <div class="title">
            <img src="../assets/images/logo.png" alt="logo convicti" class="logo">

            <h1>PAINEL DE DADOS</h1>
        </div>
        <!-- Menu de Navegação -->

        <div class="menu">
            <div>
                <!-- Item Dashboard -->
                <MenuItem label="Dashboard" :imgSrc="dashboardIcon" :active="activeItem === 'dashboard'"
                    @click="setActiveItem('dashboard')" />
            </div>

            <nav class="opcoes">
                <ul>
                    <!-- Item Configurações -->
                    <MenuItem label="Configurações" :imgSrc="configIcon" :active="activeItem === 'settings'"
                        @click="setActiveItem('settings')" v-if="isAdmin" />
                    <!-- Item Sair -->
                    <MenuItem label="Sair" :imgSrc="logoutIcon" @click="logout" />
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
import MenuItem from './MenuItem.vue';
import dashboardIcon from '../assets/images/icons/dashboard.png'
import configIcon from '../assets/images/icons/settings.png'
import logoutIcon from '../assets/images/icons/exit.png'

export default {
    name: 'AppSidebar',
    components: {
        MenuItem,
    },
    data() {
        return {
            activeItem: 'dashboard',
            dashboardIcon,
            configIcon,
            logoutIcon,
        };
    },
    computed: {
        isAdmin() {
            return this.$store.getters.userRole === 'admin';
        },
    },
    methods: {
        setActiveItem(item) {
            this.activeItem = item;

            const routeMap = {
                dashboard: '/dashboard',
                settings: '/configuracoes',
            };

            if (routeMap[item]) {
                this.$router.push(routeMap[item]);
            }

            this.$emit('item-clicked', item);
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/login');
        },
    }
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
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;
}

.title h1 {
    height: 20px;
    font-weight: bold;
    font-size: 14px;
}

.logo {
    width: 80px;
    height: 60px;
    margin-bottom: 30px;
}

.menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

nav ul {
    list-style: none;
    padding: 0;
    width: 100%;
}

nav li {
    padding: 10px;
    cursor: pointer;
}
</style>