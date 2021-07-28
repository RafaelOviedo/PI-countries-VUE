<template>
    <div>
        <nav class="navBar">
            <div class="logo">LOGO</div>
            <ul class="itemsBox">
                <router-link class="navItem" :to="{ name: 'HomePage' }"
                    >Home</router-link
                >
                <router-link class="navItem" :to="{ name: 'ActivityCreation' }"
                    >Create activity</router-link
                >
                <router-link class="navItem" :to="{ name: 'About' }"
                    >About</router-link
                >
            </ul>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
.navBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background: lightblue;
}

.logo {
    transform: translate(-30%, 120%);
}

.itemsBox {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transform: translate(190%, -48%);
    width: 30%;
    height: 100%;
}

.navItem {
    text-decoration: none;
    color: white;
    font-weight: bold;
}
</style>
