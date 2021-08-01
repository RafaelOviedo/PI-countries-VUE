import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import HomePage from "../views/HomePage.vue";
import ActivityCreation from "../views/ActivityCreation.vue";
import About from "../views/About.vue";
import CountryDetail from "../views/CountryDetail.vue";

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/create",
        name: "ActivityCreation",
        component: ActivityCreation,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/countryDetail/:id",
        name: "CountryDetail",
        component: CountryDetail,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
