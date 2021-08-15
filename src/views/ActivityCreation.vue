<template>
    <div>
        <form
            class="formBox"
            @submit.prevent="
                submitForm({
                    countryName: selectInput,
                    name: nameInput,
                    difficulty: difficultyInput,
                    duration: durationInput,
                    season: seasonInput,
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
                v-model="selectInput"
            >
                <option
                    v-for="(country, id) in allCountries"
                    :key="id"
                    @click="pushCountry($event)"
                    >{{ country.name }}</option
                >
            </select>
            <br />

            <label for="">Activity Name</label>
            <input type="text" class="textInputs" v-model="nameInput" />
            <br />

            <label for="">Difficulty</label>
            <input type="text" class="textInputs" v-model="difficultyInput" />
            <br />

            <label for="">Duration</label>
            <input type="text" class="textInputs" v-model="durationInput" />
            <br />

            <label for="">Season</label>
            <input type="text" class="textInputs" v-model="seasonInput" />
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
            selectInput: "",
            selectInputArray: [],
            nameInput: "",
            difficultyInput: "",
            durationInput: "",
            seasonInput: "",
        };
    },
    methods: {
        pushCountry(event) {
            this.selectInputArray = [...this.selectInputArray, event.target.value];
            console.log(event.target.value)
        },

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
    height: 5%;
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
