import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        allCountries: [],
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
            state.allCountries = state.allCountries.filter(
                (country) => country.continent === payload
            );
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
