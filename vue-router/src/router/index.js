import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "../views/Hoem.vue";
import About from "../views/About.vue";
import Message from "../views/Message.vue";
import News from "../views/News.vue";
import LastView from "../views/LastView.vue";
import NewsDtail from "../views/newsDetail.vue";
export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"/home/message",
                    component:Message,
                    children:[
                        {
                            path:"/home/message/last:msgId",
                            component:LastView,
                            // props:true
                            props(route){
                                return {
                                    msgId:route.params.msgId,
                                    msgContent:route.query.mesgContent
                                }
                            },
                            name:"msgInfo"
                        },
                       
                    ]
                },
                {
                    path:"/home/news",
                    component:News,
                    children:[
                        {
                            path:"/home/news/info:newsId",
                            component:NewsDtail,
                            props(route){
                                return{
                                    newsId:route.params.newsId,
                                    newsContent:route.query.newsContent
                                }
                            },
                            name:"newsInfo"
                        }
                    ]
                },
                {
                    path:"/home",
                    redirect:"/home/message"
                }
            ]
        },
        {
            path:"/about",
            component:About
        },
        {
            path:"/",
            redirect:"about"
        }
    ]
})