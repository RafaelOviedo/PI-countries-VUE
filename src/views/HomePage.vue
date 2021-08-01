<template>
    <div>
        <p class="homeTitle">COUNTRIES:</p>
        <ul class="countriesBox">
            <li
                v-for="country in allCountries"
                :key="country.id"
                class="countryCard"
            >
                <br />
                Name: {{ country.name }}
                <br />
                Continent: {{ country.continent }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";

export default {
    name: "HomePage",
    mounted() {
        store.dispatch("getAllCountries");
    },
    computed: {
        ...mapState(["allCountries"]),
    },
};
</script>

<style scoped>
.homeTitle {
    position: absolute;
    top: 10%;
    left: 45%;
}

.countriesBox {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    top: 15%;
    left: 1%;
    width: 95%;
    height: 80vh;
    border: 2px solid black;
    overflow: scroll;
}

.countryCard {
    list-style-type: none;
    border: 1px solid black;
    width: 20%;
    height: 30%;
    margin-bottom: 2%;
}
</style>
