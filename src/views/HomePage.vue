<template>
    <div>
        <!-- <p class="homeTitle">COUNTRIES:</p> -->
        <ul class="countriesBox" v-if="allCountries">
            <li
                v-for="country in allCountries"
                :key="country.id"
                class="countryCard"
            >
                <br />
                <router-link
                    :to="{
                        name: 'CountryDetail',
                        params: { id: country.Id },
                    }"
                    class="countryName"
                    >{{ country.name }}</router-link
                >
                <br />
                <p class="countryContinent">{{ country.continent }}</p>
                <br />
                <img
                    :src="`${country.flagImage}`"
                    alt="country flag"
                    class="flagImage"
                />
            </li>
        </ul>

        <div class="backAndForwardButtons">
            <button>&#10094;</button>
            <button>&#10095;</button>
        </div>

        <FiltersBar />
    </div>
</template>

<script>
import FiltersBar from "../components/FiltersBar.vue";
import { mapState } from "vuex";
import store from "../store";

export default {
    name: "HomePage",
    components: { FiltersBar },
    mounted() {
        store.dispatch("getAllCountries");
    },
    computed: {
        ...mapState(["allCountries"]),
        ...mapState(["filteredCountries"]),
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

.backAndForwardButtons {
    display: flex;
    justify-content: space-evenly;
    transform: translate(200%, 1650%);
    width: 15%;
    height: 5vh;
    /* background: tomato; */
}
</style>
