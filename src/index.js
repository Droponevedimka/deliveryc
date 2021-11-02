import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'
import VuePageTransition from 'vue-page-transition'


import axios from 'axios';

Vue.use(Meta);
Vue.use(VuePageTransition)

import { sync } from 'vuex-router-sync'

import './js/'
//import './css/main.css'
import './assets/scss/main.scss'

import router from './router'
import store from './store'

sync(store, router)

const app = new Vue({
    store,
    axios,
    router,
    render: h => h(App)
}).$mount('#app')