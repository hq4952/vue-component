import axios from "axios";
import {isLoadingT,ReqT,ReqF} from "./instaedName.js"
export const actions = {
    async reqs({commit},username){
           commit(isLoadingT);
           //vue插件写法
           try {
               let res = await axios({
                   method:"GET",
                   url:"https://api.github.com/search/users",
                   params:{
                       q:username
                   }
               })
               console.log(res.data);
               //每次请求成功后把数组清空
               let users = [];
               res.data.items.forEach(item => {
                   let name = item.login;
                   let img_url = item.avatar_url;
                   let user_url = item.url;
                   let obj = {
                       name,
                       img_url,
                       user_url
                   };
                   users.push(obj);
               })
               commit(ReqT,users)
           } catch (err) {
               commit(ReqF,err.message)
               console.log(err)
           }
           
           
   }
}