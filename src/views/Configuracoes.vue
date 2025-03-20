<template>
    <section class="config-container">
        <h1 class="content-title">Configurações</h1>
        <div>Perfis</div>
        <div>Usuários</div>
    </section>
</template>

<script>
export default {
    name: 'appConfiguracoes',
}
</script>

<style scoped>
.config-container {
    display: flex;
    flex-direction: column;
    background-color: #F8F8F8;
    padding: 20px;
}

.content-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
}

div {
    margin-bottom: 10px;
    font-size: 20px;
}
</style>