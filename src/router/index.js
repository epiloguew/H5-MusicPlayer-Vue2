import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index/index.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: (to) => {
            let login = sessionStorage.getItem("h5-vue2");
            return login ? "/recommend" : "/login";
        },
    },
    {
        path: "/login",
        component: Index,
        meta: {
            title: "登录",
        },
    },
    {
        path: "/ranking",
        component: () => import("@/views/ranking/index.vue"),
    },
    {
        path: "/recommend",
        component: () => import("@/views/recommend/index.vue"),
    },
    {
        path: "/search",
        component: () => import("@/views/search/index.vue"),
    },
    {
        path: "/singer",
        component: () => import("@/views/singer/index.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
