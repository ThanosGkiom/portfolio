import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import PrivacyPolicyView from "../views/PrivacyPolicy.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: { title: "Home" },
    },
    {
        path: "/privacy-policy",
        name: "privacy-policy",
        component: PrivacyPolicyView,
        meta: { title: "Privacy Policy" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
