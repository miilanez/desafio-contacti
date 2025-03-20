<template>
    <div class="table-container">
        <p class="section-title">{{ label }}</p>
        <table>
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                        <div class="cell-content">{{ cell }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'AppTable',
    props: {
        label: {
            type: String,
            required: true,
        },
        headers: {
            type: Array,
            required: true,
        },
        rows: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.table-container {
    width: auto;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.section-title {
    margin-bottom: 10px;
    font-weight: bold;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th,
td {
    padding: 5px;
    text-align: left;
    font-size: 10px;
}

th {
    background: #f4f4f4;
    font-size: 12px;
    color: #555;
}

/* Alternar cores das linhas */
tbody tr:nth-child(odd) {
    background-color: #ffffff;
}

tbody tr:nth-child(even) {
    background-color: #f4f4f4;
    /* Linhas pares: cinza claro */
}

.cell-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>