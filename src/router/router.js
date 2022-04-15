import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import MainScreen from "@/pages/MainScreen";
import Statistics from "@/pages/Statistics";
import AboutUser from "@/pages/AboutUser";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: SignIn,
    },
    {
        path:'/signup',
        component: SignUp,
    },
    {
        path:'/main',
        component: MainScreen,
    },
    {
        path:'/statistics',
        component: Statistics,
    },
    {
        path:'/user',
        component: AboutUser,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkExactActiveClass: "active"  
})

export default router;