<template>
    <div>
        <div class="countryDetailContainer">
            <h3>Country Detail</h3>
            <div class="countryDetailBox">
                <p>Name: {{ countryDetail.name }}</p>
                <p>Capital: {{ countryDetail.capital }}</p>
                <p>Continent: {{ countryDetail.region }}</p>
                <p>Sub Region: {{ countryDetail.subregion }}</p>
                <p>Population: {{ countryDetail.population }}</p>
                <img
                    :src="`${countryDetail.flag}`"
                    alt="Flag"
                    class="flagImage"
                />
            </div>
            <!-- <ul class="countryActivitiesBox">
                <h3 class="activitiesTitle">Activity/ies</h3>
                <li
                    v-for="(activity, index) in countryDetail.activities"
                    :key="index"
                    class="listItem"
                >
                    <div class="itemsBox">
                        <p>Name: {{ activity.name }}</p>
                        <p>Difficulty: {{ activity.difficulty }}</p>
                        <p>Duration: {{ activity.duration }}</p>
                        <p>Season: {{ activity.season }}</p>
                    </div>
                </li>
            </ul> -->
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";

export default {
    name: "CountryDetail",

    mounted() {
        let id = this.$route.params.id;
        store.dispatch("getCountryById", id);
    },

    computed: {
        ...mapState(["countryDetail"]),
    },
};
</script>

<style scoped>
.countryDetailContainer {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 80%;
    height: 70vh;
    /* border: 1px solid black; */
}

.countryDetailBox {
    position: absolute;
    top: 10%;
    left: 35%;
    width: 30%;
    height: 80%;
    border: 1px solid black;
}

.countryActivitiesBox {
    position: absolute;
    top: 7.5%;
    left: 60%;
    width: 30%;
    height: 80%;
    border: 1px solid black;
    overflow: scroll;
}

.activitiesTitle {
    position: relative;
    left: -7%;
}

.itemsBox {
    transform: translate(5%);
    width: 80%;
    height: 80%;
    border: 1px solid black;
    margin-bottom: 3%;
}

.flagImage {
    position: absolute;
    left: 5%;
    width: 90%;
    height: 45%;
}

.listItem {
    list-style-type: none;
}
</style>
