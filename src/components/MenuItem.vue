<template>
    <li class="menu-item" :class="{ active: active }" @click="handleClick">
        <span class="menu-item-label">{{ label }}</span>
    </li>
</template>

<script>

export default {
    name: 'MenuItem',
    props: {
        label: {
            type: String,
            required: true, // Rótulo do item (ex: "Dashboard", "Configurações")
        },
        // icon: {
        //     type: String,
        //     default: '', // Nome do ícone (opcional)
        // },
        active: {
            type: Boolean,
            default: false, // Indica se o item está ativo
        },
    },
    methods: {
        handleClick() {
            this.$emit('click'); // Emite um evento de clique
        },
    },
};
</script>

<style scoped>
.menu-item {
    display: flex;
    flex-direction: row;
    width: 198px;
    height: 38px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 5px;
    align-items: center;
}

.menu-item:hover {
    background-color: #f0f0f0;
}

.menu-item.active {
    background-color: #DEE6F8;
    /* Cor de fundo para item ativo */
    font-weight: bold;
}

/* .menu-item-icon {
  margin-right: 10px;
  font-size: 18px;
} */

.menu-item-label {
    font-size: 16px;
}
</style>