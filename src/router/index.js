import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import HomePage from "../views/HomePage.vue";
import ActivityCreation from "../views/ActivityCreation.vue";
import About from "../views/About.vue";

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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
