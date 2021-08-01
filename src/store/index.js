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
    },

    actions: {
        async getAllCountries({ commit }) {
            const response = await axios.get(
                "http://localhost:3001/countries/countries"
            );
            commit("getAllCountries", response.data);
        },
    },

    getters: {},

    modules: {},
});

export default store;
