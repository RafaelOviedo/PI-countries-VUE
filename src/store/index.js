import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        allCountries: [],
        filteredCountries: [],
        countryDetail: {},
    },

    mutations: {
        getAllCountries(state, payload) {
            state.allCountries = payload;
        },

        getCountryByName(state, payload) {
            state.allCountries = payload;
        },

        getCountryById(state, payload) {
            state.countryDetail = payload;
        },

        filterByContinent(state, payload) {
            let countries = [...state.allCountries];
            state.filteredCountries = countries.filter(
                (country) => country.continent === payload
            );
        },

        filterByActivity(state, payload) {
            let countries = [...state.allCountries]
            let filteredCountries2 = [];

            for(let i = 0; i < countries.length; i++) {

                if(countries[i].activities.length) {

                    for(let j = 0; j < countries[i].activities.length; j++) {

                        if(countries[i].activities[j].name === payload) {
                            filteredCountries2.push(countries[i]);
                        }
                    }
                }
            }
            state.filteredCountries = filteredCountries2;
            return state.filteredCountries;
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

        async getCountryById({ commit }, payload) {
            const response = await axios.get(
                "http://localhost:3001/countries/" + payload
            );
            console.log(response.data);
            commit("getCountryById", response.data);
        },

        async createActivity(payload) {
            await axios.post("http://localhost:3001/activity/", payload);
        },
    },

    getters: {
        countries: (state) => {
            return state.filteredCountries.length
                ? state.filteredCountries
                : state.allCountries;
        },
    },

    modules: {},
});

export default store;
