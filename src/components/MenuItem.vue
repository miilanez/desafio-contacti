<template>
    <li class="menu-item" :class="{ active: active }" @click="handleClick">
        <img :src="imgSrc" alt="icon" class="menu-item-icon" v-if="imgSrc" />
        <span class="menu-item-label">{{ label }}</span>
    </li>
</template>

<script>

export default {
    name: 'MenuItem',
    props: {
        label: {
            type: String,
            required: true,
        },
        imgSrc: {
            type: String,
            default: '',
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick() {
            this.$emit('click');
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
    font-weight: bold;
}

.menu-item-icon {
    margin-right: 10px;
    width: 18px;
}

.menu-item-label {
    font-size: 16px;
}
</style>