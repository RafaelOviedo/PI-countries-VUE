import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        allCountries: [],
        filteredCountries: [],
        countryId: {},
    },

    mutations: {
        getAllCountries(state, payload) {
            state.allCountries = payload;
        },

        getCountryByName(state, payload) {
            state.allCountries = payload;
        },

        filterByContinent(state, payload) {
            let countries = [...state.allCountries];
            state.filteredCountries = countries.filter(
                (country) => country.continent === payload
            );
        },

        orderFromAtoZ(state) {
            state.allCountries.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
        },

        orderFromZtoA(state) {
            state.allCountries.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
            });
        },

        orderFromLowestToHighest(state) {
            state.allCountries.sort((a, b) => {
                return a.population - b.population;
            });
        },

        orderFromHighestToLowest(state) {
            state.allCountries.sort((a, b) => {
                return b.population - a.population;
            });
        },
    },

    actions: {
        async getAllCountries({ commit }) {
            const response = await axios.get(
                "http://localhost:3001/countries/countries"
            );
            commit("getAllCountries", response.data);
        },

        async getCountryByName({ commit }, payload) {
            const response = await axios.get(
                "http://localhost:3001/countries?name=" + payload
            );
            console.log(response.data);
            commit("getCountryByName", response.data);
        },
    },

    getters: {},

    modules: {},
});

export default store;
