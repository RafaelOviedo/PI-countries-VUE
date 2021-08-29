<template>
    <div>
        <form
            class="formBox"
            @submit.prevent="
                createActivity(input)
            "
        >
            <br />
            <label for="countryName"
                >Select the countries where you can do this activity</label
            >
            <select
                name="countryName"
                class="selectInput"
                v-model="input.countryName" 
                multiple="true"
            > 
                <option
                    v-for="(country, id) in allCountries"
                    :key="id"
                    :value="`${country.name}`"
                    >{{ country.name }}</option
                >
            </select>
            <br />

            <label for="">Activity Name</label>
            <input type="text" class="textInputs" v-model="input.name" />
            <br />

            <label for="">Difficulty</label>
            <input type="text" class="textInputs" v-model="input.difficulty" />
            <br />

            <label for="">Duration</label>
            <input type="text" class="textInputs" v-model="input.duration" />
            <br />

            <label for="">Season</label>
            <input type="text" class="textInputs" v-model="input.season" />
            <br />
            <br />
            <input type="submit" class="buttonInput" />
            <br />
        </form>
    </div>
</template>

<script>
import { mapState } from "vuex";
// import store from "../store/index";
import axios from "axios";

export default {
    name: "ActivityCreation",
    data() {
        return {
            input: {
            countryName: [],
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            }
        };
    },
    methods: {
        async createActivity(payload) {
            const base = process.env.VUE_APP_API || 'http://localhost:3001';
            await axios.post(`${base}/activity/`, payload);
            alert("Activity created!")
        },
    },
    computed: {
        ...mapState(["allCountries"]),
    },
};
</script>

<style scoped>
.formBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 20%;
    left: 15%;
    width: 70%;
    height: 70vh;
    border: 3px solid black;
}

.selectInput {
    transform: translate(50%);
    width: 50%;
    height: 15%;
    border-radius: 10px;
    border: 2px solid black;
    outline: none;
}

.textInputs {
    transform: translate(30%);
    width: 60%;
    height: 5%;
    border-radius: 10px;
    border: 2px solid black;
    outline: none;
}

.buttonInput {
    transform: translate(116%);
    width: 30%;
    height: 8%;
    border-radius: 15px;
    border: 2px solid black;
}
</style>