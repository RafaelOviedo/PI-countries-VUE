<template>
    <form class="searchBarBox" @submit.prevent="getCountryByName(country)">
        <label>Search by name</label>
        <br />
        <input type="text" v-model="country" />
        <input type="submit" />
    </form>
</template>

<script>
import store from "../store/index";

export default {
    name: "SearchBar",
    data() {
        return {
            country: "",
        };
    },
    methods: {
        getCountryByName(countryName) {
            store.dispatch("getCountryByName", countryName);
        },
    },
};
</script>

<style scoped>
.searchBarBox {
    transform: translate(0%, 40%);
}
</style>
