import Vue from "vue";
import App from "./App.vue";
import ElementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)
new Vue({
    beforeCreate(){
        Vue.prototype.$GobalEventBus = this;
    },
    el:".root",
    render:h => h(App)
})