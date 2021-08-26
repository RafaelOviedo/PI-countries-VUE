<template>
    <h2 class="landingTitle">
        Landing Page
    </h2>
</template>

<script>
export default {
    name: "LandingPage",
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landingTitle {
    position: absolute;
    top: 30%;
    left: 45%;
}
</style>
