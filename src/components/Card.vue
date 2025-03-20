<template>
    <div class="card-container">
        <div class="card-title">
            <h3>{{ label }}</h3>
            <img :src="imgSrc" alt="icon" class="card-icon-title" v-if="imgSrc" />
        </div>
        <div class="card-content">
            <h1 class="card-content-value">{{ value }}</h1>
        </div>
        <div class="card-stats">
            <div class="mobile-stats">
                <div class="mobile android">
                    <img src="../assets/images/icons/android.png" alt="icon" class="card-icon-stats" />
                    <span> {{ androidStats }}</span>
                </div>
                <div class="mobile apple">
                    <img src="../assets/images/icons/apple.png" alt="icon" class="card-icon-stats" />
                    <span>{{ appleStats }}</span>
                </div>
            </div>
            <div class="stats-percentage">
                <span>{{ errorPercentage }}</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AppCard',
    props: {
        label: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            default: ''
        },
        androidStats: {
            type: Number,
            required: true
        },
        appleStats: {
            type: Number,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        errorPercentage: {
            type: String,
            required: false
        }
    },
}

</script>

<style scoped>
.card-container {
    flex: 1;
    height: 141px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    border-radius: 5px;
    background: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.card-title {
    display: flex;
    justify-content: space-between;
}

.card-title h3 {
    font-size: 20px;
    color: grey;
}

.card-icon-title {
    width: 26px;
    height: 26px;
}

.card-content {
    text-align: left;
}

.card-content-value {
    font-size: 40px;
    font-weight: bold;
}

.card-stats {
    display: flex;
    justify-content: space-between;
}

.mobile-stats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.mobile {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3px;
}

.mobile img {
    width: 16px;
}

.mobile span {
    width: 40px;
    font-size: 16px;
    margin-right: 1rem;
}

.stats-percentage {
    font-size: 18px;
    color: rgb(11, 112, 82);
}
</style>