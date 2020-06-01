import Vue from "vue";
import App from "./App.vue";
import "@babel/polyfill";
import store from "./store/store.js"
new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
    el:".root",
    render:h => h(App),
    store
})