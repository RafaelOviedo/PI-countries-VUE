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
            <button @click="filterByActivity('parachute')" class="cBtn">
                Parachute
            </button>
            <button @click="filterByActivity('horse')" class="cBtn">
                Horse
            </button>
            <button @click="filterByActivity('surf')" class="cBtn">
                Surf
            </button>
            <button @click="filterByActivity('ski')" class="cBtn">
                Ski
            </button>
            <button @click="filterByActivity('running')" class="cBtn">
                Running
            </button>
        </div>

        <p class="orderByTitle">Order By</p>
        <div class="byLetterButtons">
            <p>Letter:</p>
            <button class="cBtn" @click="orderFromAtoZ">From A to Z</button>
            <button class="cBtn" @click="orderFromZtoA">From Z to A</button>
        </div>
        <div class="byPopulationButtons">
            <p>Population:</p>
            <button class="cBtn" @click="orderFromHighestToLowest">
                From highest
            </button>
            <button class="cBtn" @click="orderFromLowestToHighest">
                From lowest
            </button>
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

        filterByActivity(activityName) {
            store.commit("filterByActivity", activityName);
        },

        orderFromAtoZ() {
            store.commit("orderFromAtoZ");
        },

        orderFromZtoA() {
            store.commit("orderFromZtoA");
        },

        orderFromLowestToHighest() {
            store.commit("orderFromLowestToHighest");
        },

        orderFromHighestToLowest() {
            store.commit("orderFromHighestToLowest");
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
    height: 70vh;
    border: 2px solid black;
    border-right: none;
    border-radius: 30px 0 0 30px;
}
.filtersBox::-webkit-scrollbar {
    display: none;
}

.continentsButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(20%, 0%);
    width: 40%;
    height: 40%;
    border-radius: 20px;
}

.activitiesButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(140%, -100%);
    width: 40%;
    height: 40%;
    border-radius: 20px;
}

.byLetterButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(20%, -200%);
    width: 40%;
    height: 20%;
    border-radius: 20px;
}

.byPopulationButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(140%, -300%);
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
    transform: translate(0%, 170%);
}

.orderByTitle {
    transform: translate(0%, -950%);
}
</style>
