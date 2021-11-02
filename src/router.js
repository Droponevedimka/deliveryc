import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeComponent = () => import("./components/Home.vue");
const FinalComponent = () => import("./components/Final.vue");

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    hashbang: false,
    routes: [
        {name: 'home', path: '*',         component: HomeComponent },
        { path: '/final',         component: FinalComponent }
    ]
})