import MainScreen from "@/pages/MainScreen";
import {createRouter} from "vue-router";

const routes = [
    {
        path: '/',
        component: MainScreen,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;