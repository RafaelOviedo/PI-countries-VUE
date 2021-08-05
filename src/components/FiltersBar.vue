<template>
    <div class="filtersBox">
        <SearchBar />

        <p class="filterByTitle">Filter By</p>
        <div class="continentsButtons">
            <p>Continent:</p>
            <button @click="filterByContinent('Americas')" class="cBtn">
                Americas
            </button>
            <button @click="filterByContinent('Europe')" class="cBtn">
                Europe
            </button>
            <button @click="filterByContinent('Africa')" class="cBtn">
                Africa
            </button>
            <button @click="filterByContinent('Asia')" class="cBtn">
                Asia
            </button>
            <button @click="filterByContinent('Oceania')" class="cBtn">
                Oceania
            </button>
        </div>
        <div class="activitiesButtons">
            <p>Activity:</p>
            <button class="cBtn">Parachute</button>
            <button class="cBtn">Horse</button>
            <button class="cBtn">Sky Diving</button>
            <button class="cBtn">Ski</button>
            <button class="cBtn">Running</button>
        </div>

        <p class="orderByTitle">Order By</p>
        <div class="byLetterButtons">
            <p>Letter:</p>
            <button class="cBtn">From A to Z</button>
            <button class="cBtn">From Z to A</button>
        </div>
        <div class="byPopulationButtons">
            <p>Population:</p>
            <button class="cBtn">From highest</button>
            <button class="cBtn">From lower</button>
        </div>
    </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import store from "../store/index";

export default {
    name: "FiltersBar",
    components: { SearchBar },
    methods: {
        filterByContinent(continentName) {
            store.commit("filterByContinent", continentName);
        },
    },
};
</script>

<style scoped>
.filtersBox {
    position: absolute;
    top: 17%;
    right: 0;
    width: 25%;
    height: 77vh;
    border: 2px solid black;
    border-right: none;
    border-radius: 30px 0 0 30px;
    overflow: scroll;
}
.filtersBox::-webkit-scrollbar {
    display: none;
}

.continentsButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(20%, 10%);
    width: 40%;
    height: 40%;
    border-radius: 20px;
}

.activitiesButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(140%, -90%);
    width: 40%;
    height: 40%;
    border-radius: 20px;
}

.byLetterButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(20%, -170%);
    width: 40%;
    height: 20%;
    border-radius: 20px;
}

.byPopulationButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(140%, -270%);
    width: 40%;
    height: 20%;
    border-radius: 20px;
}

.cBtn {
    background: white;
    font-weight: bold;
    border-radius: 20px;
    border: 1px solid black;
}

.filterByTitle {
    transform: translate(0%, 200%);
}

.orderByTitle {
    transform: translate(0%, -1000%);
}
</style>
