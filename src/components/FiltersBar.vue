<template>
    <div class="filtersBox">
        <div class="continentsButtons">
            <p>By Continent:</p>
            <button class="cBtn">Americas</button>
            <button class="cBtn">Europa</button>
            <button class="cBtn">Africa</button>
            <button class="cBtn">Asia</button>
            <button class="cBtn">Oceania</button>
        </div>
        <div class="activitiesButtons">
            <p>By Activity:</p>
            <button class="cBtn">Parachute</button>
            <button class="cBtn">Horse</button>
            <button class="cBtn">Sky Diving</button>
            <button class="cBtn">Ski</button>
            <button class="cBtn">Running</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "FiltersBar",
};
</script>

<style scoped>
.filtersBox {
    position: absolute;
    top: 17%;
    right: 0;
    width: 25%;
    height: 78vh;
    background: gray;
    border-radius: 30px 0 0 30px;
}

.continentsButtons {
    transform: translate(30%, 45%);
    width: 30%;
    height: 40%;
    background: lightgray;
    border-radius: 20px;
}

.activitiesButtons {
    transform: translate(200%, -80%);
    width: 30%;
    height: 40%;
    background: lightgray;
    border-radius: 20px;
}
</style>
