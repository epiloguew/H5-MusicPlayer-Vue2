import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index/index.vue";
import * as fun from "@/utils/index";
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
    {
        path: "/404",
        meta: {
            title: "Page 404",
        },
        component: () => import("@/views/404/index.vue"),
    },
    {
        path: "*",
        redirect: "/404",
    },
];
const router = new VueRouter({
    routes,
});
router.beforeEach((to, from, next) => {
    if (fun.getLoginStatus() || to.path === "/login") {
        next();
    } else {
        //若不是登录状态或path非login重定向
        if (from.path === "/login") {
        } else {
            router.replace({
                path: "/login",
            });
        }
    }
});
export default router;
