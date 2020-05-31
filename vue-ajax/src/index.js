import Vue from "vue";
import App from "./App.vue";
import "@babel/polyfill"
new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
    el:".root",
    render:h => h(App)
})