<template>
    <aside class="sidebar">
        <div class="title">
            <img src="../assets/images/logo.png" alt="logo convicti" class="logo">

            <h1>PAINEL DE DADOS</h1>
        </div>
        <nav>
            <ul>
                <li class="active">Dashboard</li>
                <li>Configurações</li>
                <li @click="logout">Sair</li>
            </ul>
        </nav>
    </aside>
</template>

<script>

export default {
    name: 'AppSidebar',
}

</script>

<style scoped>
.sidebar {
    max-width: 270px;
    height: 100vh;
    padding: 20px;
    border-right: 1px solid rgb(200, 200, 200);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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
}

nav li {
    padding: 10px;
    cursor: pointer;
}

.active {
    font-weight: bold;
    color: blue;
}
</style>