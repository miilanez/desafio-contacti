<template>
    <div class="tabela-container">
        <div class="tabela-header">
            <h2>{{ titulo }}</h2>
            <button @click="adicionar" class="btn-adicionar">Adicionar</button>
        </div>

        <table class="tabela">
            <thead>
                <tr>
                    <th v-for="coluna in colunas" :key="coluna.campo">{{ coluna.titulo }}</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dados" :key="item.id">
                    <td v-for="coluna in colunas" :key="coluna.campo">{{ item[coluna.campo] }}</td>
                    <td>
                        <button @click="editar(item)" class="btn-editar">Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableView',
    props: {
        titulo: {
            type: String,
            required: true,
        },
        colunas: {
            type: Array,
            required: true,
        },
        dados: {
            type: Array,
            required: true,
        },
    },
    methods: {
        adicionar() {
            this.$emit('adicionar');
        },
        editar(item) {
            this.$emit('editar', item);
        },
    },
};
</script>

<style scoped>
.tabela-container {
    width: auto;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.tabela-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.tabela-header h2 {
    margin: 0;
    font-size: 24px;
    color: #333;
}

.btn-adicionar {
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-adicionar:hover {
    background-color: #369c6e;
}

.tabela {
    width: 100%;
    border-collapse: collapse;
}

.tabela th,
.tabela td {
    padding: 5px;
    text-align: left;
    font-size: 10px;
}

.tabela th {
    background-color: white;
    color: grey;
    font-size: 12px;
}

.tabela tbody tr:nth-child(even) {
    background-color: white;
}

.tabela tbody tr:nth-child(odd) {
    background-color: #f4f4f4;
}

.btn-editar {
    padding: 6px 12px;
    background-color: #ffc107;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-editar:hover {
    background-color: #e0a800;
}
</style>