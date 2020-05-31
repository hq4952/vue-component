<template>
    <div class="row">
        <h2 v-if="isFirst">hello啊</h2>
        <h2 v-else-if="isLoading">请求正在发送中....</h2>
        <h2 v-else-if="errmsg">请求失败 {{errmsg}}.请检查后重新发送请求</h2>
        <div class="card" v-else v-for="(user) in users" :key="user.name">
            <a :href="user.user_url" target="_blank">
            <img :src="user.img_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.name}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios"//引入axios
import VueResource from "vue-resource"//引入vue-resource官方插件
import Vue from "vue";
Vue.use(VueResource)//使用插件
export default {
    mounted(){
        this.$bus.$on("vueAjax",this.setReq)
    },
    data(){
        return {
            isFirst:true,
            isLoading:false,
            errmsg:"",
            users:[]
        }
    },
    methods:{
        async setReq(searchName){
            this.isLoading = true;
            this.isFirst = false;
            //vue插件写法
            try {
                let res = await this.$http({
                method:"GET",
                url:"https://api.github.com/search/users",
                params:{
                    q:searchName
                }
            })
                this.isLoading = false;
                console.log(res.data);
                //每次请求成功后把数组清空
                this.users = [];
                res.data.items.forEach(item => {
                    let name = item.login;
                    let img_url = item.avatar_url;
                    let user_url = item.url;
                    let obj = {
                        name,
                        img_url,
                        user_url
                    };
                    this.users.push(obj);
                })
            } catch (err) {
                this.isLoading = false;
                console.log(err)
                this.errmsg = err.statusText
            }
            
            
        }
    }
}
</script>

<style scoped>


</style>
