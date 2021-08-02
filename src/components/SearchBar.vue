<template>
    <form class="searchBarBox">
        <label>Search by name</label>
        <br />
        <input type="text" />
        <input type="submit" />
    </form>
</template>

<script>
export default {
    name: "SearchBar",
};
</script>

<style scoped>
.searchBarBox {
    transform: translate(0%, 40%);
}
</style>
