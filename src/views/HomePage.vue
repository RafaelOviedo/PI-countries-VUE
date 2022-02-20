<template>
    <div>
        <ul class="countriesBox">
            <li
                v-for="country in countries.slice(numOfPage, numOfPage + 9)"
                :key="country.id"
                class="countryCard"
            >
                <br />
                <router-link
                    :to="{
                        name: 'CountryDetail',
                        params: { id: country.alpha3Code },
                    }"
                    class="countryName"
                    >{{ country.name }}</router-link
                >
                <br />
                <p class="countryContinent">{{ country.region }}</p>
                <br />
                <img
                    :src="`${country.flag}`"
                    alt="country flag"
                    class="flagImage"
                />
            </li>
        </ul>

        <div class="previousAndNextButtons">
            <button 
            @click="previousPage" 
            :disabled="numOfPage === 0" 
            class="enabledPrevButton"
            :class="numOfPage === 0 ? 'disabledPrevButton' : null"
            >&#10094;</button>

            <button 
            @click="nextPage" 
            :disabled="numOfPage === 240"
            class="enabledNextButton"
            :class="numOfPage === 240 ? 'disabledNextButton' : null"
            >&#10095;</button>
        </div>

        <button @click="refreshCountries" class="refreshButton">Refresh countries</button>

        <FiltersBar />
    </div>
</template>

<script>
import FiltersBar from "../components/FiltersBar.vue";
import { mapGetters } from "vuex";
import store from "../store";

export default {
    name: "HomePage",
    components: { FiltersBar },
    data() {
        return {
            numOfPage: 0,
            countriesPerPage: 0,
        }
    },
    mounted() {
        store.dispatch("getAllCountries");
        this.countriesPerPage = this.countries.length - 10;
    },
    updated() {
        this.countriesPerPage = this.countries.length - 10;
    },
    methods: {
        previousPage() {
            if (this.numOfPage > 0) {
                this.numOfPage = this.numOfPage - 10;
            }
        },
        
        nextPage() {
            if (this.numOfPage < this.countriesPerPage) {
                this.numOfPage = this.numOfPage + 10;
            }
        },

        refreshCountries() {
            store.dispatch("refreshCountries");
        }
    },
    computed: {
        ...mapGetters(["countries"]),
    },
};
</script>

<style scoped>
.homeTitle {
    position: absolute;
    top: 10%;
    left: 46.8%;
}

.countriesBox {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    top: 15%;
    left: 1%;
    width: 70%;
    height: 70vh;
    border: 2px solid black;
    overflow: scroll;
}
.countriesBox::-webkit-scrollbar {
    display: none;
}

.countryCard {
    list-style-type: none;
    border: 1px solid black;
    width: 30%;
    height: 30%;
    margin-bottom: 2%;
    margin-right: 3%;
}

.countryName {
    transform: translate(0%, -150%);
}

.countryContinent {
    transform: translate(0%, -50%);
}

.flagImage {
    transform: translate(0%, -50%);
    width: 30%;
    height: 40%;
    border: 3px solid black;
}

.previousAndNextButtons {
    display: flex;
    justify-content: space-evenly;
    transform: translate(100%, 1650%);
    width: 15%;
    height: 5vh;
}

.refreshButton {
    transform: translate(40%, 2700%);
}

.enabledPrevButton {
    cursor: pointer;
}
.enabledNextButton {
    cursor: pointer;
}

.disabledPrevButton {
    cursor: not-allowed;
}
.disabledNextButton {
    cursor: not-allowed;
}
</style>
