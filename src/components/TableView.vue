<template>
    <div class="tabela-container">
        <div class="tabela-header">
            <h2>{{ titulo }}</h2>
            <img src="../assets/images/icons/square-plus.png" @click="abrirModalAdicionar" class="btn-adicionar" />
        </div>

        <table class="tabela">
            <thead>
                <tr>
                    <th v-for="coluna in colunas" :key="coluna.campo">{{ coluna.titulo }}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dados" :key="item.id">
                    <td v-for="coluna in colunas" :key="coluna.campo">{{ item[coluna.campo] }}</td>
                    <td class="action">
                        <img src="../assets/images/icons/edit.png" @click="editar(item)" class="btn-editar" />
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <Modal :isOpen="isModalOpen" :modalType="modalType" :modalTitulo="modalTitulo"
            :modalPlaceholder="modalPlaceholder" @close="closeModal" />
    </div>
</template>

<script>
import Modal from '../components/Modal.vue';

export default {
    name: 'TableView',
    components: {
        Modal,
    },
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
    data() {
        return {
            isModalOpen: false,
            modalType: 'perfil',
            modalTitulo: '',
            modalPlaceholder: '',
        };
    },
    methods: {
        abrirModalAdicionar() {

            if (this.titulo.includes('Perfis')) {
                this.modalType = 'perfil';
                this.modalTitulo = 'Adicionar Perfil';
                this.modalPlaceholder = 'Novo perfil';
            } else {
                this.modalType = 'usuario';
                this.modalTitulo = 'Adicionar Usuário';
                this.modalPlaceholder = 'Novo usuário';
            }
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
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
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease;
}

.btn-adicionar:hover {
    opacity: 0.7;
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
    width: 14px;
    height: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease;
}

.btn-editar:hover {
    opacity: 0.7;
}

.action {
    width: 14px;
    text-align: right;
}
</style>