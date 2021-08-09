<template>
    <div>Country Detail</div>
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

<style scoped></style>
