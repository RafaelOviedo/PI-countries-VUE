<template>
    <div>
        <nav class="navBar"> 
           <router-link 
           class="backBtn navItem"
           :to="{ name: 'LandingPage'}">
               &#10094; Back
           </router-link>
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
    left: 5%;
    width: 90%;
    height: 13vh;
    border-bottom: 2px solid black;
}

.logo {
    transform: translate(200%, 190%);
    font-weight: bold;
    width: 10%;
}

.itemsBox {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transform: translate(190%, -38%);
    width: 30%;
    height: 100%;
}

.navItem {
    text-decoration: none;
    color: black;
    font-weight: bold;
}

.backBtn {
    position: absolute;
    top: 35%;
    left: 0%;
}
</style>
