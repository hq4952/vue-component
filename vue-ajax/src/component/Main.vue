<template>
    <div class="row">
        <h2 v-if="this.$store.state.isFirst">hello啊</h2>
        <h2 v-else-if="this.$store.state.isLoading">请求正在发送中....</h2>
        <h2 v-else-if="this.$store.state.errmsg">请求失败 {{this.$store.state.errmsg}}.请检查后重新发送请求</h2>
        <div class="card" v-else v-for="(user) in this.$store.state.users" :key="user.name">
            <a :href="user.user_url" target="_blank">
            <img :src="user.img_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.name}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
// import axios from "axios"//引入axios
// import VueResource from "vue-resource"//引入vue-resource官方插件
// import Vue from "vue";
// Vue.use(VueResource)//使用插件
export default {
   
   
   
}
</script>

<style scoped>


</style>
