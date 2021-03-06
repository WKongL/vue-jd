import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Raise from "../raise/index.vue"
import Myhome from "../myhome/index.vue"
import Login from "../login/index.vue"
import Register from "../register/index.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/ious",
            name: "ious",
            component: Ious,
        },
        {
            path: "/raise",
            name: "raise",
            component: Raise,
        },
        {
            path: "/myhome",
            name: "myhome",
            component: Myhome,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },{
           path: "/register",
           name: "register",
           component: Register 
        }
    ],
})
