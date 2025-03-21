<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-box" @click.stop>
            <h2>{{ modalTitulo }}</h2>
            <div class="modal-content">
                <!-- Conteúdo da modal -->
                <input type="text" :placeholder="modalPlaceholder" class="modal-input" />
                <p>Conteúdo</p>
            </div>
            <div class="modal-buttons">
                <button class="btn-voltar" @click="closeModal">Voltar</button>
                <button class="btn-adicionar">Adicionar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppModal",
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        modalType: {
            type: String,
            default: "perfil",
        },
        modalTitulo: {
            type: String,
            required: true,
        },
        modalPlaceholder: {
            type: String,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
    },
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 506px;
    height: 412px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 20px;
    margin-bottom: 20px;
}

.modal-content {
    height: 80%;
    margin-bottom: 20px;
}

.modal-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
}

.modal-buttons {
    display: flex;
    width: 100%;
    gap: 10px;
}

.btn-voltar {
    width:40%;
    background-color: #ccc;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}

.btn-adicionar {
    width: 60%;
    background-color: #1400ff33;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}
</style>