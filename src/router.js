import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import AllApartments from "./components/pages/AllApartments.vue";
import AboutUs from "./components/pages/AboutUs.vue";
import AppDetail from "./components/Main/AppDetail.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/apartments",
            name: "AllApartments",
            component: AllApartments,
        },
        {
            path: "/aboutus",
            name: "AboutUs",
            component: AboutUs,
        },
        {
            path: "/search",
            name: "SearchApartments",
        },
        {
            path: "/details/:slug",
            name: "ApartmentsDetails",
            component: AppDetail,
        },

    ]
});
export {router};