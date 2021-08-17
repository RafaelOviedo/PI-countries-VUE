<template>
    <div>
        <form
            class="formBox"
            @submit.prevent="
                submitForm({
                    countryName: input.selectInput,
                    name: input.nameInput,
                    difficulty: input.difficultyInput,
                    duration: input.durationInput,
                    season: input.seasonInput,
                })
            "
        >
            <br />
            <label for="countryName"
                >Select the countries where you can do this activity</label
            >
            <select
                type="text"
                name="countryName"
                class="selectInput"
                v-model="input.selectInput" 
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
            <input type="text" class="textInputs" v-model="input.nameInput" />
            <br />

            <label for="">Difficulty</label>
            <input type="text" class="textInputs" v-model="input.difficultyInput" />
            <br />

            <label for="">Duration</label>
            <input type="text" class="textInputs" v-model="input.durationInput" />
            <br />

            <label for="">Season</label>
            <input type="text" class="textInputs" v-model="input.seasonInput" />
            <br />
            <br />
            <input type="submit" class="buttonInput" />
            <br />
        </form>
    </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";

export default {
    name: "ActivityCreation",
    data() {
        return {
            input: {
            selectInput: [],
            nameInput: "",
            difficultyInput: "",
            durationInput: "",
            seasonInput: "",
            }
        };
    },
    methods: {
        submitForm(payload) {
            store.dispatch("createActivity", payload);
            alert("Activity created");
        },
    },
    computed: {
        ...mapState(["allCountries"]),
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
    border-radius: 15px;
    border: 2px solid black;
    outline: none;
}

.textInputs {
    transform: translate(30%);
    width: 60%;
    height: 5%;
    border-radius: 15px;
    border: 2px solid black;
    outline: none;
}

.buttonInput {
    transform: translate(116%);
    width: 30%;
    height: 8%;
    border-radius: 25px;
    border: 2px solid black;
}
</style>
